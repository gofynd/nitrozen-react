import React, { useState, useMemo, useCallback } from "react";
import "./Icons.scss";
import Input from "../Input";
import { ComponentStory } from "@storybook/react";
import {
  SvgDone,
  SvgContentCopy,
  SvgAdsClick,
} from "../../assets/svg-components";
import SvgComponentDemo from "../../assets/svg-component-demo.png";
// All Icon modules
import * as ActionComponents from "../../assets/svg-components/Action";
import * as AlertComponents from "../../assets/svg-components/Alert";
import * as ToggleComponents from "../../assets/svg-components/Toggle";
import * as AudioVisualComponents from "../../assets/svg-components/AudioVisual";
import * as CommunicationComponents from "../../assets/svg-components/Communication";
import * as ContentComponents from "../../assets/svg-components/Content";
import * as DeviceComponents from "../../assets/svg-components/Device";
import * as EditorComponents from "../../assets/svg-components/Editor";
import * as FileComponents from "../../assets/svg-components/File";
import * as HardwareComponents from "../../assets/svg-components/Hardware";
import * as HomeComponents from "../../assets/svg-components/Home";
import * as MapsComponents from "../../assets/svg-components/Maps";
import * as NavigationComponents from "../../assets/svg-components/Navigation";
import * as NotificationComponents from "../../assets/svg-components/Notification";
import * as OthersComponents from "../../assets/svg-components/Others";
import * as PhotographyComponents from "../../assets/svg-components/Photography";
import * as PlacesComponents from "../../assets/svg-components/Places";
import * as SocialComponents from "../../assets/svg-components/Social";

type IconsListType = Function[];

interface IconProp {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  size?: number;
}

interface ItemsType {
  categoryName: string;
  items: IconsListType;
  module: object;
  iconProp?: IconProp;
}
interface CategoryListType {
  [key: string]: ItemsType;
}

interface IconButtonType {
  component: Function;
  module: object;
  key?: number;
  iconProp?: IconProp;
}

const IconsList = (props: IconProp) => {
  const categories: string[] = [
    "action",
    "alert",
    "toggle",
    "audio-visual",
    "communication",
    "content",
    "device",
    "editor",
    "file",
    "hardware",
    "home",
    "maps",
    "navigation",
    "notification",
    "others",
    "photography",
    "places",
    "social",
  ];
  const modules: { [key: string]: object } = {
    action: ActionComponents,
    alert: AlertComponents,
    toggle: ToggleComponents,
    "audio-visual": AudioVisualComponents,
    communication: CommunicationComponents,
    content: ContentComponents,
    device: DeviceComponents,
    editor: EditorComponents,
    file: FileComponents,
    hardware: HardwareComponents,
    home: HomeComponents,
    maps: MapsComponents,
    navigation: NavigationComponents,
    notification: NotificationComponents,
    others: OthersComponents,
    photography: PhotographyComponents,
    places: PlacesComponents,
    social: SocialComponents,
  };

  const getRefactoredArray = useCallback((module, filterQuery: string = "") => {
    const componentsArray: Function[] = [];
    Object.keys(module).forEach((moduleName: string) => {
      if (filterQuery !== "") {
        if (moduleName.toLowerCase().includes(filterQuery.toLowerCase()))
          componentsArray.push(module[moduleName]);
        return;
      }
      componentsArray.push(module[moduleName]);
    });

    return componentsArray;
  }, []);

  const getCategoriesList = useCallback((filterQuery: string = "") => {
    const listObject: CategoryListType = {};
    categories.forEach((moduleName: string = "", index: number) => {
      listObject[moduleName] = {
        categoryName: moduleName,
        items: getRefactoredArray(modules[moduleName], filterQuery),
        module: modules[moduleName],
      };
    });
    return listObject;
  }, []);

  const list: CategoryListType = useMemo(() => {
    return getCategoriesList();
  }, []);

  const [filteredList, setFilteredList] = useState(list);

  let debouncerTimeout: ReturnType<typeof setTimeout>;
  const debounce = useCallback(
    (val: string = "", debouncerCallback: Function) => {
      return () => {
        clearTimeout(debouncerTimeout);
        debouncerTimeout = setTimeout(() => {
          debouncerCallback(val);
        }, 400);
      };
    },
    []
  );

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const debouncerCallback = (query: string) => {
      if (query === "") {
        setFilteredList(list);
        return;
      }
      const newItems = getCategoriesList(query);
      setFilteredList(newItems);
    };
    debounce(e.target.value, debouncerCallback)();
  }, []);

  return (
    <>
      <div className="demo-container">
        <h1>Nitrozen SVG Component Demo</h1>
        <img
          className="svgr-demo-snippet"
          src={SvgComponentDemo}
          alt="svg components demo"
        />
        <span className="demo-description">
          <SvgAdsClick size={16} color="white" />
          <span>Click the Icon to Copy</span>
          <SvgContentCopy size={16} color="white" />
          <span>the JSX to Clipboard</span>
        </span>
      </div>
      <div className="listing-parent">
        <div className="filters-section">
          <Input
            placeholder="Search Icon"
            showSearchIcon={true}
            onChange={handleSearch}
          />
          {/* <button className="filters-cta">
            <span>Filters</span>
            <SvgFilterList style={{ fontSize: '18px' }} />
          </button> */}
        </div>
        {categories.map((category: string, index: number) => {
          if (filteredList[category].items.length === 0) return <></>;
          return (
            <div key={index} className="svg-category-container">
              <IconsCategory {...filteredList[category]} iconProp={props} />
            </div>
          );
        })}
      </div>
    </>
  );

  // Component
  function IconsCategory(props: ItemsType) {
    const { categoryName, items: icons = [], module } = props;

    return (
      <>
        <span className="category-heading">{categoryName + " Icons"}</span>
        <div className="icons-list-grid">
          {icons.map((component: Function, index: number) => {
            return (
              <IconButton
                component={component}
                module={module}
                key={index}
                iconProp={props.iconProp}
              />
            );
          })}
        </div>
      </>
    );
  }

  // Component
  function IconButton(props: IconButtonType): JSX.Element {
    const [copied, setCopied] = useState(false);
    const { component, module }: { component: Function; module: object } =
      props;
    const componentName: string = component.name;
    const IconJsx: Function = module[componentName as keyof typeof module];

    const copyToClipboard = useCallback((name: string) => {
      if (copied) return;
      return function () {
        const componentText: string = `<${name} />`;
        void navigator.clipboard.writeText(componentText);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      };
    }, []);

    return (
      <button className="svg-btn" onClick={copyToClipboard(componentName)}>
        <IconJsx size={34} />
        <span title={componentName} className="component-name">
          {componentName}
        </span>
        <span className={`copy-alert ${copied ? "copied" : ""}`}>
          {<span>{copied ? "Copied" : "Copy"}</span>}
          {copied ? <SvgDone /> : <SvgContentCopy />}
        </span>
      </button>
    );
  }
};

export default {
  title: "Assets/Icons",
  component: SvgContentCopy,
  argTypes: {
    className: { control: "text" },
    color: { control: "color", defaultValue: "#8f8f8f" },
    size: { control: "number", defaultValue: 34 },
    style: { control: "object" },
  },
};

const Template: ComponentStory<typeof SvgDone> = (args) => (
  <div className="storybook-svg-container">
    <SvgDone {...args} />
  </div>
);
export const SvgExample = Template.bind({});
SvgExample.args = {
  color: "green",
  size: 30,
  className: "svg-example",
};

const SvgListStory: ComponentStory<typeof IconsList> = () => <IconsList />;
export const SvgLists = SvgListStory.bind({});
