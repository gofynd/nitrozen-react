import React, { useState, useEffect } from "react";
import NitrozenId from "../../utils/uuids";
import Dropdown from "../Dropdown";
import "./Pagination.scss";
import { SvgChevronLeft, SvgChevronRight } from "../../assets/svg-components";

export enum ModeEnum {
  MODE_REGULAR = "regular",
  MODE_CURSOR = "cursor",
}
export interface ConfigProps {
  limit?: number;
  total?: number;
  current?: number;
  prevPage?: string;
  nextPage?: string;
  currentPage?: string;
  currentTotal?: number;
}
export interface PaginationProps {
  id?: string;
  name?: string;
  mode?: ModeEnum;
  pageSizeOptions?: number[];
  value: ConfigProps;
  onChange?: Function;
  onPreviousClick?: Function;
  onNextClick?: Function;
  className?: string;
  style?: React.CSSProperties;
}

const Pagination = (props: PaginationProps) => {
  const {
    id,
    name,
    mode,
    pageSizeOptions,
    value: propValue,
    onChange,
    onPreviousClick,
    onNextClick,
    className,
    style,
    ...restProps
  } = props;
  const [value, setValue] = useState<ConfigProps>(propValue);
  const [selectedPageSize, setSelectedPageSize] = useState<any>(
    pageSizeOptions && pageSizeOptions.length > 0 ? pageSizeOptions[0] : 10
  );
  useEffect(() => {
    setDefaults();
  }, []);
  function setDefaults() {
    if (!value.current) {
      setValue({ ...value, current: 1 });
    }
  }
  function previous() {
    if (value.total) {
      if (value.current === 1) {
        return;
      }
      const newCurrent = value.current ? value.current - 1 : 0;
      setValue({ ...value, current: newCurrent });
    } else if (mode === ModeEnum.MODE_CURSOR) {
      if (!value.prevPage) return;
      setValue({ ...value, nextPage: "", currentPage: value.prevPage });
    }
    change();
    onPreviousClick?.();
  }
  function next() {
    if (value.total) {
      const totalPages = pages() || 1;
      if (value.current && value.current >= totalPages) {
        setValue({ ...value, current: totalPages });
        return;
      }
      if (totalPages === 0) {
        setValue({ ...value, current: 0 });
        return;
      }
      const newCurrent = value.current ? value.current + 1 : 1;
      setValue({ ...value, current: newCurrent });
    }
    if (mode === ModeEnum.MODE_CURSOR) {
      if (!value.nextPage) return;
      setValue({ ...value, prevPage: "", currentPage: value.nextPage });
    }
    change();
    onNextClick?.();
  }
  function pageSizeChange(size: number) {
    if (mode === ModeEnum.MODE_CURSOR) {
      setValue({
        ...value,
        current: 1,
        limit: size,
        nextPage: "",
        prevPage: "",
        currentPage: "",
      });
    } else {
      setValue({ ...value, current: 1, limit: size });
    }
    setSelectedPageSize(size);
    change();
  }
  function change() {
    onChange?.(value);
  }
  function pages() {
    if (value.limit && value.limit > 0) {
      return value.total && Math.ceil(value.total / value.limit);
    }
    return 0;
  }
  function pageSizes() {
    const po = pageSizeOptions
      ? pageSizeOptions.map((p) => {
          return { text: p.toString(), value: p.toString() };
        })
      : [];
    if (!selectedPageSize) {
      setSelectedPageSize(
        value.limit ? value.limit : po.length > 0 ? po[0].value : 10
      );
    }
    return po;
  }
  function firstRecord() {
    return (
      value.limit && value.limit * (value.current ? value.current - 1 : 0) + 1
    );
  }
  function lastRecord() {
    return (
      value.limit &&
      value.current &&
      value.total &&
      (value.limit * value.current < value.total
        ? value.limit * value.current
        : value.total)
    );
  }
  function countsText() {
    let txt = " ";
    if (showTotal()) {
      txt = `Result ${firstRecord()} - ${lastRecord()}`;
      txt += ` of ${value.total}`;
    } else if (value.currentTotal) {
      txt = `Showing ${value.currentTotal} ${name}`;
    } else {
      txt = "";
    }
    return txt;
  }
  function showTotal() {
    if (value.total) {
      return true;
    }
    return false;
  }
  function showPrev() {
    if (value.total && value.current === 1) {
      return false;
    }
    if (mode === ModeEnum.MODE_CURSOR && !value.prevPage) {
      return false;
    }
    return true;
  }
  function showNext() {
    if (value.total && value.current && value.current >= (pages() || 0)) {
      return false;
    }
    if (mode === ModeEnum.MODE_CURSOR && !value.nextPage) {
      return false;
    }
    return true;
  }
  return (
    <div
      className={`nitrozen-pagination-container ${className ?? ""}`}
      style={style ?? {}}
      id={id}
      {...restProps}
    >
      <div className="nitrozen-pagination">
        <div className="nitrozen-pagination__left">
          <span
            className="nitrozen-pagination__count"
            data-testid="pagination-count"
          >
            {countsText()}
          </span>
        </div>
        <div className="nitrozen-pagination__right">
          <div className="nitrozen-pagination__select">
            <span className="nitrozen-pagination__select__label">
              Rows per page
            </span>
            <Dropdown
              className="nitrozen-pagination-page-size"
              items={pageSizes()}
              value={selectedPageSize}
              onChange={pageSizeChange}
            />
          </div>
          {mode === ModeEnum.MODE_REGULAR && (
            <>
              <div
                data-testid="btnPrevious"
                onClick={previous}
                className={`nitrozen-pagination__prev ${
                  !showPrev() && "pagination-diabled"
                }`}
              >
                <SvgChevronLeft />
              </div>
              <div
                data-testid="btnNext"
                onClick={next}
                className={`nitrozen-pagination__next ${
                  !showNext() && "pagination-diabled"
                } `}
              >
                <SvgChevronRight />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  id: `nitrozen-pagination-${NitrozenId()}`,
  mode: ModeEnum.MODE_REGULAR,
  pageSizeOptions: [10, 20, 50, 100],
  value: {
    limit: 0,
    total: 0,
    current: 0,
    prevPage: "",
    nextPage: "",
    currentPage: "",
    currentTotal: 0,
  },
};

export default React.memo(Pagination);
