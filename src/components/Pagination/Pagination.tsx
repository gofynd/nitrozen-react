import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import NitrozenId from "../../utils/uuids";
import Dropdown from "../Dropdown";
import "./Pagination.scss";
import { usePagination } from "./usePagination";
import {
  SvgIcSearch,
  SvgIcChevronLeft,
  SvgIcChevronRight,
} from "../../assets/svg-components";

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
  visiblePagesNodeCount?: number;
}
export interface paginationInterface {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
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
    visiblePagesNodeCount,
    ...restProps
  } = props;
  const [value, setValue] = useState<ConfigProps>(propValue);
  const [selectedPageSize, setSelectedPageSize] = useState<number>(
    pageSizeOptions && pageSizeOptions.length > 0 ? pageSizeOptions[0] : 10
  );
  const refSearchBox = useRef<HTMLDivElement>(null);
  const [paginationRange, setPaginationRange] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [openPopup, setopenPopup] = useState(false);
  const [searchListPages, setSearchListPages] = useState<string[]>(["0"]);
  const [searchValue, setSearchValue] = useState(0);
  const [popupPosition, setPopupPosition] = useState(1);
  const [showSinglePage, setShowSinglePage] = useState(false);
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    setDefaults();
    onPaginationRange();
    if (isFirstRender?.current) {
      isFirstRender.current = false;
      return;
    }
    change();
  }, [value, visiblePagesNodeCount]);

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
    let maxPageCount = 1800;
    const po = pageSizeOptions
      ? pageSizeOptions.map((p) => {
        return { text: p.toString(), value: p.toString() };
      })
      : [];
    if (!selectedPageSize) {
      setSelectedPageSize(
        Number(
          value.limit ? value.limit : po.length > 0 ? po[0].value : maxPageCount
        )
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
  function onPaginationRange() {
    // Check if the media query is true
    const widths = [window.innerWidth];
    if (window.screen?.width) {
      widths.push(window.screen?.width);
    }
    const width = Math.min(...widths);

    if (visiblePagesNodeCount && visiblePagesNodeCount > 4) {
      const siblingCount =
        Math.floor(visiblePagesNodeCount / 2) -
        (visiblePagesNodeCount % 2 === 0 ? 3 : 2);
      const paginationRange = usePagination(
        visiblePagesNodeCount,
        value.total,
        value.limit,
        siblingCount,
        value.current
      );
      setPaginationRange([...paginationRange]);
      return;
    }
    if (width <= 768) {
      const paginationRange = usePagination(
        4,
        value.total,
        value.limit,
        1,
        value.current
      );
      setPaginationRange([...paginationRange]);
    } else {
      const paginationRange = usePagination(
        5,
        value.total,
        value.limit,
        2,
        value.current
      );
      setPaginationRange([...paginationRange]);
    }
  }
  function listNodeItems() {
    return paginationRange?.map((i: any, index: any) => (
      <div
        key={index}
        id={index + "node"}
        onClick={(e) => selectedNode(e, i, index)}
        className={`n-pagination__number_inactive ${i === value.current && "n-pagination__number_active"
          } ${i === "..." &&
          popupPosition === index &&
          openPopup &&
          "n-pagination__dot_active"
          }`}
      >
        {i}
      </div>
    ));
  }
  function selectedNode(e: any, i: any, index: any) {
    if (i == "...") {
      let totalPage =
        value.total && value.limit && Math.ceil(value.total / value.limit);

      let rangeStart = paginationRange[index - 1];
      let rangeEnd = totalPage;

      if (paginationRange[index + 1] == totalPage) {
        rangeEnd = totalPage;
      } else {
        rangeEnd = paginationRange[index + 1];
      }
      //calcluate range for search box
      let rangeList = range(rangeStart, rangeEnd, 1);
      setPopupPosition(index);
      setSearchListPages(rangeList);
      document.addEventListener("click", handleOutsideClick, false);
      if (index == popupPosition) setopenPopup(!openPopup);
      else setopenPopup(true);
    } else {
      setopenPopup(false);
      setValue({ ...value, current: i });
    }
    return;
  }
  function handleOutsideClick(event: any) {
    if (
      refSearchBox.current &&
      !refSearchBox.current.contains(event.target as Node)
    ) {
      setopenPopup(false);
    }
  }
  function range(start: any, stop: any, step: any) {
    let a = [start],
      b = start;
    while (b < stop) {
      a.push((b += step || 1));
    }
    return a;
  }
  function displaySearchPaginationList() {
    return searchListPages.map((i: any, index: any) => (
      <div
        key={index}
        id={i}
        onClick={(e) => selectedNode(e, i, index)}
        className={`n-pagination__search_number_inactive ${i === searchValue && "n-pagination__search_number_active"
          }`}
      >
        {i}
      </div>
    ));
  }
  function onSearchInputChnage(e: ChangeEvent<HTMLInputElement>) {
    let totalPage =
      value.total && value.limit && Math.ceil(value.total / value.limit);
    let inputValue = Number(e.target.value);
    if (inputValue <= (totalPage ? totalPage : 0)) {
      if (!e.target.value) {
        const ele = document.getElementById(searchListPages[0]);
        ele?.scrollIntoView();
        return;
      }

      const ele = document.getElementById(e.target.value);
      ele?.scrollIntoView();
    } else {
      e.target.value = e.target.value.slice(0, -1);
    }
    return setSearchValue(inputValue);
  }
  function countsText() {
    let txt = " ";
    if (showTotal()) {
      txt = `Showing ${firstRecord()} - ${lastRecord()}`;
      txt += ` of ${value.total} results`;
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
      className={`n-pagination-container ${className ?? ""}`}
      style={style ?? {}}
      id={id}
      {...restProps}
    >
      <div className="n-pagination">
        <div className="n-pagination__left">
          <span className="n-pagination__count" data-testid="pagination-count">
            {countsText()}
          </span>
        </div>
        <div className="n-pagination__main">
          {paginationRange.length > 1 ? (
            <>
              <div
                data-testid="btnPrevious"
                onClick={previous}
                className={`n-pagination__prev ${!showPrev() && "pagination-diabled"
                  }`}
              >
                <SvgIcChevronLeft />
              </div>
              <div className="n-pagination__number" ref={refSearchBox}>
                {listNodeItems()}
                {openPopup ? (
                  <div
                    className={`n-pagination__showpopup ${popupPosition === 1
                      ? "n-pagination__popup_left"
                      : "n-pagination__popup_right"
                      }`}
                    id="menu"
                  >
                    <div className="n-pagination__search_input">
                      <div className="n-pagination__search_logo">
                        <SvgIcSearch className="search-icon" />
                      </div>
                      <div className="text-input-wrapper">
                        <input
                          id="input_box"
                          type="number"
                          className="n-input"
                          placeholder="Search page"
                          onChange={(e) => onSearchInputChnage(e)}
                        />
                      </div>
                    </div>
                    <div
                      className="n-pagination__search_wrapper"
                      id="search_wrapper"
                    >
                      {displaySearchPaginationList()}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                data-testid="btnNext"
                onClick={next}
                className={`n-pagination__next ${!showNext() && "pagination-diabled"
                  } `}
              >
                <SvgIcChevronRight />
              </div>
            </>
          ) : null}
        </div>
        <div className="n-pagination__left mobile_view">
          <span
            className="n-pagination__count"
            data-testid="pagination-count-mobile-view"
          >
            {countsText()}
          </span>
        </div>
        <div className="n-pagination__right">
          <span className="n-pagination__select__label">Rows per page</span>
          <div className="n-pagination__select">
            <Dropdown
              className="n-pagination-page-size"
              items={pageSizes()}
              value={selectedPageSize}
              onChange={pageSizeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  id: `n-pagination-${NitrozenId()}`,
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
