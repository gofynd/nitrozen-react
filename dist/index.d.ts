import React, { RefObject, CSSProperties } from "react";

interface AutocompleteProps {
  className?: string;
  disabled?: boolean;
  debounceDuration?: number;
  items?: any[];
  onListItemClick?: Function;
  onBlur?: Function;
  onChange?: Function;
  onFocus?: Function;
  loader?: React.ReactNode;
  placeholder?: string;
  renderItem?: (item: any, index: number) => JSX.Element;
  resultStringKeyName?: string;
  showClearAll?: boolean;
  showLoader?: boolean;
  showItems?: boolean;
  showSearchIcon?: boolean;
  style?: React.CSSProperties;
}
declare const Autocomplete: {
  (props: AutocompleteProps): JSX.Element;
  defaultProps: {
    debounceDuration: number;
    showSearchIcon: boolean;
    showClearAll: boolean;
  };
};

interface BadgeProps {
  size?: String;
  kind?: String;
  icon?: any;
  state?: string;
  fill?: Boolean;
  labelText?: string;
  className?: string;
  style?: React.CSSProperties;
  onClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}
declare const _default$f: React.MemoExoticComponent<{
  (props: BadgeProps): JSX.Element;
  defaultProps: {
    size: string;
    kind: string;
    state: string;
    icon: string;
    fill: boolean;
    labelText: string;
    className: string;
    style: {};
    onClickHandler: () => void;
  };
}>;

interface ButtonProps {
  href?: string;
  disabled?: boolean;
  rounded?: boolean;
  state?: "positive" | "destructive" | "default";
  theme?: string;
  as?: "div" | "span" | "default";
  size?: string;
  focused?: boolean;
  showProgress?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
  >;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  name?: string;
  style?: React.CSSProperties;
}
declare const _default$e: React.MemoExoticComponent<{
  (props: ButtonProps): JSX.Element;
  defaultProps: {
    href: null;
    disabled: boolean;
    rounded: boolean;
    theme: string;
    as: null;
    size: string;
    focused: boolean;
    showProgress: boolean;
    fullWidth: boolean;
    children: null;
    onClick: null;
    className: null;
    id: null;
    icon: null;
    name: null;
  };
}>;

interface CardProps {
  title?: string;
  image?: JSX.Element;
  imageFocus?: "top" | "bottom" | "left" | "right" | "center";
  imageRatio?: "wide" | "landscape" | "portrait" | "square";
  orientation?: "horizontal" | "vertical";
  description?: string | Element;
  primaryCTA?: JSX.Element;
  secondaryCTA?: JSX.Element;
  caption?: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
}
declare const Card: {
  (props: CardProps): JSX.Element;
  defaultProps: {
    imageRatio: string;
    imageFocus: string;
    orientation: string;
    style: {};
    className: string;
  };
};

interface CheckboxProps {
  disabled?: boolean;
  value?: any;
  name?: string;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  checkboxValue: string | number | boolean | Object;
  id?: string;
  labelText?: string;
  children?: React.ReactNode;
  onChange: Function;
  checkArray?: Array<string | number | boolean | Object>;
  ref?: any;
  className?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
  isIndeterminate?: Boolean;
}
declare const Checkbox: {
  (props: CheckboxProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    value: string;
    name: string;
    checkboxValue: null;
    state: null;
    stateMessage: string;
    id: string;
    labelText: string;
    children: null;
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
    checkArray: null;
    ref: null;
    isIndeterminate: boolean;
  };
};

interface ChipProps {
  deletable?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  fontWeight?: string | number;
  state?: string;
  children?: string;
  onClick?: Function;
  onDelete?: Function;
  icon?: React.ElementType;
  iconStyle?: React.CSSProperties;
  onIconClick?: Function;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string | number;
  label?: string | number;
}
declare const _default$d: React.MemoExoticComponent<{
  (props: ChipProps): JSX.Element;
  defaultProps: {
    deletable: boolean;
    disabled: boolean;
    iconStyle: {};
    isRounded: boolean;
    state: string;
    style: {};
    maxWidth: string;
  };
}>;

interface ItemProps {
  logo?: string;
  text?: string;
  value: string | number | boolean | Object;
  isGroupLabel?: Boolean;
  sub_text?: string;
}
interface DropdownProps {
  id?: string;
  items?: ItemProps[];
  disabled?: boolean;
  label?: string;
  multiple?: Boolean;
  placeholder?: string;
  required?: Boolean;
  searchable?: Boolean;
  tooltip?: string;
  value?: string | number | boolean | any[];
  addOption?: Boolean;
  addOptionHandler?: Function;
  enableSelectAll?: Boolean;
  onChange?: Function;
  onSearchInputChange?: Function;
  onScroll?: Function;
  className?: string;
  helperText?: string;
  validationState?: string;
  validationLabel?: string;
  prefixIcon?: React.ReactNode;
}
declare const Dropdown: {
  (props: DropdownProps): JSX.Element;
  defaultProps: {
    id: string;
    items: never[];
    disabled: boolean;
    label: string;
    multiple: boolean;
    placeholder: string;
    required: boolean;
    searchable: boolean;
    tooltip: null;
    addOption: boolean;
    enableSelectAll: boolean;
    helperText: string;
    className: string;
    validationState: string;
    validationLabel: string;
    prefixIcon: string;
  };
};

interface ValidationProps {
  validationState: string;
  isHidden?: boolean;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default$c: React.MemoExoticComponent<{
  (props: ValidationProps): JSX.Element;
  defaultProps: {
    validationState: string;
    label: string;
    isHidden: boolean;
  };
}>;

interface InputProps {
  autoComplete?: string;
  type: string;
  label: string;
  placeholder?: string;
  disabled?: Boolean;
  required?: Boolean;
  value?: Number | string;
  showSearchIcon?: Boolean;
  id?: Number | string;
  name?: string;
  maxLength?: Number;
  showPrefix?: Boolean;
  showSuffix?: Boolean;
  prefix?: string | JSX.Element;
  suffix?: string | JSX.Element;
  autofocus?: Boolean;
  min?: Number;
  max?: Number;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
  helperText?: string;
  state?: "error" | "success" | "warning" | "default";
  stateText?: string;
  onSuffixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onPrefixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  tooltipText?: string;
  showTooltip?: boolean;
  tooltipIcon?: React.ReactNode;
}
declare const _default$b: React.MemoExoticComponent<{
  (props: InputProps): JSX.Element;
  defaultProps: {
    autoComplete: string;
    type: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    value: string;
    showSearchIcon: boolean;
    id: string;
    showPrefix: boolean;
    showSuffix: boolean;
    autofocus: boolean;
    onKeyUp: () => void;
    onKeyPress: () => void;
    onChange: () => void;
    onBlur: () => void;
    onFocus: () => void;
    onClick: () => void;
    state: string;
    stateText: string;
    onSuffixClick: () => void;
    onPrefixClick: () => void;
    tooltip: null;
  };
}>;

interface MenuProps {
  id?: string | undefined;
  className?: string;
  mode?: string;
  position?: string;
  inverted?: boolean;
  icon?: React.ReactSVGElement;
  maxHeight?: number;
  open?: boolean;
  selectedIndex?: number;
  onChangeMenuItem?: Function;
  onOpen?: Function;
  onClose?: Function;
  anchorEl?: RefObject<HTMLDivElement>;
  style?: CSSProperties;
  children?: React.ReactNode;
}
declare const _default$a: React.MemoExoticComponent<{
  (props: MenuProps): JSX.Element;
  defaultProps: {
    id: string;
    className: string;
    mode: string;
    position: string;
    inverted: boolean;
    icon: JSX.Element;
    maxHeight: undefined;
    open: boolean;
    selectedIndex: number;
    onChangeMenuItem: () => void;
    onOpen: () => void;
    onClose: () => void;
    anchorEl: undefined;
    style: {};
    children: JSX.Element;
  };
}>;

interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  linkConfig?: {
    href: string;
    target?: string;
  };
  divider?: boolean;
  heading?: boolean;
  selected?: boolean;
  key?: string;
  index?: number;
}
declare const _default$9: React.MemoExoticComponent<{
  (props: MenuItemProps): JSX.Element;
  defaultProps: {
    id: string;
    key: string;
    style: {};
    className: string;
    disabled: boolean;
    selected: boolean;
    heading: boolean;
    linkConfig: {};
    divider: boolean;
    childern: string;
  };
}>;

declare enum ModeEnum {
  MODE_REGULAR = "regular",
  MODE_CURSOR = "cursor",
}
interface ConfigProps {
  limit?: number;
  total?: number;
  current?: number;
  prevPage?: string;
  nextPage?: string;
  currentPage?: string;
  currentTotal?: number;
}
interface PaginationProps {
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
declare const _default$8: React.MemoExoticComponent<{
  (props: PaginationProps): JSX.Element;
  defaultProps: {
    id: string;
    mode: ModeEnum;
    pageSizeOptions: number[];
    value: {
      limit: number;
      total: number;
      current: number;
      prevPage: string;
      nextPage: string;
      currentPage: string;
      currentTotal: number;
    };
  };
}>;

interface RadioProps {
  disabled?: boolean;
  name?: string;
  value?: string;
  radioValue?: string | number;
  id?: string;
  labelText?: string;
  onChange?: Function;
  className?: string;
  style?: React.CSSProperties;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  icon?: React.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
}
declare const Radio: {
  (props: RadioProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    state: null;
    stateMessage: string;
    labelText: string;
    className: string;
    style: {};
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
  };
};

declare enum StepState {
  "Current" = "Current",
  "Upcoming" = "Upcoming",
  "Disabled" = "Disabled",
  "Issue" = "Issue",
  "Completed" = "Completed",
}
type ItemType = {
  name: string | number;
  isInactive?: boolean;
  isCompleted?: boolean;
  icon?: React.ElementType;
  iconSize?: string;
  iconColor?: string;
  extraIconProps?: object;
  buttonText?: string;
  buttonStyles?: object;
  state: StepState;
  content?: string;
};
type ItemsType = Array<ItemType>;
interface StepperProps {
  items?: ItemsType;
  onClick?: Function;
  isHorizontal: boolean;
  heading?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default$7: React.MemoExoticComponent<{
  (props: StepperProps): JSX.Element;
  defaultProps: {
    items: never[];
    isHorizontal: boolean;
  };
}>;

type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "top-start"
  | "top-end";
interface TooltipProps {
  children?: React.ReactNode;
  className?: string;
  contentBgColor?: string;
  contentColor?: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
  position?: Position;
  style?: React.CSSProperties;
  tooltipContent: JSX.Element | React.ReactNode | string;
}
declare const _default$6: React.MemoExoticComponent<{
  (props: TooltipProps): JSX.Element;
  defaultProps: {
    contentBgColor: string;
    contentColor: string;
    icon: JSX.Element;
    position: string;
    tooltipContent: string;
  };
}>;

interface TabProps {
  id?: string;
  children?: React.ReactChild;
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: React.CSSProperties;
  appearance: "normal" | "navbar";
  overflow: "fit" | "scroll" | "arrow";
  tabs?: number;
}
declare const _default$5: React.MemoExoticComponent<{
  (props: TabProps): JSX.Element;
  defaultProps: {
    id: string;
    activeIndex: number;
    tabItem: never[];
    appearance: string;
    overflow: string;
  };
}>;

interface TabItemProps {
  id?: string;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  icon?: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default$4: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    TabItemProps & React.RefAttributes<HTMLLIElement>
  >
>;

interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
  id?: string;
  labelText?: string;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  icon?: React.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
}
declare const _default$3: React.MemoExoticComponent<{
  (props: ToggleButtonProps): JSX.Element;
  defaultProps: {
    id: string;
    value: boolean;
    disabled: boolean;
    labelText: null;
    size: string;
    state: null;
    stateMessage: string;
    icon: null;
    showIcon: boolean;
    onIconClick: () => void;
  };
}>;

interface dialogTitle {
  helperBlock: {
    text: React.ReactNode;
  };
  titleBlock: {
    text: React.ReactNode;
  };
}
interface DialogProps {
  id?: string;
  title: string | dialogTitle;
  kind: "dialog" | "acknowledgement" | "informational";
  size: "s" | "m";
  theme?: string;
  children?: React.ReactNode;
  positiveButtonLabel?: string | boolean;
  negativeButtonLabel?: string | boolean;
  onPositiveResponse?: Function;
  onNegativeResponse?: Function;
  isVisible?: boolean;
  isClosable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  closeHandle?: Function;
}
declare const Dialog: {
  (props: DialogProps): JSX.Element;
  defaultProps: {
    id: string;
    title: string;
    theme: null;
    children: null;
    positiveButtonLabel: boolean;
    negativeButtonLabel: boolean;
    isVisible: boolean;
  };
};

interface ToastOptions {
  destroy: () => void;
  title: string;
  content?: string;
  duration?: number;
  shouldClose?: boolean;
  leftIconPosition: string;
  rightIconPosition: string;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  position: string;
}
declare class ToastManager {
  private readonly containerRef?;
  private toasts;
  root: any;
  constructor(position: string);
  show(options: ToastOptions): void;
  destroy(id: string): void;
  private render;
}

interface CodeProps {
  fields: 4 | 6;
  getCode: Function;
  label: string;
  codeId: string;
  type?: "text" | "password";
  validationState?: string;
  hideValidation?: boolean;
  validationLabel?: string;
  validationClassName?: string;
  validationStyle?: React.CSSProperties;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
  tooltipIcon?: React.ReactNode;
}
declare const _default$2: React.MemoExoticComponent<{
  (props: CodeProps): JSX.Element;
  defaulProps: {
    fields: number;
    label: string;
    codeId: string;
    default: string;
    hideValidation: boolean;
    validationLabel: string;
    validationClassName: string;
    validationStyle: {};
    helperText: string;
    tooltip: null;
    required: boolean;
  };
}>;

interface NudgeOptions {
  id: string;
  destroy: () => void;
  heading: string;
  supportText: string;
  duration?: number;
  cta1?: string;
  cta2?: string;
  cta1OnClick?: Function;
  cta2OnClick?: Function;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  className?: string;
  position: "top-right" | "top-bottom";
}
declare class NudgeManager {
  private readonly nudgeContainerRef?;
  private nudges;
  root: any;
  constructor(position: string);
  show(options: NudgeOptions): void;
  destroy(id: string): void;
  private render;
}

interface TableProps {
  id?: string;
  tableRow: Array<any>;
  tableHeader: Array<any>;
  footer?: String;
  rowStyle: string;
  headerBackground?: string;
  customSortIcon?: React.ReactNode;
  checkable?: boolean;
  onRowClick?: (index: number) => void;
  allChecked?: boolean;
  getCheckedItems?: Function;
  allCheckClicked?: Function;
  showColumnDivider?: boolean;
  customClassName?: string;
  customStyle?: React.CSSProperties;
}
declare const _default$1: React.NamedExoticComponent<TableProps>;

interface RangeConfigProps {
  start: string | Date;
  end: string | Date;
  min: string | Date;
  max: string | Date;
}
interface DateInputProps {
  id: string;
  label: string;
  required?: boolean;
  useDatePicker?: boolean;
  dateValue?: Date | string;
  helperText?: string;
  validationState?: string;
  validationText?: string;
  validationStyle?: React.CSSProperties;
  validationClassName?: string;
  getDateValue?: Function;
  closeClicked?: Function;
  isRange?: boolean;
  rangeConfig?: RangeConfigProps;
  onConfirmRange?: Function;
  defaultValidation?: boolean;
}
declare const _default: React.MemoExoticComponent<{
  (props: DateInputProps): JSX.Element;
  defaulProps: {
    useDatePicker: boolean;
    required: boolean;
    tooltipText: string;
    helperText: string;
    validationStyle: {};
    validationClassName: string;
    isRange: boolean;
    rangeConfig: {};
    onConfirmRange: () => void;
    defaultValidation: boolean;
  };
}>;

interface AlertProps {
  alertWidth?: string;
  buttonText?: string;
  buttonType?: "button" | "default" | "link";
  children?: React.ReactNode;
  className?: string;
  displayButton?: boolean;
  extendedAlert?: boolean;
  fullWidth?: boolean;
  href?: string;
  Icon?: React.ReactNode;
  labelText?: string;
  linkText?: string;
  loader?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  state?: string;
  style?: React.CSSProperties;
}
declare const Alert: {
  (props: AlertProps): JSX.Element;
  defaultProps: {
    className: string;
    displayButton: boolean;
    extendedAlert: boolean;
    fullWidth: boolean;
    Icon: string;
    labelText: string;
    loader: boolean;
    state: string;
    style: {};
  };
};

interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

declare function SvgIc4In1Sensor(props: IconBaseProps): JSX.Element;
declare function SvgIc404Error(props: IconBaseProps): JSX.Element;
declare function SvgIc4GBarFour(props: IconBaseProps): JSX.Element;
declare function SvgIc4GBarNoNetwork(props: IconBaseProps): JSX.Element;
declare function SvgIc4GBarNone(props: IconBaseProps): JSX.Element;
declare function SvgIc4GBarOne(props: IconBaseProps): JSX.Element;
declare function SvgIc4GBarThree(props: IconBaseProps): JSX.Element;
declare function SvgIc4GBarTwo(props: IconBaseProps): JSX.Element;
declare function SvgIc4GLte(props: IconBaseProps): JSX.Element;
declare function SvgIc4G(props: IconBaseProps): JSX.Element;
declare function SvgIc4K(props: IconBaseProps): JSX.Element;
declare function SvgIcAbdominalPain(props: IconBaseProps): JSX.Element;
declare function SvgIcAcRemote(props: IconBaseProps): JSX.Element;
declare function SvgIcAccessories(props: IconBaseProps): JSX.Element;
declare function SvgIcAccountInfo(props: IconBaseProps): JSX.Element;
declare function SvgIcAceOfSpades(props: IconBaseProps): JSX.Element;
declare function SvgIcAddCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcAdventure(props: IconBaseProps): JSX.Element;
declare function SvgIcAerobics(props: IconBaseProps): JSX.Element;
declare function SvgIcAirConditioner(props: IconBaseProps): JSX.Element;
declare function SvgIcAirDry(props: IconBaseProps): JSX.Element;
declare function SvgIcAirFilterClean(props: IconBaseProps): JSX.Element;
declare function SvgIcAirPurificationMode(props: IconBaseProps): JSX.Element;
declare function SvgIcAirport(props: IconBaseProps): JSX.Element;
declare function SvgIcAlarmOff(props: IconBaseProps): JSX.Element;
declare function SvgIcAlarmSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcAlarm(props: IconBaseProps): JSX.Element;
declare function SvgIcAlbum(props: IconBaseProps): JSX.Element;
declare function SvgIcAlert(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignBottom(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignHorizontalCenters(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignLeft(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignRight(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignTop(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignVerticalCenters(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignmentFilling(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignmentHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgIcAlignmentVertical(props: IconBaseProps): JSX.Element;
declare function SvgIcAnalyticsData(props: IconBaseProps): JSX.Element;
declare function SvgIcAnalyticsPieChartTree(props: IconBaseProps): JSX.Element;
declare function SvgIcAnalyticsPieChartTwo(props: IconBaseProps): JSX.Element;
declare function SvgIcAnalyticsPieChart(props: IconBaseProps): JSX.Element;
declare function SvgIcAnalytics(props: IconBaseProps): JSX.Element;
declare function SvgIcAndroid(props: IconBaseProps): JSX.Element;
declare function SvgIcAnimation(props: IconBaseProps): JSX.Element;
declare function SvgIcAntiCorrosion(props: IconBaseProps): JSX.Element;
declare function SvgIcAntibacteria(props: IconBaseProps): JSX.Element;
declare function SvgIcAnxiety(props: IconBaseProps): JSX.Element;
declare function SvgIcAparell(props: IconBaseProps): JSX.Element;
declare function SvgIcApartmentComplex(props: IconBaseProps): JSX.Element;
declare function SvgIcApartment(props: IconBaseProps): JSX.Element;
declare function SvgIcAppSwitcher(props: IconBaseProps): JSX.Element;
declare function SvgIcApple(props: IconBaseProps): JSX.Element;
declare function SvgIcArcade(props: IconBaseProps): JSX.Element;
declare function SvgIcArch(props: IconBaseProps): JSX.Element;
declare function SvgIcArchiveRoom(props: IconBaseProps): JSX.Element;
declare function SvgIcArchive(props: IconBaseProps): JSX.Element;
declare function SvgIcAreaMap(props: IconBaseProps): JSX.Element;
declare function SvgIcAreaTypeBottom(props: IconBaseProps): JSX.Element;
declare function SvgIcAreaTypeCenter(props: IconBaseProps): JSX.Element;
declare function SvgIcAreaTypeJustify(props: IconBaseProps): JSX.Element;
declare function SvgIcAreaTypeTop(props: IconBaseProps): JSX.Element;
declare function SvgIcArea(props: IconBaseProps): JSX.Element;
declare function SvgIcArena(props: IconBaseProps): JSX.Element;
declare function SvgIcAristMic(props: IconBaseProps): JSX.Element;
declare function SvgIcArmedOff(props: IconBaseProps): JSX.Element;
declare function SvgIcArmedPartially(props: IconBaseProps): JSX.Element;
declare function SvgIcArmed(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowBack(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowDown(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowLineDiagonal(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowLineDot(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowLine(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowNext(props: IconBaseProps): JSX.Element;
declare function SvgIcArrowUp(props: IconBaseProps): JSX.Element;
declare function SvgIcArtificialInsemination(props: IconBaseProps): JSX.Element;
declare function SvgIcAssistiveGrid(props: IconBaseProps): JSX.Element;
declare function SvgIcAstrology(props: IconBaseProps): JSX.Element;
declare function SvgIcAtHomeHazard(props: IconBaseProps): JSX.Element;
declare function SvgIcAtHome(props: IconBaseProps): JSX.Element;
declare function SvgIcAttachment(props: IconBaseProps): JSX.Element;
declare function SvgIcAudio(props: IconBaseProps): JSX.Element;
declare function SvgIcAutoMode(props: IconBaseProps): JSX.Element;
declare function SvgIcAutoRikshaw(props: IconBaseProps): JSX.Element;
declare function SvgIcAux35(props: IconBaseProps): JSX.Element;
declare function SvgIcAux(props: IconBaseProps): JSX.Element;
declare function SvgIcAwardBadge(props: IconBaseProps): JSX.Element;
declare function SvgIcAward(props: IconBaseProps): JSX.Element;
declare function SvgIcBabyBottle(props: IconBaseProps): JSX.Element;
declare function SvgIcBabyChangingRoom(props: IconBaseProps): JSX.Element;
declare function SvgIcBabyMonitor(props: IconBaseProps): JSX.Element;
declare function SvgIcBack(props: IconBaseProps): JSX.Element;
declare function SvgIcBackspace(props: IconBaseProps): JSX.Element;
declare function SvgIcBadminton(props: IconBaseProps): JSX.Element;
declare function SvgIcBakery(props: IconBaseProps): JSX.Element;
declare function SvgIcBalcony(props: IconBaseProps): JSX.Element;
declare function SvgIcBankAccount(props: IconBaseProps): JSX.Element;
declare function SvgIcBankBranch(props: IconBaseProps): JSX.Element;
declare function SvgIcBankMainBranch(props: IconBaseProps): JSX.Element;
declare function SvgIcBarcode(props: IconBaseProps): JSX.Element;
declare function SvgIcBarnStock(props: IconBaseProps): JSX.Element;
declare function SvgIcBarn(props: IconBaseProps): JSX.Element;
declare function SvgIcBasketballPlayer(props: IconBaseProps): JSX.Element;
declare function SvgIcBasketball(props: IconBaseProps): JSX.Element;
declare function SvgIcBathroom(props: IconBaseProps): JSX.Element;
declare function SvgIcBathtub(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery10(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery100(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery20(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery30(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery40(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery5(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery50(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery60(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery70(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery80(props: IconBaseProps): JSX.Element;
declare function SvgIcBattery90(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryEmptyLoading(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryEmpty(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryFullLoading(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryFull(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryHorizontal1Bar(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryHorizontal2Bar(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryHorizontal3Bar(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryHorizontalEmpty(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryLow(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryMid(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryOff(props: IconBaseProps): JSX.Element;
declare function SvgIcBatteryWarning(props: IconBaseProps): JSX.Element;
declare function SvgIcBeamer(props: IconBaseProps): JSX.Element;
declare function SvgIcBeautyProducts(props: IconBaseProps): JSX.Element;
declare function SvgIcBeauty(props: IconBaseProps): JSX.Element;
declare function SvgIcBedDouble(props: IconBaseProps): JSX.Element;
declare function SvgIcBedMedical(props: IconBaseProps): JSX.Element;
declare function SvgIcBedSingle(props: IconBaseProps): JSX.Element;
declare function SvgIcBedSleeping(props: IconBaseProps): JSX.Element;
declare function SvgIcBikeMan(props: IconBaseProps): JSX.Element;
declare function SvgIcBill(props: IconBaseProps): JSX.Element;
declare function SvgIcBinaryCode(props: IconBaseProps): JSX.Element;
declare function SvgIcBiography(props: IconBaseProps): JSX.Element;
declare function SvgIcBiology(props: IconBaseProps): JSX.Element;
declare function SvgIcBirthday(props: IconBaseProps): JSX.Element;
declare function SvgIcBladder(props: IconBaseProps): JSX.Element;
declare function SvgIcBlocked(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodBag(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodBank(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodCells(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodGlucoseMeter(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodPressureCuff(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodTest(props: IconBaseProps): JSX.Element;
declare function SvgIcBloodVessels(props: IconBaseProps): JSX.Element;
declare function SvgIcBlood(props: IconBaseProps): JSX.Element;
declare function SvgIcBluetoothConnected(props: IconBaseProps): JSX.Element;
declare function SvgIcBluetooth(props: IconBaseProps): JSX.Element;
declare function SvgIcBoards(props: IconBaseProps): JSX.Element;
declare function SvgIcBodyCare(props: IconBaseProps): JSX.Element;
declare function SvgIcBodyScale(props: IconBaseProps): JSX.Element;
declare function SvgIcBold(props: IconBaseProps): JSX.Element;
declare function SvgIcBookmarkAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcBookmark(props: IconBaseProps): JSX.Element;
declare function SvgIcBoxing(props: IconBaseProps): JSX.Element;
declare function SvgIcBrainAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcBrainStroke(props: IconBaseProps): JSX.Element;
declare function SvgIcBrainSurgery(props: IconBaseProps): JSX.Element;
declare function SvgIcBrain(props: IconBaseProps): JSX.Element;
declare function SvgIcBrightnessDisplay(props: IconBaseProps): JSX.Element;
declare function SvgIcBrightnessFull(props: IconBaseProps): JSX.Element;
declare function SvgIcBrightnessHalf(props: IconBaseProps): JSX.Element;
declare function SvgIcBrightness(props: IconBaseProps): JSX.Element;
declare function SvgIcBroadcast(props: IconBaseProps): JSX.Element;
declare function SvgIcBrokenImage(props: IconBaseProps): JSX.Element;
declare function SvgIcBroom(props: IconBaseProps): JSX.Element;
declare function SvgIcBrush(props: IconBaseProps): JSX.Element;
declare function SvgIcBuffer(props: IconBaseProps): JSX.Element;
declare function SvgIcBulb(props: IconBaseProps): JSX.Element;
declare function SvgIcBull(props: IconBaseProps): JSX.Element;
declare function SvgIcBurgerMenu(props: IconBaseProps): JSX.Element;
declare function SvgIcBusFront(props: IconBaseProps): JSX.Element;
declare function SvgIcBusShuttle(props: IconBaseProps): JSX.Element;
declare function SvgIcBusSide(props: IconBaseProps): JSX.Element;
declare function SvgIcButler(props: IconBaseProps): JSX.Element;
declare function SvgIcCableBox(props: IconBaseProps): JSX.Element;
declare function SvgIcCablePlug(props: IconBaseProps): JSX.Element;
declare function SvgIcCalculate(props: IconBaseProps): JSX.Element;
declare function SvgIcCalculatorPercentage(props: IconBaseProps): JSX.Element;
declare function SvgIcCalculator(props: IconBaseProps): JSX.Element;
declare function SvgIcCalendarEvent(props: IconBaseProps): JSX.Element;
declare function SvgIcCalendarSchedule(props: IconBaseProps): JSX.Element;
declare function SvgIcCalendarWeek(props: IconBaseProps): JSX.Element;
declare function SvgIcCalendarWeekend(props: IconBaseProps): JSX.Element;
declare function SvgIcCalendar(props: IconBaseProps): JSX.Element;
declare function SvgIcCalf(props: IconBaseProps): JSX.Element;
declare function SvgIcCallChat(props: IconBaseProps): JSX.Element;
declare function SvgIcCallClear(props: IconBaseProps): JSX.Element;
declare function SvgIcCallComposer(props: IconBaseProps): JSX.Element;
declare function SvgIcCallData(props: IconBaseProps): JSX.Element;
declare function SvgIcCallDids(props: IconBaseProps): JSX.Element;
declare function SvgIcCallEnd(props: IconBaseProps): JSX.Element;
declare function SvgIcCallForward(props: IconBaseProps): JSX.Element;
declare function SvgIcCallGroup(props: IconBaseProps): JSX.Element;
declare function SvgIcCallHd(props: IconBaseProps): JSX.Element;
declare function SvgIcCallHold(props: IconBaseProps): JSX.Element;
declare function SvgIcCallHunting(props: IconBaseProps): JSX.Element;
declare function SvgIcCallIncomingOutgoing(props: IconBaseProps): JSX.Element;
declare function SvgIcCallIncomming(props: IconBaseProps): JSX.Element;
declare function SvgIcCallMissed(props: IconBaseProps): JSX.Element;
declare function SvgIcCallNumber(props: IconBaseProps): JSX.Element;
declare function SvgIcCallOff(props: IconBaseProps): JSX.Element;
declare function SvgIcCallOutgoing(props: IconBaseProps): JSX.Element;
declare function SvgIcCallSound(props: IconBaseProps): JSX.Element;
declare function SvgIcCallWifi(props: IconBaseProps): JSX.Element;
declare function SvgIcCall(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraAuto(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraDome(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraFocus(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraHighEnd(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraManual(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraVarifocalBullet(props: IconBaseProps): JSX.Element;
declare function SvgIcCameraVarifocalDome(props: IconBaseProps): JSX.Element;
declare function SvgIcCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcCancer(props: IconBaseProps): JSX.Element;
declare function SvgIcCarDriver(props: IconBaseProps): JSX.Element;
declare function SvgIcCarFleet(props: IconBaseProps): JSX.Element;
declare function SvgIcCarFront(props: IconBaseProps): JSX.Element;
declare function SvgIcCarShareRide(props: IconBaseProps): JSX.Element;
declare function SvgIcCarSide(props: IconBaseProps): JSX.Element;
declare function SvgIcCarTop(props: IconBaseProps): JSX.Element;
declare function SvgIcCarbonDioxide(props: IconBaseProps): JSX.Element;
declare function SvgIcCard(props: IconBaseProps): JSX.Element;
declare function SvgIcCardiologyOutput(props: IconBaseProps): JSX.Element;
declare function SvgIcCardiologyVentricle(props: IconBaseProps): JSX.Element;
declare function SvgIcCardiology(props: IconBaseProps): JSX.Element;
declare function SvgIcCards(props: IconBaseProps): JSX.Element;
declare function SvgIcCare(props: IconBaseProps): JSX.Element;
declare function SvgIcCarpenter(props: IconBaseProps): JSX.Element;
declare function SvgIcCarpool(props: IconBaseProps): JSX.Element;
declare function SvgIcCartPreorder(props: IconBaseProps): JSX.Element;
declare function SvgIcCart(props: IconBaseProps): JSX.Element;
declare function SvgIcCastMedia(props: IconBaseProps): JSX.Element;
declare function SvgIcCastScreen(props: IconBaseProps): JSX.Element;
declare function SvgIcCast(props: IconBaseProps): JSX.Element;
declare function SvgIcCategoriesSub(props: IconBaseProps): JSX.Element;
declare function SvgIcCategories(props: IconBaseProps): JSX.Element;
declare function SvgIcCattleGroup(props: IconBaseProps): JSX.Element;
declare function SvgIcCattleList(props: IconBaseProps): JSX.Element;
declare function SvgIcCcvOff(props: IconBaseProps): JSX.Element;
declare function SvgIcCcv(props: IconBaseProps): JSX.Element;
declare function SvgIcCelebration(props: IconBaseProps): JSX.Element;
declare function SvgIcChaos(props: IconBaseProps): JSX.Element;
declare function SvgIcCharity(props: IconBaseProps): JSX.Element;
declare function SvgIcChat(props: IconBaseProps): JSX.Element;
declare function SvgIcChats(props: IconBaseProps): JSX.Element;
declare function SvgIcChemistry(props: IconBaseProps): JSX.Element;
declare function SvgIcCherry(props: IconBaseProps): JSX.Element;
declare function SvgIcChestPain(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronDownCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronDown(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronLeftCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronLeft(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronRightCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronRight(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronUpCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcChevronUp(props: IconBaseProps): JSX.Element;
declare function SvgIcChildrenGame(props: IconBaseProps): JSX.Element;
declare function SvgIcChip(props: IconBaseProps): JSX.Element;
declare function SvgIcCholesterol(props: IconBaseProps): JSX.Element;
declare function SvgIcCinchCable(props: IconBaseProps): JSX.Element;
declare function SvgIcCinch(props: IconBaseProps): JSX.Element;
declare function SvgIcCity(props: IconBaseProps): JSX.Element;
declare function SvgIcClauset(props: IconBaseProps): JSX.Element;
declare function SvgIcCleaningRequest(props: IconBaseProps): JSX.Element;
declare function SvgIcCleaning(props: IconBaseProps): JSX.Element;
declare function SvgIcClear(props: IconBaseProps): JSX.Element;
declare function SvgIcClerk(props: IconBaseProps): JSX.Element;
declare function SvgIcClimbing(props: IconBaseProps): JSX.Element;
declare function SvgIcClipping(props: IconBaseProps): JSX.Element;
declare function SvgIcCloseRemove(props: IconBaseProps): JSX.Element;
declare function SvgIcClose(props: IconBaseProps): JSX.Element;
declare function SvgIcCloudConnect(props: IconBaseProps): JSX.Element;
declare function SvgIcCloudOff(props: IconBaseProps): JSX.Element;
declare function SvgIcCloudSynced(props: IconBaseProps): JSX.Element;
declare function SvgIcCloudUpload(props: IconBaseProps): JSX.Element;
declare function SvgIcCloud(props: IconBaseProps): JSX.Element;
declare function SvgIcCodeDocument(props: IconBaseProps): JSX.Element;
declare function SvgIcCode(props: IconBaseProps): JSX.Element;
declare function SvgIcColonComplaints(props: IconBaseProps): JSX.Element;
declare function SvgIcColourPalette(props: IconBaseProps): JSX.Element;
declare function SvgIcColourSpot(props: IconBaseProps): JSX.Element;
declare function SvgIcComedy(props: IconBaseProps): JSX.Element;
declare function SvgIcCommunicationSkills(props: IconBaseProps): JSX.Element;
declare function SvgIcCompare(props: IconBaseProps): JSX.Element;
declare function SvgIcComparison(props: IconBaseProps): JSX.Element;
declare function SvgIcCompoundInterest(props: IconBaseProps): JSX.Element;
declare function SvgIcCompress(props: IconBaseProps): JSX.Element;
declare function SvgIcComputerGraph(props: IconBaseProps): JSX.Element;
declare function SvgIcComputerHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcComputer(props: IconBaseProps): JSX.Element;
declare function SvgIcConfirm(props: IconBaseProps): JSX.Element;
declare function SvgIcConnectedHome(props: IconBaseProps): JSX.Element;
declare function SvgIcConsultant(props: IconBaseProps): JSX.Element;
declare function SvgIcConsumptionAccounted(props: IconBaseProps): JSX.Element;
declare function SvgIcConsumptionAverage(props: IconBaseProps): JSX.Element;
declare function SvgIcConsumptionHigh(props: IconBaseProps): JSX.Element;
declare function SvgIcConsumptionLow(props: IconBaseProps): JSX.Element;
declare function SvgIcConsumptionUnaccounted(props: IconBaseProps): JSX.Element;
declare function SvgIcContactAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcContactShare(props: IconBaseProps): JSX.Element;
declare function SvgIcContacts(props: IconBaseProps): JSX.Element;
declare function SvgIcControler(props: IconBaseProps): JSX.Element;
declare function SvgIcCooking(props: IconBaseProps): JSX.Element;
declare function SvgIcCoolingHeating(props: IconBaseProps): JSX.Element;
declare function SvgIcCooling(props: IconBaseProps): JSX.Element;
declare function SvgIcCopyDocument(props: IconBaseProps): JSX.Element;
declare function SvgIcCopy(props: IconBaseProps): JSX.Element;
declare function SvgIcCough(props: IconBaseProps): JSX.Element;
declare function SvgIcCoupon(props: IconBaseProps): JSX.Element;
declare function SvgIcCovid19(props: IconBaseProps): JSX.Element;
declare function SvgIcCowAdult(props: IconBaseProps): JSX.Element;
declare function SvgIcCowDeviceOff(props: IconBaseProps): JSX.Element;
declare function SvgIcCowDevice(props: IconBaseProps): JSX.Element;
declare function SvgIcCowHeatActivity(props: IconBaseProps): JSX.Element;
declare function SvgIcCowProfile(props: IconBaseProps): JSX.Element;
declare function SvgIcCowRetired(props: IconBaseProps): JSX.Element;
declare function SvgIcCreatePlaylist(props: IconBaseProps): JSX.Element;
declare function SvgIcCricket(props: IconBaseProps): JSX.Element;
declare function SvgIcCrime(props: IconBaseProps): JSX.Element;
declare function SvgIcCropFree(props: IconBaseProps): JSX.Element;
declare function SvgIcCropOriginal(props: IconBaseProps): JSX.Element;
declare function SvgIcCropPlanningStyle1(props: IconBaseProps): JSX.Element;
declare function SvgIcCropPlanningStyle2(props: IconBaseProps): JSX.Element;
declare function SvgIcCropPlanningStyle3(props: IconBaseProps): JSX.Element;
declare function SvgIcCrop(props: IconBaseProps): JSX.Element;
declare function SvgIcCup(props: IconBaseProps): JSX.Element;
declare function SvgIcCutOut(props: IconBaseProps): JSX.Element;
declare function SvgIcCutScissor(props: IconBaseProps): JSX.Element;
declare function SvgIcCut(props: IconBaseProps): JSX.Element;
declare function SvgIcCv(props: IconBaseProps): JSX.Element;
declare function SvgIcDancing(props: IconBaseProps): JSX.Element;
declare function SvgIcDarkLight(props: IconBaseProps): JSX.Element;
declare function SvgIcDataCard(props: IconBaseProps): JSX.Element;
declare function SvgIcDataCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcDataInOutNone(props: IconBaseProps): JSX.Element;
declare function SvgIcDataInOut(props: IconBaseProps): JSX.Element;
declare function SvgIcDataIn(props: IconBaseProps): JSX.Element;
declare function SvgIcDataLoan(props: IconBaseProps): JSX.Element;
declare function SvgIcDataOut(props: IconBaseProps): JSX.Element;
declare function SvgIcDataPack(props: IconBaseProps): JSX.Element;
declare function SvgIcDataSaver(props: IconBaseProps): JSX.Element;
declare function SvgIcDayNight(props: IconBaseProps): JSX.Element;
declare function SvgIcDay(props: IconBaseProps): JSX.Element;
declare function SvgIcDc9V(props: IconBaseProps): JSX.Element;
declare function SvgIcDeleteBackspace(props: IconBaseProps): JSX.Element;
declare function SvgIcDeliveryBoy(props: IconBaseProps): JSX.Element;
declare function SvgIcDeployment(props: IconBaseProps): JSX.Element;
declare function SvgIcDesignTools(props: IconBaseProps): JSX.Element;
declare function SvgIcDevelopment(props: IconBaseProps): JSX.Element;
declare function SvgIcDeviceHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcDevicesMixed(props: IconBaseProps): JSX.Element;
declare function SvgIcDevotion(props: IconBaseProps): JSX.Element;
declare function SvgIcDiamond(props: IconBaseProps): JSX.Element;
declare function SvgIcDiaolog(props: IconBaseProps): JSX.Element;
declare function SvgIcDice2(props: IconBaseProps): JSX.Element;
declare function SvgIcDigitalEcosystem(props: IconBaseProps): JSX.Element;
declare function SvgIcDigitalSelfService(props: IconBaseProps): JSX.Element;
declare function SvgIcDining(props: IconBaseProps): JSX.Element;
declare function SvgIcDirectionTurnRight(props: IconBaseProps): JSX.Element;
declare function SvgIcDirectionsOff(props: IconBaseProps): JSX.Element;
declare function SvgIcDisabled(props: IconBaseProps): JSX.Element;
declare function SvgIcDisinfectant(props: IconBaseProps): JSX.Element;
declare function SvgIcDislike(props: IconBaseProps): JSX.Element;
declare function SvgIcDisplayLed(props: IconBaseProps): JSX.Element;
declare function SvgIcDisposeOff(props: IconBaseProps): JSX.Element;
declare function SvgIcDistributeHorizontalSpacing(
  props: IconBaseProps
): JSX.Element;
declare function SvgIcDistributeVerticalSpacing(
  props: IconBaseProps
): JSX.Element;
declare function SvgIcDistribution(props: IconBaseProps): JSX.Element;
declare function SvgIcDizzy(props: IconBaseProps): JSX.Element;
declare function SvgIcDna(props: IconBaseProps): JSX.Element;
declare function SvgIcDoctor(props: IconBaseProps): JSX.Element;
declare function SvgIcDocumentUnknown(props: IconBaseProps): JSX.Element;
declare function SvgIcDocumentViewer(props: IconBaseProps): JSX.Element;
declare function SvgIcDocument(props: IconBaseProps): JSX.Element;
declare function SvgIcDocumentary(props: IconBaseProps): JSX.Element;
declare function SvgIcDolbySound(props: IconBaseProps): JSX.Element;
declare function SvgIcDongleAudio(props: IconBaseProps): JSX.Element;
declare function SvgIcDongleVideo(props: IconBaseProps): JSX.Element;
declare function SvgIcDoodle(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorBell(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorLocked(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorOpen(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorUnlocked(props: IconBaseProps): JSX.Element;
declare function SvgIcDoor(props: IconBaseProps): JSX.Element;
declare function SvgIcDoorlock(props: IconBaseProps): JSX.Element;
declare function SvgIcDownloadFast(props: IconBaseProps): JSX.Element;
declare function SvgIcDownloadQueueBottom(props: IconBaseProps): JSX.Element;
declare function SvgIcDownloadQueueTop(props: IconBaseProps): JSX.Element;
declare function SvgIcDownloadQueue(props: IconBaseProps): JSX.Element;
declare function SvgIcDownload(props: IconBaseProps): JSX.Element;
declare function SvgIcDownloadsFast(props: IconBaseProps): JSX.Element;
declare function SvgIcDownloads(props: IconBaseProps): JSX.Element;
declare function SvgIcDrama(props: IconBaseProps): JSX.Element;
declare function SvgIcDrawer(props: IconBaseProps): JSX.Element;
declare function SvgIcDrill(props: IconBaseProps): JSX.Element;
declare function SvgIcDrinks(props: IconBaseProps): JSX.Element;
declare function SvgIcDrone(props: IconBaseProps): JSX.Element;
declare function SvgIcDryAir(props: IconBaseProps): JSX.Element;
declare function SvgIcDthSignal(props: IconBaseProps): JSX.Element;
declare function SvgIcDth(props: IconBaseProps): JSX.Element;
declare function SvgIcDualCameraHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgIcDualCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcDualSim(props: IconBaseProps): JSX.Element;
declare function SvgIcDvdPlayer(props: IconBaseProps): JSX.Element;
declare function SvgIcEBookReader(props: IconBaseProps): JSX.Element;
declare function SvgIcESim(props: IconBaseProps): JSX.Element;
declare function SvgIcEarPain(props: IconBaseProps): JSX.Element;
declare function SvgIcEar(props: IconBaseProps): JSX.Element;
declare function SvgIcEditPen(props: IconBaseProps): JSX.Element;
declare function SvgIcEdit(props: IconBaseProps): JSX.Element;
declare function SvgIcEducation(props: IconBaseProps): JSX.Element;
declare function SvgIcElephant(props: IconBaseProps): JSX.Element;
declare function SvgIcElevator(props: IconBaseProps): JSX.Element;
declare function SvgIcEllipse(props: IconBaseProps): JSX.Element;
declare function SvgIcEmergencyServices(props: IconBaseProps): JSX.Element;
declare function SvgIcEmvcoTapPay(props: IconBaseProps): JSX.Element;
declare function SvgIcEndChat(props: IconBaseProps): JSX.Element;
declare function SvgIcEndocrinology(props: IconBaseProps): JSX.Element;
declare function SvgIcEnergyOthers(props: IconBaseProps): JSX.Element;
declare function SvgIcEnergyTotal(props: IconBaseProps): JSX.Element;
declare function SvgIcEngineeringRequest(props: IconBaseProps): JSX.Element;
declare function SvgIcEnter(props: IconBaseProps): JSX.Element;
declare function SvgIcEnterpreneurial(props: IconBaseProps): JSX.Element;
declare function SvgIcEntertainmentPlay(props: IconBaseProps): JSX.Element;
declare function SvgIcEntertainment(props: IconBaseProps): JSX.Element;
declare function SvgIcEpisodes(props: IconBaseProps): JSX.Element;
declare function SvgIcEqualizer(props: IconBaseProps): JSX.Element;
declare function SvgIcEraser(props: IconBaseProps): JSX.Element;
declare function SvgIcErrorColored(props: IconBaseProps): JSX.Element;
declare function SvgIcError(props: IconBaseProps): JSX.Element;
declare function SvgIcEthernetOff(props: IconBaseProps): JSX.Element;
declare function SvgIcEthernet(props: IconBaseProps): JSX.Element;
declare function SvgIcExchangeData(props: IconBaseProps): JSX.Element;
declare function SvgIcExchange(props: IconBaseProps): JSX.Element;
declare function SvgIcExclamation(props: IconBaseProps): JSX.Element;
declare function SvgIcExploreCompass(props: IconBaseProps): JSX.Element;
declare function SvgIcExport(props: IconBaseProps): JSX.Element;
declare function SvgIcExposure(props: IconBaseProps): JSX.Element;
declare function SvgIcExtract(props: IconBaseProps): JSX.Element;
declare function SvgIcFaceFilter(props: IconBaseProps): JSX.Element;
declare function SvgIcFacebook(props: IconBaseProps): JSX.Element;
declare function SvgIcFallopianTube(props: IconBaseProps): JSX.Element;
declare function SvgIcFamilyHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcFamilyMember(props: IconBaseProps): JSX.Element;
declare function SvgIcFanAutoSpeed(props: IconBaseProps): JSX.Element;
declare function SvgIcFanSpeedHigh(props: IconBaseProps): JSX.Element;
declare function SvgIcFanSpeedLow(props: IconBaseProps): JSX.Element;
declare function SvgIcFanSpeedMedium(props: IconBaseProps): JSX.Element;
declare function SvgIcFanSpeedTurbo(props: IconBaseProps): JSX.Element;
declare function SvgIcFan(props: IconBaseProps): JSX.Element;
declare function SvgIcFantasy(props: IconBaseProps): JSX.Element;
declare function SvgIcFaq(props: IconBaseProps): JSX.Element;
declare function SvgIcFashionChild(props: IconBaseProps): JSX.Element;
declare function SvgIcFashionWoman(props: IconBaseProps): JSX.Element;
declare function SvgIcFashion(props: IconBaseProps): JSX.Element;
declare function SvgIcFavorite(props: IconBaseProps): JSX.Element;
declare function SvgIcFavouriteMode(props: IconBaseProps): JSX.Element;
declare function SvgIcFeaver(props: IconBaseProps): JSX.Element;
declare function SvgIcFeedbackAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcFeedbackRating(props: IconBaseProps): JSX.Element;
declare function SvgIcFeedback(props: IconBaseProps): JSX.Element;
declare function SvgIcFemaleHygieneProducts(props: IconBaseProps): JSX.Element;
declare function SvgIcFemaleMale(props: IconBaseProps): JSX.Element;
declare function SvgIcFemale(props: IconBaseProps): JSX.Element;
declare function SvgIcFertilized(props: IconBaseProps): JSX.Element;
declare function SvgIcFertilizer(props: IconBaseProps): JSX.Element;
declare function SvgIcFilterMultiple(props: IconBaseProps): JSX.Element;
declare function SvgIcFilter(props: IconBaseProps): JSX.Element;
declare function SvgIcFingerprint(props: IconBaseProps): JSX.Element;
declare function SvgIcFinishLine(props: IconBaseProps): JSX.Element;
declare function SvgIcFireAlarm(props: IconBaseProps): JSX.Element;
declare function SvgIcFire(props: IconBaseProps): JSX.Element;
declare function SvgIcFirefighterManager(props: IconBaseProps): JSX.Element;
declare function SvgIcFirefighterOfficer(props: IconBaseProps): JSX.Element;
declare function SvgIcFirefighter(props: IconBaseProps): JSX.Element;
declare function SvgIcFirstAid(props: IconBaseProps): JSX.Element;
declare function SvgIcFirstpage(props: IconBaseProps): JSX.Element;
declare function SvgIcFitness(props: IconBaseProps): JSX.Element;
declare function SvgIcFixedDeposit(props: IconBaseProps): JSX.Element;
declare function SvgIcFlagGb(props: IconBaseProps): JSX.Element;
declare function SvgIcFlagIn(props: IconBaseProps): JSX.Element;
declare function SvgIcFlag(props: IconBaseProps): JSX.Element;
declare function SvgIcFlashAuto(props: IconBaseProps): JSX.Element;
declare function SvgIcFlashOff(props: IconBaseProps): JSX.Element;
declare function SvgIcFlash(props: IconBaseProps): JSX.Element;
declare function SvgIcFlightGame(props: IconBaseProps): JSX.Element;
declare function SvgIcFlightModeOff(props: IconBaseProps): JSX.Element;
declare function SvgIcFlightMode(props: IconBaseProps): JSX.Element;
declare function SvgIcFlipCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcFlipHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgIcFlipVertical(props: IconBaseProps): JSX.Element;
declare function SvgIcFlower(props: IconBaseProps): JSX.Element;
declare function SvgIcFlushRelay(props: IconBaseProps): JSX.Element;
declare function SvgIcFolderFavorites(props: IconBaseProps): JSX.Element;
declare function SvgIcFolderMoveFiles(props: IconBaseProps): JSX.Element;
declare function SvgIcFolderRated(props: IconBaseProps): JSX.Element;
declare function SvgIcFolderRemove(props: IconBaseProps): JSX.Element;
declare function SvgIcFolder(props: IconBaseProps): JSX.Element;
declare function SvgIcFoodDrink(props: IconBaseProps): JSX.Element;
declare function SvgIcFootball(props: IconBaseProps): JSX.Element;
declare function SvgIcForkSpoon(props: IconBaseProps): JSX.Element;
declare function SvgIcFormAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcForm(props: IconBaseProps): JSX.Element;
declare function SvgIcForms(props: IconBaseProps): JSX.Element;
declare function SvgIcFort(props: IconBaseProps): JSX.Element;
declare function SvgIcForward1(props: IconBaseProps): JSX.Element;
declare function SvgIcForward(props: IconBaseProps): JSX.Element;
declare function SvgIcFoyer(props: IconBaseProps): JSX.Element;
declare function SvgIcFrame(props: IconBaseProps): JSX.Element;
declare function SvgIcFrontDoor(props: IconBaseProps): JSX.Element;
declare function SvgIcFuel(props: IconBaseProps): JSX.Element;
declare function SvgIcFullscreenModeOff(props: IconBaseProps): JSX.Element;
declare function SvgIcFullscreenMode(props: IconBaseProps): JSX.Element;
declare function SvgIcGames(props: IconBaseProps): JSX.Element;
declare function SvgIcGamingCloud(props: IconBaseProps): JSX.Element;
declare function SvgIcGamingControllers(props: IconBaseProps): JSX.Element;
declare function SvgIcGamingProfile(props: IconBaseProps): JSX.Element;
declare function SvgIcGaming(props: IconBaseProps): JSX.Element;
declare function SvgIcGarage(props: IconBaseProps): JSX.Element;
declare function SvgIcGardenPlants(props: IconBaseProps): JSX.Element;
declare function SvgIcGardenTools(props: IconBaseProps): JSX.Element;
declare function SvgIcGasPiped(props: IconBaseProps): JSX.Element;
declare function SvgIcGasSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcGas(props: IconBaseProps): JSX.Element;
declare function SvgIcGastrointestinal(props: IconBaseProps): JSX.Element;
declare function SvgIcGateway1(props: IconBaseProps): JSX.Element;
declare function SvgIcGateway2(props: IconBaseProps): JSX.Element;
declare function SvgIcGayser(props: IconBaseProps): JSX.Element;
declare function SvgIcGeometry(props: IconBaseProps): JSX.Element;
declare function SvgIcGhost(props: IconBaseProps): JSX.Element;
declare function SvgIcGiftCard(props: IconBaseProps): JSX.Element;
declare function SvgIcGift(props: IconBaseProps): JSX.Element;
declare function SvgIcGladiator(props: IconBaseProps): JSX.Element;
declare function SvgIcGlobe(props: IconBaseProps): JSX.Element;
declare function SvgIcGoBack10(props: IconBaseProps): JSX.Element;
declare function SvgIcGoBack30(props: IconBaseProps): JSX.Element;
declare function SvgIcGoBack(props: IconBaseProps): JSX.Element;
declare function SvgIcGoForward10(props: IconBaseProps): JSX.Element;
declare function SvgIcGoForward30(props: IconBaseProps): JSX.Element;
declare function SvgIcGoForward(props: IconBaseProps): JSX.Element;
declare function SvgIcGoogleLens(props: IconBaseProps): JSX.Element;
declare function SvgIcGoogle(props: IconBaseProps): JSX.Element;
declare function SvgIcGpon(props: IconBaseProps): JSX.Element;
declare function SvgIcGraphIncreasing(props: IconBaseProps): JSX.Element;
declare function SvgIcGraphLow(props: IconBaseProps): JSX.Element;
declare function SvgIcGraphTable(props: IconBaseProps): JSX.Element;
declare function SvgIcGrocery(props: IconBaseProps): JSX.Element;
declare function SvgIcGroup(props: IconBaseProps): JSX.Element;
declare function SvgIcGuard(props: IconBaseProps): JSX.Element;
declare function SvgIcGuestroom(props: IconBaseProps): JSX.Element;
declare function SvgIcHairDresser(props: IconBaseProps): JSX.Element;
declare function SvgIcHairProblems(props: IconBaseProps): JSX.Element;
declare function SvgIcHairRoot(props: IconBaseProps): JSX.Element;
declare function SvgIcHalloween(props: IconBaseProps): JSX.Element;
declare function SvgIcHammer(props: IconBaseProps): JSX.Element;
declare function SvgIcHandBag(props: IconBaseProps): JSX.Element;
declare function SvgIcHandLuggage(props: IconBaseProps): JSX.Element;
declare function SvgIcHandSoap(props: IconBaseProps): JSX.Element;
declare function SvgIcHandcuffs(props: IconBaseProps): JSX.Element;
declare function SvgIcHands(props: IconBaseProps): JSX.Element;
declare function SvgIcHardDisk(props: IconBaseProps): JSX.Element;
declare function SvgIcHarddrive(props: IconBaseProps): JSX.Element;
declare function SvgIcHarvest(props: IconBaseProps): JSX.Element;
declare function SvgIcHcvTop(props: IconBaseProps): JSX.Element;
declare function SvgIcHdScreen(props: IconBaseProps): JSX.Element;
declare function SvgIcHd(props: IconBaseProps): JSX.Element;
declare function SvgIcHdmi(props: IconBaseProps): JSX.Element;
declare function SvgIcHdrAuto(props: IconBaseProps): JSX.Element;
declare function SvgIcHdrOff(props: IconBaseProps): JSX.Element;
declare function SvgIcHdr(props: IconBaseProps): JSX.Element;
declare function SvgIcHeadlight(props: IconBaseProps): JSX.Element;
declare function SvgIcHeadphones(props: IconBaseProps): JSX.Element;
declare function SvgIcHeadsetBluetooth(props: IconBaseProps): JSX.Element;
declare function SvgIcHeadset(props: IconBaseProps): JSX.Element;
declare function SvgIcHealthConditions(props: IconBaseProps): JSX.Element;
declare function SvgIcHealthProtection(props: IconBaseProps): JSX.Element;
declare function SvgIcHealthReport(props: IconBaseProps): JSX.Element;
declare function SvgIcHeartRate(props: IconBaseProps): JSX.Element;
declare function SvgIcHeifer(props: IconBaseProps): JSX.Element;
declare function SvgIcHelmetWar(props: IconBaseProps): JSX.Element;
declare function SvgIcHelp(props: IconBaseProps): JSX.Element;
declare function SvgIcHieferAbortion(props: IconBaseProps): JSX.Element;
declare function SvgIcHieferBreeding(props: IconBaseProps): JSX.Element;
declare function SvgIcHighSpeed(props: IconBaseProps): JSX.Element;
declare function SvgIcHighTemperatureOff(props: IconBaseProps): JSX.Element;
declare function SvgIcHockeyIce(props: IconBaseProps): JSX.Element;
declare function SvgIcHockey(props: IconBaseProps): JSX.Element;
declare function SvgIcHomeCare(props: IconBaseProps): JSX.Element;
declare function SvgIcHomeConnection(props: IconBaseProps): JSX.Element;
declare function SvgIcHomeMaintenance(props: IconBaseProps): JSX.Element;
declare function SvgIcHome(props: IconBaseProps): JSX.Element;
declare function SvgIcHomework(props: IconBaseProps): JSX.Element;
declare function SvgIcHorror(props: IconBaseProps): JSX.Element;
declare function SvgIcHorzontalSwing(props: IconBaseProps): JSX.Element;
declare function SvgIcHospitalBed(props: IconBaseProps): JSX.Element;
declare function SvgIcHospital(props: IconBaseProps): JSX.Element;
declare function SvgIcHotspotLocator(props: IconBaseProps): JSX.Element;
declare function SvgIcHotspot(props: IconBaseProps): JSX.Element;
declare function SvgIcHourglass(props: IconBaseProps): JSX.Element;
declare function SvgIcHtml5(props: IconBaseProps): JSX.Element;
declare function SvgIcHubmode(props: IconBaseProps): JSX.Element;
declare function SvgIcHumidity(props: IconBaseProps): JSX.Element;
declare function SvgIcHydrant(props: IconBaseProps): JSX.Element;
declare function SvgIcIceSkating(props: IconBaseProps): JSX.Element;
declare function SvgIcIdCheck(props: IconBaseProps): JSX.Element;
declare function SvgIcId(props: IconBaseProps): JSX.Element;
declare function SvgIcImage(props: IconBaseProps): JSX.Element;
declare function SvgIcImport(props: IconBaseProps): JSX.Element;
declare function SvgIcIncognito(props: IconBaseProps): JSX.Element;
declare function SvgIcIncoming(props: IconBaseProps): JSX.Element;
declare function SvgIcIndustry(props: IconBaseProps): JSX.Element;
declare function SvgIcInfant(props: IconBaseProps): JSX.Element;
declare function SvgIcInfoText(props: IconBaseProps): JSX.Element;
declare function SvgIcInfo(props: IconBaseProps): JSX.Element;
declare function SvgIcInformationSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcInfrastructure(props: IconBaseProps): JSX.Element;
declare function SvgIcInsemination(props: IconBaseProps): JSX.Element;
declare function SvgIcInsomnia(props: IconBaseProps): JSX.Element;
declare function SvgIcInstagram(props: IconBaseProps): JSX.Element;
declare function SvgIcIntercomCallMobile(props: IconBaseProps): JSX.Element;
declare function SvgIcIntercomCalls(props: IconBaseProps): JSX.Element;
declare function SvgIcInterestLow(props: IconBaseProps): JSX.Element;
declare function SvgIcInterestPayout(props: IconBaseProps): JSX.Element;
declare function SvgIcInternetHighSpeed(props: IconBaseProps): JSX.Element;
declare function SvgIcInternet(props: IconBaseProps): JSX.Element;
declare function SvgIcIntersection(props: IconBaseProps): JSX.Element;
declare function SvgIcIpCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcIp67(props: IconBaseProps): JSX.Element;
declare function SvgIcIron(props: IconBaseProps): JSX.Element;
declare function SvgIcIrrigation(props: IconBaseProps): JSX.Element;
declare function SvgIcItalic(props: IconBaseProps): JSX.Element;
declare function SvgIcItching(props: IconBaseProps): JSX.Element;
declare function SvgIcJanitor(props: IconBaseProps): JSX.Element;
declare function SvgIcJewelleryDiamond(props: IconBaseProps): JSX.Element;
declare function SvgIcJewelleryRing(props: IconBaseProps): JSX.Element;
declare function SvgIcJioFiDongle(props: IconBaseProps): JSX.Element;
declare function SvgIcJioFi(props: IconBaseProps): JSX.Element;
declare function SvgIcJioInstitute(props: IconBaseProps): JSX.Element;
declare function SvgIcJioLink(props: IconBaseProps): JSX.Element;
declare function SvgIcJioPayments(props: IconBaseProps): JSX.Element;
declare function SvgIcJioTunes(props: IconBaseProps): JSX.Element;
declare function SvgIcJiopay(props: IconBaseProps): JSX.Element;
declare function SvgIcJoints(props: IconBaseProps): JSX.Element;
declare function SvgIcKabaddi(props: IconBaseProps): JSX.Element;
declare function SvgIcKarate(props: IconBaseProps): JSX.Element;
declare function SvgIcKeyOff(props: IconBaseProps): JSX.Element;
declare function SvgIcKey(props: IconBaseProps): JSX.Element;
declare function SvgIcKeyboard(props: IconBaseProps): JSX.Element;
declare function SvgIcKidneyBladder(props: IconBaseProps): JSX.Element;
declare function SvgIcKidney(props: IconBaseProps): JSX.Element;
declare function SvgIcKidsroom(props: IconBaseProps): JSX.Element;
declare function SvgIcKiranaStore(props: IconBaseProps): JSX.Element;
declare function SvgIcKitchenExtractor(props: IconBaseProps): JSX.Element;
declare function SvgIcKitchenPot(props: IconBaseProps): JSX.Element;
declare function SvgIcKitchenSink(props: IconBaseProps): JSX.Element;
declare function SvgIcKitchen(props: IconBaseProps): JSX.Element;
declare function SvgIcKnightChess(props: IconBaseProps): JSX.Element;
declare function SvgIcKnownConditions(props: IconBaseProps): JSX.Element;
declare function SvgIcKycManager(props: IconBaseProps): JSX.Element;
declare function SvgIcKycSupervisor(props: IconBaseProps): JSX.Element;
declare function SvgIcKyc(props: IconBaseProps): JSX.Element;
declare function SvgIcLamp(props: IconBaseProps): JSX.Element;
declare function SvgIcLandComposition(props: IconBaseProps): JSX.Element;
declare function SvgIcLandPreparation(props: IconBaseProps): JSX.Element;
declare function SvgIcLandscape(props: IconBaseProps): JSX.Element;
declare function SvgIcLanguage(props: IconBaseProps): JSX.Element;
declare function SvgIcLaptopMobile(props: IconBaseProps): JSX.Element;
declare function SvgIcLaptopScreen(props: IconBaseProps): JSX.Element;
declare function SvgIcLaptop(props: IconBaseProps): JSX.Element;
declare function SvgIcLastpage(props: IconBaseProps): JSX.Element;
declare function SvgIcLcvTop(props: IconBaseProps): JSX.Element;
declare function SvgIcLibrary(props: IconBaseProps): JSX.Element;
declare function SvgIcLightbulb(props: IconBaseProps): JSX.Element;
declare function SvgIcLike(props: IconBaseProps): JSX.Element;
declare function SvgIcLimitAccessProtection(props: IconBaseProps): JSX.Element;
declare function SvgIcLimitAccess(props: IconBaseProps): JSX.Element;
declare function SvgIcLineCrossing(props: IconBaseProps): JSX.Element;
declare function SvgIcLine(props: IconBaseProps): JSX.Element;
declare function SvgIcLinkedAccounts(props: IconBaseProps): JSX.Element;
declare function SvgIcLinkedin(props: IconBaseProps): JSX.Element;
declare function SvgIcList(props: IconBaseProps): JSX.Element;
declare function SvgIcLiveCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcLoactionShare(props: IconBaseProps): JSX.Element;
declare function SvgIcLocationDoctor(props: IconBaseProps): JSX.Element;
declare function SvgIcLocationHospital(props: IconBaseProps): JSX.Element;
declare function SvgIcLocationMobileCoolers(props: IconBaseProps): JSX.Element;
declare function SvgIcLocationOff(props: IconBaseProps): JSX.Element;
declare function SvgIcLocationOpen(props: IconBaseProps): JSX.Element;
declare function SvgIcLocationPoint(props: IconBaseProps): JSX.Element;
declare function SvgIcLocation(props: IconBaseProps): JSX.Element;
declare function SvgIcLockUnlock(props: IconBaseProps): JSX.Element;
declare function SvgIcLock(props: IconBaseProps): JSX.Element;
declare function SvgIcLogin(props: IconBaseProps): JSX.Element;
declare function SvgIcLogout(props: IconBaseProps): JSX.Element;
declare function SvgIcLoiteringOff(props: IconBaseProps): JSX.Element;
declare function SvgIcLotus(props: IconBaseProps): JSX.Element;
declare function SvgIcLteDevice(props: IconBaseProps): JSX.Element;
declare function SvgIcLuggage(props: IconBaseProps): JSX.Element;
declare function SvgIcLungs(props: IconBaseProps): JSX.Element;
declare function SvgIcMagic(props: IconBaseProps): JSX.Element;
declare function SvgIcMagnetTrain(props: IconBaseProps): JSX.Element;
declare function SvgIcMail(props: IconBaseProps): JSX.Element;
declare function SvgIcMale(props: IconBaseProps): JSX.Element;
declare function SvgIcManager(props: IconBaseProps): JSX.Element;
declare function SvgIcMapLayers(props: IconBaseProps): JSX.Element;
declare function SvgIcMap(props: IconBaseProps): JSX.Element;
declare function SvgIcMarioGame(props: IconBaseProps): JSX.Element;
declare function SvgIcMaskOff(props: IconBaseProps): JSX.Element;
declare function SvgIcMask(props: IconBaseProps): JSX.Element;
declare function SvgIcMason(props: IconBaseProps): JSX.Element;
declare function SvgIcMathematics(props: IconBaseProps): JSX.Element;
declare function SvgIcMediaShareMobile(props: IconBaseProps): JSX.Element;
declare function SvgIcMediaShare(props: IconBaseProps): JSX.Element;
declare function SvgIcMedicalFiles(props: IconBaseProps): JSX.Element;
declare function SvgIcMedicalHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcMedicalInsurance(props: IconBaseProps): JSX.Element;
declare function SvgIcMedicineMortar(props: IconBaseProps): JSX.Element;
declare function SvgIcMedicine(props: IconBaseProps): JSX.Element;
declare function SvgIcMedicines(props: IconBaseProps): JSX.Element;
declare function SvgIcMeetingRoom(props: IconBaseProps): JSX.Element;
declare function SvgIcMegaphone(props: IconBaseProps): JSX.Element;
declare function SvgIcMenuCardRoomservice(props: IconBaseProps): JSX.Element;
declare function SvgIcMenuCard(props: IconBaseProps): JSX.Element;
declare function SvgIcMerge(props: IconBaseProps): JSX.Element;
declare function SvgIcMessagePartiallyDelivered(
  props: IconBaseProps
): JSX.Element;
declare function SvgIcMessageRead(props: IconBaseProps): JSX.Element;
declare function SvgIcMessageSend(props: IconBaseProps): JSX.Element;
declare function SvgIcMicOff(props: IconBaseProps): JSX.Element;
declare function SvgIcMic(props: IconBaseProps): JSX.Element;
declare function SvgIcMicroSd(props: IconBaseProps): JSX.Element;
declare function SvgIcMicroscope(props: IconBaseProps): JSX.Element;
declare function SvgIcMicrowave(props: IconBaseProps): JSX.Element;
declare function SvgIcMilkLow(props: IconBaseProps): JSX.Element;
declare function SvgIcMilk(props: IconBaseProps): JSX.Element;
declare function SvgIcMinimise(props: IconBaseProps): JSX.Element;
declare function SvgIcMinus(props: IconBaseProps): JSX.Element;
declare function SvgIcMirrorCast(props: IconBaseProps): JSX.Element;
declare function SvgIcMobileDataOff(props: IconBaseProps): JSX.Element;
declare function SvgIcMobileData(props: IconBaseProps): JSX.Element;
declare function SvgIcMobileDevices(props: IconBaseProps): JSX.Element;
declare function SvgIcMobileHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgIcMobileNumberPortability(
  props: IconBaseProps
): JSX.Element;
declare function SvgIcMobileOff(props: IconBaseProps): JSX.Element;
declare function SvgIcMobile(props: IconBaseProps): JSX.Element;
declare function SvgIcModem(props: IconBaseProps): JSX.Element;
declare function SvgIcMoneyAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcMoneyLoan(props: IconBaseProps): JSX.Element;
declare function SvgIcMoneyRequest(props: IconBaseProps): JSX.Element;
declare function SvgIcMoneySend(props: IconBaseProps): JSX.Element;
declare function SvgIcMoneyToSelf(props: IconBaseProps): JSX.Element;
declare function SvgIcMoneybag(props: IconBaseProps): JSX.Element;
declare function SvgIcMonster(props: IconBaseProps): JSX.Element;
declare function SvgIcMonth(props: IconBaseProps): JSX.Element;
declare function SvgIcMopedDelivery(props: IconBaseProps): JSX.Element;
declare function SvgIcMopedSide(props: IconBaseProps): JSX.Element;
declare function SvgIcMoreHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgIcMoreVertical(props: IconBaseProps): JSX.Element;
declare function SvgIcMotionOff(props: IconBaseProps): JSX.Element;
declare function SvgIcMotorbikeSide(props: IconBaseProps): JSX.Element;
declare function SvgIcMouse(props: IconBaseProps): JSX.Element;
declare function SvgIcMoversPackers(props: IconBaseProps): JSX.Element;
declare function SvgIcMovie(props: IconBaseProps): JSX.Element;
declare function SvgIcMultiSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcMunicipalTax(props: IconBaseProps): JSX.Element;
declare function SvgIcMusicNote(props: IconBaseProps): JSX.Element;
declare function SvgIcMusic(props: IconBaseProps): JSX.Element;
declare function SvgIcMusical(props: IconBaseProps): JSX.Element;
declare function SvgIcMyLocation(props: IconBaseProps): JSX.Element;
declare function SvgIcMythology(props: IconBaseProps): JSX.Element;
declare function SvgIcNamaste(props: IconBaseProps): JSX.Element;
declare function SvgIcNas(props: IconBaseProps): JSX.Element;
declare function SvgIcNatureOff(props: IconBaseProps): JSX.Element;
declare function SvgIcNature(props: IconBaseProps): JSX.Element;
declare function SvgIcNetworkDetails(props: IconBaseProps): JSX.Element;
declare function SvgIcNetworkDish(props: IconBaseProps): JSX.Element;
declare function SvgIcNetworkFuture(props: IconBaseProps): JSX.Element;
declare function SvgIcNetwork(props: IconBaseProps): JSX.Element;
declare function SvgIcNeutralGender(props: IconBaseProps): JSX.Element;
declare function SvgIcNewChat(props: IconBaseProps): JSX.Element;
declare function SvgIcNews(props: IconBaseProps): JSX.Element;
declare function SvgIcNextCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcNextTitle(props: IconBaseProps): JSX.Element;
declare function SvgIcNext(props: IconBaseProps): JSX.Element;
declare function SvgIcNfc(props: IconBaseProps): JSX.Element;
declare function SvgIcNicCard(props: IconBaseProps): JSX.Element;
declare function SvgIcNoRepair(props: IconBaseProps): JSX.Element;
declare function SvgIcNoSimCard(props: IconBaseProps): JSX.Element;
declare function SvgIcNonVeg(props: IconBaseProps): JSX.Element;
declare function SvgIcNose(props: IconBaseProps): JSX.Element;
declare function SvgIcNotAtHome(props: IconBaseProps): JSX.Element;
declare function SvgIcNotes(props: IconBaseProps): JSX.Element;
declare function SvgIcNotificationOff(props: IconBaseProps): JSX.Element;
declare function SvgIcNotification(props: IconBaseProps): JSX.Element;
declare function SvgIcNowPlaying(props: IconBaseProps): JSX.Element;
declare function SvgIcNumPad(props: IconBaseProps): JSX.Element;
declare function SvgIcObesity(props: IconBaseProps): JSX.Element;
declare function SvgIcOff(props: IconBaseProps): JSX.Element;
declare function SvgIcOfferCoupon(props: IconBaseProps): JSX.Element;
declare function SvgIcOffer(props: IconBaseProps): JSX.Element;
declare function SvgIcOlympics(props: IconBaseProps): JSX.Element;
declare function SvgIcOneTap(props: IconBaseProps): JSX.Element;
declare function SvgIcOpenInNewTab(props: IconBaseProps): JSX.Element;
declare function SvgIcOpenWith(props: IconBaseProps): JSX.Element;
declare function SvgIcOperatingTable(props: IconBaseProps): JSX.Element;
declare function SvgIcOperator(props: IconBaseProps): JSX.Element;
declare function SvgIcOrder(props: IconBaseProps): JSX.Element;
declare function SvgIcOrders(props: IconBaseProps): JSX.Element;
declare function SvgIcOtp(props: IconBaseProps): JSX.Element;
declare function SvgIcOutOfStock(props: IconBaseProps): JSX.Element;
declare function SvgIcOutgoing(props: IconBaseProps): JSX.Element;
declare function SvgIcOutlet(props: IconBaseProps): JSX.Element;
declare function SvgIcOverlay(props: IconBaseProps): JSX.Element;
declare function SvgIcOxygen(props: IconBaseProps): JSX.Element;
declare function SvgIcPageFlip(props: IconBaseProps): JSX.Element;
declare function SvgIcPaintRoller(props: IconBaseProps): JSX.Element;
declare function SvgIcPaired(props: IconBaseProps): JSX.Element;
declare function SvgIcPairingComplete(props: IconBaseProps): JSX.Element;
declare function SvgIcPairing(props: IconBaseProps): JSX.Element;
declare function SvgIcPanicButton(props: IconBaseProps): JSX.Element;
declare function SvgIcPanorma(props: IconBaseProps): JSX.Element;
declare function SvgIcParentalControlPhone(props: IconBaseProps): JSX.Element;
declare function SvgIcParentalControlWeb(props: IconBaseProps): JSX.Element;
declare function SvgIcParking(props: IconBaseProps): JSX.Element;
declare function SvgIcPartialOxygenPressure(props: IconBaseProps): JSX.Element;
declare function SvgIcPartner(props: IconBaseProps): JSX.Element;
declare function SvgIcPassbook(props: IconBaseProps): JSX.Element;
declare function SvgIcPasteDocument(props: IconBaseProps): JSX.Element;
declare function SvgIcPaste(props: IconBaseProps): JSX.Element;
declare function SvgIcPauseCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcPause(props: IconBaseProps): JSX.Element;
declare function SvgIcPayBill(props: IconBaseProps): JSX.Element;
declare function SvgIcPayEmiInstall(props: IconBaseProps): JSX.Element;
declare function SvgIcPayFriend(props: IconBaseProps): JSX.Element;
declare function SvgIcPayRecurring(props: IconBaseProps): JSX.Element;
declare function SvgIcPaySchedule(props: IconBaseProps): JSX.Element;
declare function SvgIcPaymentPlan(props: IconBaseProps): JSX.Element;
declare function SvgIcPayment(props: IconBaseProps): JSX.Element;
declare function SvgIcPercentageDecrease(props: IconBaseProps): JSX.Element;
declare function SvgIcPercentageIncrease(props: IconBaseProps): JSX.Element;
declare function SvgIcPercentageValue(props: IconBaseProps): JSX.Element;
declare function SvgIcPeriodProblems(props: IconBaseProps): JSX.Element;
declare function SvgIcPersonalHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcPersonalTrainer(props: IconBaseProps): JSX.Element;
declare function SvgIcPestProblem(props: IconBaseProps): JSX.Element;
declare function SvgIcPesticides(props: IconBaseProps): JSX.Element;
declare function SvgIcPests(props: IconBaseProps): JSX.Element;
declare function SvgIcPets(props: IconBaseProps): JSX.Element;
declare function SvgIcPharmacy(props: IconBaseProps): JSX.Element;
declare function SvgIcPhoneKeyAccess(props: IconBaseProps): JSX.Element;
declare function SvgIcPhoneNumberLandline(props: IconBaseProps): JSX.Element;
declare function SvgIcPhonePerformance(props: IconBaseProps): JSX.Element;
declare function SvgIcPhoneSecured(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoCamera(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoCrop(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoFilter(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoMediaFiles(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoRemove(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoResize(props: IconBaseProps): JSX.Element;
declare function SvgIcPhotoSize(props: IconBaseProps): JSX.Element;
declare function SvgIcPhoto(props: IconBaseProps): JSX.Element;
declare function SvgIcPinOff(props: IconBaseProps): JSX.Element;
declare function SvgIcPin(props: IconBaseProps): JSX.Element;
declare function SvgIcPipe(props: IconBaseProps): JSX.Element;
declare function SvgIcPlanAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcPlan(props: IconBaseProps): JSX.Element;
declare function SvgIcPlaneArrival(props: IconBaseProps): JSX.Element;
declare function SvgIcPlaneDeparture(props: IconBaseProps): JSX.Element;
declare function SvgIcPlans(props: IconBaseProps): JSX.Element;
declare function SvgIcPlantGrowth(props: IconBaseProps): JSX.Element;
declare function SvgIcPlanting(props: IconBaseProps): JSX.Element;
declare function SvgIcPlayCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcPlayPause(props: IconBaseProps): JSX.Element;
declare function SvgIcPlay(props: IconBaseProps): JSX.Element;
declare function SvgIcPlaylistAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcPlaylistSuccessful(props: IconBaseProps): JSX.Element;
declare function SvgIcPlaylist(props: IconBaseProps): JSX.Element;
declare function SvgIcPlcPoe(props: IconBaseProps): JSX.Element;
declare function SvgIcPlcWifi(props: IconBaseProps): JSX.Element;
declare function SvgIcPlc(props: IconBaseProps): JSX.Element;
declare function SvgIcPlug(props: IconBaseProps): JSX.Element;
declare function SvgIcPooja(props: IconBaseProps): JSX.Element;
declare function SvgIcPool(props: IconBaseProps): JSX.Element;
declare function SvgIcPorch(props: IconBaseProps): JSX.Element;
declare function SvgIcPortrait(props: IconBaseProps): JSX.Element;
declare function SvgIcPowerOverEthernet(props: IconBaseProps): JSX.Element;
declare function SvgIcPregnancyTest(props: IconBaseProps): JSX.Element;
declare function SvgIcPreviousTitle(props: IconBaseProps): JSX.Element;
declare function SvgIcPrimeContent(props: IconBaseProps): JSX.Element;
declare function SvgIcPrint(props: IconBaseProps): JSX.Element;
declare function SvgIcPro(props: IconBaseProps): JSX.Element;
declare function SvgIcProfileFemale(props: IconBaseProps): JSX.Element;
declare function SvgIcProfileMale(props: IconBaseProps): JSX.Element;
declare function SvgIcProfile(props: IconBaseProps): JSX.Element;
declare function SvgIcProjection(props: IconBaseProps): JSX.Element;
declare function SvgIcProtectionLocked(props: IconBaseProps): JSX.Element;
declare function SvgIcProtectionThreats(props: IconBaseProps): JSX.Element;
declare function SvgIcProtectionUnlock(props: IconBaseProps): JSX.Element;
declare function SvgIcProtection(props: IconBaseProps): JSX.Element;
declare function SvgIcPulseOximeter(props: IconBaseProps): JSX.Element;
declare function SvgIcPuzzle(props: IconBaseProps): JSX.Element;
declare function SvgIcQrCode(props: IconBaseProps): JSX.Element;
declare function SvgIcQuickCapture(props: IconBaseProps): JSX.Element;
declare function SvgIcQuickPayment(props: IconBaseProps): JSX.Element;
declare function SvgIcRacingCar(props: IconBaseProps): JSX.Element;
declare function SvgIcRacingRacetrack(props: IconBaseProps): JSX.Element;
declare function SvgIcRadioSignal(props: IconBaseProps): JSX.Element;
declare function SvgIcRadioStation(props: IconBaseProps): JSX.Element;
declare function SvgIcRadio(props: IconBaseProps): JSX.Element;
declare function SvgIcRamHorizonal(props: IconBaseProps): JSX.Element;
declare function SvgIcRam(props: IconBaseProps): JSX.Element;
declare function SvgIcRaspberry(props: IconBaseProps): JSX.Element;
declare function SvgIcReader(props: IconBaseProps): JSX.Element;
declare function SvgIcRearrange(props: IconBaseProps): JSX.Element;
declare function SvgIcRecentHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcRechargeFriend(props: IconBaseProps): JSX.Element;
declare function SvgIcRechargeHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcRecord(props: IconBaseProps): JSX.Element;
declare function SvgIcRecording(props: IconBaseProps): JSX.Element;
declare function SvgIcRectangle(props: IconBaseProps): JSX.Element;
declare function SvgIcRecycling(props: IconBaseProps): JSX.Element;
declare function SvgIcRedo(props: IconBaseProps): JSX.Element;
declare function SvgIcRefresh(props: IconBaseProps): JSX.Element;
declare function SvgIcRefund(props: IconBaseProps): JSX.Element;
declare function SvgIcRegularSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcRemotePush(props: IconBaseProps): JSX.Element;
declare function SvgIcRemoteRecord(props: IconBaseProps): JSX.Element;
declare function SvgIcRemoteUniversalA(props: IconBaseProps): JSX.Element;
declare function SvgIcRemoteUniversalB(props: IconBaseProps): JSX.Element;
declare function SvgIcRemoteUniversalU(props: IconBaseProps): JSX.Element;
declare function SvgIcRemoteUniversal(props: IconBaseProps): JSX.Element;
declare function SvgIcRemote(props: IconBaseProps): JSX.Element;
declare function SvgIcRename(props: IconBaseProps): JSX.Element;
declare function SvgIcRepeatOne(props: IconBaseProps): JSX.Element;
declare function SvgIcRepeat(props: IconBaseProps): JSX.Element;
declare function SvgIcReplay(props: IconBaseProps): JSX.Element;
declare function SvgIcReplyAll(props: IconBaseProps): JSX.Element;
declare function SvgIcReplyCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcReply(props: IconBaseProps): JSX.Element;
declare function SvgIcRequest(props: IconBaseProps): JSX.Element;
declare function SvgIcResearch(props: IconBaseProps): JSX.Element;
declare function SvgIcReset(props: IconBaseProps): JSX.Element;
declare function SvgIcRestaurant(props: IconBaseProps): JSX.Element;
declare function SvgIcResumeReading(props: IconBaseProps): JSX.Element;
declare function SvgIcResumeWatching(props: IconBaseProps): JSX.Element;
declare function SvgIcReturn(props: IconBaseProps): JSX.Element;
declare function SvgIcRevolver(props: IconBaseProps): JSX.Element;
declare function SvgIcRewind(props: IconBaseProps): JSX.Element;
declare function SvgIcRibbonGrid(props: IconBaseProps): JSX.Element;
declare function SvgIcRingerVibrate(props: IconBaseProps): JSX.Element;
declare function SvgIcRoRepair(props: IconBaseProps): JSX.Element;
declare function SvgIcRoamingNetwork(props: IconBaseProps): JSX.Element;
declare function SvgIcRoamingOff(props: IconBaseProps): JSX.Element;
declare function SvgIcRoaming(props: IconBaseProps): JSX.Element;
declare function SvgIcRobot(props: IconBaseProps): JSX.Element;
declare function SvgIcRocket(props: IconBaseProps): JSX.Element;
declare function SvgIcRollerBlindsClosed(props: IconBaseProps): JSX.Element;
declare function SvgIcRollerBlinds(props: IconBaseProps): JSX.Element;
declare function SvgIcRomance(props: IconBaseProps): JSX.Element;
declare function SvgIcRoomPurifyer(props: IconBaseProps): JSX.Element;
declare function SvgIcRotatePhone(props: IconBaseProps): JSX.Element;
declare function SvgIcRoulette(props: IconBaseProps): JSX.Element;
declare function SvgIcRoutesTraffic(props: IconBaseProps): JSX.Element;
declare function SvgIcRoutes(props: IconBaseProps): JSX.Element;
declare function SvgIcRuler(props: IconBaseProps): JSX.Element;
declare function SvgIcRunning(props: IconBaseProps): JSX.Element;
declare function SvgIcRupeeCoinOff(props: IconBaseProps): JSX.Element;
declare function SvgIcRupeeCoin(props: IconBaseProps): JSX.Element;
declare function SvgIcRupee(props: IconBaseProps): JSX.Element;
declare function SvgIcSafetySensor(props: IconBaseProps): JSX.Element;
declare function SvgIcSampling(props: IconBaseProps): JSX.Element;
declare function SvgIcSaturation(props: IconBaseProps): JSX.Element;
declare function SvgIcSave(props: IconBaseProps): JSX.Element;
declare function SvgIcSavings(props: IconBaseProps): JSX.Element;
declare function SvgIcScale(props: IconBaseProps): JSX.Element;
declare function SvgIcScalpel(props: IconBaseProps): JSX.Element;
declare function SvgIcScanBody(props: IconBaseProps): JSX.Element;
declare function SvgIcScanFace(props: IconBaseProps): JSX.Element;
declare function SvgIcScanPicture(props: IconBaseProps): JSX.Element;
declare function SvgIcScanQrCode(props: IconBaseProps): JSX.Element;
declare function SvgIcScanText(props: IconBaseProps): JSX.Element;
declare function SvgIcScan(props: IconBaseProps): JSX.Element;
declare function SvgIcSchedule(props: IconBaseProps): JSX.Element;
declare function SvgIcScheduledDoctorAppointment(
  props: IconBaseProps
): JSX.Element;
declare function SvgIcScheduledDoctorConsultation(
  props: IconBaseProps
): JSX.Element;
declare function SvgIcSciFiction(props: IconBaseProps): JSX.Element;
declare function SvgIcScreenFull(props: IconBaseProps): JSX.Element;
declare function SvgIcScreenMinimise(props: IconBaseProps): JSX.Element;
declare function SvgIcScreenReduce(props: IconBaseProps): JSX.Element;
declare function SvgIcScreen(props: IconBaseProps): JSX.Element;
declare function SvgIcScribble(props: IconBaseProps): JSX.Element;
declare function SvgIcSdCard(props: IconBaseProps): JSX.Element;
declare function SvgIcSearch(props: IconBaseProps): JSX.Element;
declare function SvgIcSeats(props: IconBaseProps): JSX.Element;
declare function SvgIcSecureLocked(props: IconBaseProps): JSX.Element;
declare function SvgIcSecured(props: IconBaseProps): JSX.Element;
declare function SvgIcSecurityCameraBall(props: IconBaseProps): JSX.Element;
declare function SvgIcSecurityCameraCeiling(props: IconBaseProps): JSX.Element;
declare function SvgIcSecuritySensor(props: IconBaseProps): JSX.Element;
declare function SvgIcSecurityVehicle(props: IconBaseProps): JSX.Element;
declare function SvgIcSecurityguardManager(props: IconBaseProps): JSX.Element;
declare function SvgIcSecurityguardOfficer(props: IconBaseProps): JSX.Element;
declare function SvgIcSecurityguard(props: IconBaseProps): JSX.Element;
declare function SvgIcSeedling(props: IconBaseProps): JSX.Element;
declare function SvgIcSeekbar(props: IconBaseProps): JSX.Element;
declare function SvgIcSendMessage(props: IconBaseProps): JSX.Element;
declare function SvgIcServerCloud(props: IconBaseProps): JSX.Element;
declare function SvgIcServerHome(props: IconBaseProps): JSX.Element;
declare function SvgIcServerInternet(props: IconBaseProps): JSX.Element;
declare function SvgIcServerShared(props: IconBaseProps): JSX.Element;
declare function SvgIcServerWifi(props: IconBaseProps): JSX.Element;
declare function SvgIcServer(props: IconBaseProps): JSX.Element;
declare function SvgIcServiceCenter(props: IconBaseProps): JSX.Element;
declare function SvgIcSettings(props: IconBaseProps): JSX.Element;
declare function SvgIcSewingMachine(props: IconBaseProps): JSX.Element;
declare function SvgIcShare(props: IconBaseProps): JSX.Element;
declare function SvgIcShoppingBagFavorite(props: IconBaseProps): JSX.Element;
declare function SvgIcShoppingBag(props: IconBaseProps): JSX.Element;
declare function SvgIcShoppingBags(props: IconBaseProps): JSX.Element;
declare function SvgIcShoppingBasket(props: IconBaseProps): JSX.Element;
declare function SvgIcShopping(props: IconBaseProps): JSX.Element;
declare function SvgIcShuffle(props: IconBaseProps): JSX.Element;
declare function SvgIcSignIn(props: IconBaseProps): JSX.Element;
declare function SvgIcSignOut(props: IconBaseProps): JSX.Element;
declare function SvgIcSign(props: IconBaseProps): JSX.Element;
declare function SvgIcSim1(props: IconBaseProps): JSX.Element;
declare function SvgIcSim2(props: IconBaseProps): JSX.Element;
declare function SvgIcSimOff(props: IconBaseProps): JSX.Element;
declare function SvgIcSimPostPaid(props: IconBaseProps): JSX.Element;
declare function SvgIcSim(props: IconBaseProps): JSX.Element;
declare function SvgIcSirene(props: IconBaseProps): JSX.Element;
declare function SvgIcSkating(props: IconBaseProps): JSX.Element;
declare function SvgIcSkull(props: IconBaseProps): JSX.Element;
declare function SvgIcSleepMode(props: IconBaseProps): JSX.Element;
declare function SvgIcSleeping(props: IconBaseProps): JSX.Element;
declare function SvgIcSlide(props: IconBaseProps): JSX.Element;
declare function SvgIcSlowMotion(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartBulbConnect(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartBulbDimmable(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartBulbRgb(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartBulb(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartCleaner(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartDoorlock(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartFridge(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartHoover(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartOutlet(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartPlug(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartSwitchPlug(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartWatch(props: IconBaseProps): JSX.Element;
declare function SvgIcSmartphoneLandline(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileyDelighted(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileyHappy(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileyNeutral(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileyOutraged(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileySatisfied(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileyUnhappy(props: IconBaseProps): JSX.Element;
declare function SvgIcSmileyUnsatisfied(props: IconBaseProps): JSX.Element;
declare function SvgIcSmokeSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcSmokingOff(props: IconBaseProps): JSX.Element;
declare function SvgIcSmoking(props: IconBaseProps): JSX.Element;
declare function SvgIcSmsGroup(props: IconBaseProps): JSX.Element;
declare function SvgIcSmsReceive(props: IconBaseProps): JSX.Element;
declare function SvgIcSmsSend(props: IconBaseProps): JSX.Element;
declare function SvgIcSms(props: IconBaseProps): JSX.Element;
declare function SvgIcSmss(props: IconBaseProps): JSX.Element;
declare function SvgIcSnacks(props: IconBaseProps): JSX.Element;
declare function SvgIcSnapchat(props: IconBaseProps): JSX.Element;
declare function SvgIcSofa(props: IconBaseProps): JSX.Element;
declare function SvgIcSoilLayers(props: IconBaseProps): JSX.Element;
declare function SvgIcSoil(props: IconBaseProps): JSX.Element;
declare function SvgIcSortHandle(props: IconBaseProps): JSX.Element;
declare function SvgIcSortList(props: IconBaseProps): JSX.Element;
declare function SvgIcSort(props: IconBaseProps): JSX.Element;
declare function SvgIcSosCircle(props: IconBaseProps): JSX.Element;
declare function SvgIcSos(props: IconBaseProps): JSX.Element;
declare function SvgIcSoundDisabled(props: IconBaseProps): JSX.Element;
declare function SvgIcSoundLoud(props: IconBaseProps): JSX.Element;
declare function SvgIcSoundMedium(props: IconBaseProps): JSX.Element;
declare function SvgIcSoundQuiet(props: IconBaseProps): JSX.Element;
declare function SvgIcSound(props: IconBaseProps): JSX.Element;
declare function SvgIcSowing(props: IconBaseProps): JSX.Element;
declare function SvgIcSpade(props: IconBaseProps): JSX.Element;
declare function SvgIcSpanner(props: IconBaseProps): JSX.Element;
declare function SvgIcSpdifOpticalPos(props: IconBaseProps): JSX.Element;
declare function SvgIcSpdifOptical(props: IconBaseProps): JSX.Element;
declare function SvgIcSpeaker(props: IconBaseProps): JSX.Element;
declare function SvgIcSpine(props: IconBaseProps): JSX.Element;
declare function SvgIcSport(props: IconBaseProps): JSX.Element;
declare function SvgIcSportsPulse(props: IconBaseProps): JSX.Element;
declare function SvgIcSpotcolor(props: IconBaseProps): JSX.Element;
declare function SvgIcSprayCan(props: IconBaseProps): JSX.Element;
declare function SvgIcStabilization(props: IconBaseProps): JSX.Element;
declare function SvgIcStairway(props: IconBaseProps): JSX.Element;
declare function SvgIcStamp(props: IconBaseProps): JSX.Element;
declare function SvgIcStarAdd(props: IconBaseProps): JSX.Element;
declare function SvgIcStar(props: IconBaseProps): JSX.Element;
declare function SvgIcStatusFail(props: IconBaseProps): JSX.Element;
declare function SvgIcStatusLoading(props: IconBaseProps): JSX.Element;
declare function SvgIcStatusSuccessful(props: IconBaseProps): JSX.Element;
declare function SvgIcSteeringWheel(props: IconBaseProps): JSX.Element;
declare function SvgIcSteps(props: IconBaseProps): JSX.Element;
declare function SvgIcStopwatch(props: IconBaseProps): JSX.Element;
declare function SvgIcStoreRoom(props: IconBaseProps): JSX.Element;
declare function SvgIcStore(props: IconBaseProps): JSX.Element;
declare function SvgIcStory(props: IconBaseProps): JSX.Element;
declare function SvgIcStreamOff(props: IconBaseProps): JSX.Element;
declare function SvgIcStream(props: IconBaseProps): JSX.Element;
declare function SvgIcStretching(props: IconBaseProps): JSX.Element;
declare function SvgIcStroller(props: IconBaseProps): JSX.Element;
declare function SvgIcStudent(props: IconBaseProps): JSX.Element;
declare function SvgIcSubscription(props: IconBaseProps): JSX.Element;
declare function SvgIcSubscriptions(props: IconBaseProps): JSX.Element;
declare function SvgIcSubtitle(props: IconBaseProps): JSX.Element;
declare function SvgIcSuccessColored(props: IconBaseProps): JSX.Element;
declare function SvgIcSuccess(props: IconBaseProps): JSX.Element;
declare function SvgIcSunHeating(props: IconBaseProps): JSX.Element;
declare function SvgIcSupervisor(props: IconBaseProps): JSX.Element;
declare function SvgIcSupportAdmin(props: IconBaseProps): JSX.Element;
declare function SvgIcSupport(props: IconBaseProps): JSX.Element;
declare function SvgIcSurvey(props: IconBaseProps): JSX.Element;
declare function SvgIcSwap(props: IconBaseProps): JSX.Element;
declare function SvgIcSwimming(props: IconBaseProps): JSX.Element;
declare function SvgIcSwitch(props: IconBaseProps): JSX.Element;
declare function SvgIcSword(props: IconBaseProps): JSX.Element;
declare function SvgIcTableTennis(props: IconBaseProps): JSX.Element;
declare function SvgIcTablet(props: IconBaseProps): JSX.Element;
declare function SvgIcTag(props: IconBaseProps): JSX.Element;
declare function SvgIcTargetAim(props: IconBaseProps): JSX.Element;
declare function SvgIcTarget(props: IconBaseProps): JSX.Element;
declare function SvgIcTariffAlert(props: IconBaseProps): JSX.Element;
declare function SvgIcTariffChecking(props: IconBaseProps): JSX.Element;
declare function SvgIcTariffExpired(props: IconBaseProps): JSX.Element;
declare function SvgIcTask(props: IconBaseProps): JSX.Element;
declare function SvgIcTaxiFront(props: IconBaseProps): JSX.Element;
declare function SvgIcTeach(props: IconBaseProps): JSX.Element;
declare function SvgIcTeamMembers(props: IconBaseProps): JSX.Element;
declare function SvgIcTeam(props: IconBaseProps): JSX.Element;
declare function SvgIcTechnology(props: IconBaseProps): JSX.Element;
declare function SvgIcTeddyLove(props: IconBaseProps): JSX.Element;
declare function SvgIcTeddy(props: IconBaseProps): JSX.Element;
declare function SvgIcTemperatureDown(props: IconBaseProps): JSX.Element;
declare function SvgIcTemperatureOff(props: IconBaseProps): JSX.Element;
declare function SvgIcTemperatureUp(props: IconBaseProps): JSX.Element;
declare function SvgIcTemperature(props: IconBaseProps): JSX.Element;
declare function SvgIcTempered(props: IconBaseProps): JSX.Element;
declare function SvgIcTemple(props: IconBaseProps): JSX.Element;
declare function SvgIcTennis(props: IconBaseProps): JSX.Element;
declare function SvgIcTerminal(props: IconBaseProps): JSX.Element;
declare function SvgIcTest(props: IconBaseProps): JSX.Element;
declare function SvgIcTextAlignCenter(props: IconBaseProps): JSX.Element;
declare function SvgIcTextAlignJustify(props: IconBaseProps): JSX.Element;
declare function SvgIcTextAlignLeft(props: IconBaseProps): JSX.Element;
declare function SvgIcTextAlignRight(props: IconBaseProps): JSX.Element;
declare function SvgIcText(props: IconBaseProps): JSX.Element;
declare function SvgIcTextbook(props: IconBaseProps): JSX.Element;
declare function SvgIcTheaterRoom(props: IconBaseProps): JSX.Element;
declare function SvgIcTheme(props: IconBaseProps): JSX.Element;
declare function SvgIcThinkingBrain(props: IconBaseProps): JSX.Element;
declare function SvgIcThinkingCritical(props: IconBaseProps): JSX.Element;
declare function SvgIcThinking(props: IconBaseProps): JSX.Element;
declare function SvgIcThreeDay(props: IconBaseProps): JSX.Element;
declare function SvgIcThroat(props: IconBaseProps): JSX.Element;
declare function SvgIcThumbnail(props: IconBaseProps): JSX.Element;
declare function SvgIcTicketDetails(props: IconBaseProps): JSX.Element;
declare function SvgIcTicketPnrNumber(props: IconBaseProps): JSX.Element;
declare function SvgIcTicketRaise(props: IconBaseProps): JSX.Element;
declare function SvgIcTicketStatus(props: IconBaseProps): JSX.Element;
declare function SvgIcTicket(props: IconBaseProps): JSX.Element;
declare function SvgIcTickets(props: IconBaseProps): JSX.Element;
declare function SvgIcTime(props: IconBaseProps): JSX.Element;
declare function SvgIcTimelapse(props: IconBaseProps): JSX.Element;
declare function SvgIcTimeline(props: IconBaseProps): JSX.Element;
declare function SvgIcTimelines(props: IconBaseProps): JSX.Element;
declare function SvgIcTimezone(props: IconBaseProps): JSX.Element;
declare function SvgIcTimezones(props: IconBaseProps): JSX.Element;
declare function SvgIcTips(props: IconBaseProps): JSX.Element;
declare function SvgIcTochpanel(props: IconBaseProps): JSX.Element;
declare function SvgIcToddler(props: IconBaseProps): JSX.Element;
declare function SvgIcToiletManWomen(props: IconBaseProps): JSX.Element;
declare function SvgIcToiletSeat(props: IconBaseProps): JSX.Element;
declare function SvgIcTollStation(props: IconBaseProps): JSX.Element;
declare function SvgIcToll(props: IconBaseProps): JSX.Element;
declare function SvgIcTooth(props: IconBaseProps): JSX.Element;
declare function SvgIcTorchOff(props: IconBaseProps): JSX.Element;
declare function SvgIcTorch(props: IconBaseProps): JSX.Element;
declare function SvgIcTower(props: IconBaseProps): JSX.Element;
declare function SvgIcTrackEcg(props: IconBaseProps): JSX.Element;
declare function SvgIcTrackVitals(props: IconBaseProps): JSX.Element;
declare function SvgIcTrafficCone(props: IconBaseProps): JSX.Element;
declare function SvgIcTrainDelay(props: IconBaseProps): JSX.Element;
declare function SvgIcTrainFront(props: IconBaseProps): JSX.Element;
declare function SvgIcTrainStatus(props: IconBaseProps): JSX.Element;
declare function SvgIcTramFront(props: IconBaseProps): JSX.Element;
declare function SvgIcTransactionHistory(props: IconBaseProps): JSX.Element;
declare function SvgIcTrashClear(props: IconBaseProps): JSX.Element;
declare function SvgIcTrash(props: IconBaseProps): JSX.Element;
declare function SvgIcTrendingFlame(props: IconBaseProps): JSX.Element;
declare function SvgIcTriangle(props: IconBaseProps): JSX.Element;
declare function SvgIcTrivia(props: IconBaseProps): JSX.Element;
declare function SvgIcTrolleyClearance(props: IconBaseProps): JSX.Element;
declare function SvgIcTruckDelivery(props: IconBaseProps): JSX.Element;
declare function SvgIcTruckSide(props: IconBaseProps): JSX.Element;
declare function SvgIcTvCall(props: IconBaseProps): JSX.Element;
declare function SvgIcTvCam(props: IconBaseProps): JSX.Element;
declare function SvgIcTvChannels(props: IconBaseProps): JSX.Element;
declare function SvgIcTvOnline(props: IconBaseProps): JSX.Element;
declare function SvgIcTvPlay(props: IconBaseProps): JSX.Element;
declare function SvgIcTvPlus(props: IconBaseProps): JSX.Element;
declare function SvgIcTv(props: IconBaseProps): JSX.Element;
declare function SvgIcTwitter(props: IconBaseProps): JSX.Element;
declare function SvgIcUdderOff(props: IconBaseProps): JSX.Element;
declare function SvgIcUdder(props: IconBaseProps): JSX.Element;
declare function SvgIcUnderline(props: IconBaseProps): JSX.Element;
declare function SvgIcUndo(props: IconBaseProps): JSX.Element;
declare function SvgIcUnpaired(props: IconBaseProps): JSX.Element;
declare function SvgIcUpdate(props: IconBaseProps): JSX.Element;
declare function SvgIcUpiNumber(props: IconBaseProps): JSX.Element;
declare function SvgIcUpload1(props: IconBaseProps): JSX.Element;
declare function SvgIcUpload(props: IconBaseProps): JSX.Element;
declare function SvgIcUploads(props: IconBaseProps): JSX.Element;
declare function SvgIcUsbCable(props: IconBaseProps): JSX.Element;
declare function SvgIcUsbDongle(props: IconBaseProps): JSX.Element;
declare function SvgIcUsbStick(props: IconBaseProps): JSX.Element;
declare function SvgIcUsb(props: IconBaseProps): JSX.Element;
declare function SvgIcUser(props: IconBaseProps): JSX.Element;
declare function SvgIcVaccine(props: IconBaseProps): JSX.Element;
declare function SvgIcVaccumCleaner(props: IconBaseProps): JSX.Element;
declare function SvgIcVampire(props: IconBaseProps): JSX.Element;
declare function SvgIcVeg(props: IconBaseProps): JSX.Element;
declare function SvgIcVerticalSwing(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoCallGroup(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoCall(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoCalls(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoEnd(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoInOut(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoIncomming(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoOutgoing(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoResize(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoSize(props: IconBaseProps): JSX.Element;
declare function SvgIcVideoSurveillance(props: IconBaseProps): JSX.Element;
declare function SvgIcVideo(props: IconBaseProps): JSX.Element;
declare function SvgIcViewTile(props: IconBaseProps): JSX.Element;
declare function SvgIcVinylRecord(props: IconBaseProps): JSX.Element;
declare function SvgIcVirus(props: IconBaseProps): JSX.Element;
declare function SvgIcVisibleOff(props: IconBaseProps): JSX.Element;
declare function SvgIcVisible(props: IconBaseProps): JSX.Element;
declare function SvgIcVoice(props: IconBaseProps): JSX.Element;
declare function SvgIcVolume(props: IconBaseProps): JSX.Element;
declare function SvgIcVoucher4G(props: IconBaseProps): JSX.Element;
declare function SvgIcVoucherCashback(props: IconBaseProps): JSX.Element;
declare function SvgIcVoucherPlan(props: IconBaseProps): JSX.Element;
declare function SvgIcVpn(props: IconBaseProps): JSX.Element;
declare function SvgIcVr(props: IconBaseProps): JSX.Element;
declare function SvgIcWalkingAids(props: IconBaseProps): JSX.Element;
declare function SvgIcWalking(props: IconBaseProps): JSX.Element;
declare function SvgIcWallet(props: IconBaseProps): JSX.Element;
declare function SvgIcWallpaper(props: IconBaseProps): JSX.Element;
declare function SvgIcWar(props: IconBaseProps): JSX.Element;
declare function SvgIcWarehouse(props: IconBaseProps): JSX.Element;
declare function SvgIcWarningColored(props: IconBaseProps): JSX.Element;
declare function SvgIcWarning(props: IconBaseProps): JSX.Element;
declare function SvgIcWarranty(props: IconBaseProps): JSX.Element;
declare function SvgIcWashingMachine(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterBottleReuseable(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterBottle(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterChecked(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterPipe(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterPump(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterPurifier(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterSensor(props: IconBaseProps): JSX.Element;
declare function SvgIcWaterTap(props: IconBaseProps): JSX.Element;
declare function SvgIcWater(props: IconBaseProps): JSX.Element;
declare function SvgIcWateringCan(props: IconBaseProps): JSX.Element;
declare function SvgIcWatermelon(props: IconBaseProps): JSX.Element;
declare function SvgIcWebBrowserCursor(props: IconBaseProps): JSX.Element;
declare function SvgIcWebBrowserMobile(props: IconBaseProps): JSX.Element;
declare function SvgIcWebBrowserSuccessful(props: IconBaseProps): JSX.Element;
declare function SvgIcWebBrowser(props: IconBaseProps): JSX.Element;
declare function SvgIcWebseries(props: IconBaseProps): JSX.Element;
declare function SvgIcWeek(props: IconBaseProps): JSX.Element;
declare function SvgIcWeightTraining(props: IconBaseProps): JSX.Element;
declare function SvgIcWhatsapp(props: IconBaseProps): JSX.Element;
declare function SvgIcWideAngle170(props: IconBaseProps): JSX.Element;
declare function SvgIcWidestRange(props: IconBaseProps): JSX.Element;
declare function SvgIcWidgets(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiConnected(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiEnable(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiLocked0(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiLocked1(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiLocked2(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiLocked3(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiLocked(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiNetwork(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiNoInternet(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiNotFound(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiOff(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiOk(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiRouter(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiSignInRequired(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiStrength0(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiStrength1(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiStrength2(props: IconBaseProps): JSX.Element;
declare function SvgIcWifiStrength3(props: IconBaseProps): JSX.Element;
declare function SvgIcWifi(props: IconBaseProps): JSX.Element;
declare function SvgIcWord(props: IconBaseProps): JSX.Element;
declare function SvgIcWork(props: IconBaseProps): JSX.Element;
declare function SvgIcWorkshop(props: IconBaseProps): JSX.Element;
declare function SvgIcWps(props: IconBaseProps): JSX.Element;
declare function SvgIcWrestling(props: IconBaseProps): JSX.Element;
declare function SvgIcWriting(props: IconBaseProps): JSX.Element;
declare function SvgIcXRayBody(props: IconBaseProps): JSX.Element;
declare function SvgIcXRay(props: IconBaseProps): JSX.Element;
declare function SvgIcYogaMeditation(props: IconBaseProps): JSX.Element;
declare function SvgIcYoga(props: IconBaseProps): JSX.Element;
declare function SvgIcYoutube(props: IconBaseProps): JSX.Element;
declare function SvgIcZombie(props: IconBaseProps): JSX.Element;

export {
  Alert,
  Autocomplete,
  _default$f as Badge,
  _default$e as Button,
  Card,
  Checkbox,
  _default$d as Chip,
  _default$2 as Code,
  _default as DateInput,
  Dialog,
  Dropdown,
  _default$b as Input,
  _default$a as Menu,
  _default$9 as MenuItem,
  NudgeManager,
  _default$8 as Pagination,
  Radio,
  _default$7 as Stepper,
  SvgIc404Error,
  SvgIc4G,
  SvgIc4GBarFour,
  SvgIc4GBarNoNetwork,
  SvgIc4GBarNone,
  SvgIc4GBarOne,
  SvgIc4GBarThree,
  SvgIc4GBarTwo,
  SvgIc4GLte,
  SvgIc4In1Sensor,
  SvgIc4K,
  SvgIcAbdominalPain,
  SvgIcAcRemote,
  SvgIcAccessories,
  SvgIcAccountInfo,
  SvgIcAceOfSpades,
  SvgIcAdd,
  SvgIcAddCircle,
  SvgIcAdventure,
  SvgIcAerobics,
  SvgIcAirConditioner,
  SvgIcAirDry,
  SvgIcAirFilterClean,
  SvgIcAirPurificationMode,
  SvgIcAirport,
  SvgIcAlarm,
  SvgIcAlarmOff,
  SvgIcAlarmSensor,
  SvgIcAlbum,
  SvgIcAlert,
  SvgIcAlignBottom,
  SvgIcAlignHorizontalCenters,
  SvgIcAlignLeft,
  SvgIcAlignRight,
  SvgIcAlignTop,
  SvgIcAlignVerticalCenters,
  SvgIcAlignmentFilling,
  SvgIcAlignmentHorizontal,
  SvgIcAlignmentVertical,
  SvgIcAnalytics,
  SvgIcAnalyticsData,
  SvgIcAnalyticsPieChart,
  SvgIcAnalyticsPieChartTree,
  SvgIcAnalyticsPieChartTwo,
  SvgIcAndroid,
  SvgIcAnimation,
  SvgIcAntiCorrosion,
  SvgIcAntibacteria,
  SvgIcAnxiety,
  SvgIcAparell,
  SvgIcApartment,
  SvgIcApartmentComplex,
  SvgIcAppSwitcher,
  SvgIcApple,
  SvgIcArcade,
  SvgIcArch,
  SvgIcArchive,
  SvgIcArchiveRoom,
  SvgIcArea,
  SvgIcAreaMap,
  SvgIcAreaTypeBottom,
  SvgIcAreaTypeCenter,
  SvgIcAreaTypeJustify,
  SvgIcAreaTypeTop,
  SvgIcArena,
  SvgIcAristMic,
  SvgIcArmed,
  SvgIcArmedOff,
  SvgIcArmedPartially,
  SvgIcArrowBack,
  SvgIcArrowDown,
  SvgIcArrowLine,
  SvgIcArrowLineDiagonal,
  SvgIcArrowLineDot,
  SvgIcArrowNext,
  SvgIcArrowUp,
  SvgIcArtificialInsemination,
  SvgIcAssistiveGrid,
  SvgIcAstrology,
  SvgIcAtHome,
  SvgIcAtHomeHazard,
  SvgIcAttachment,
  SvgIcAudio,
  SvgIcAutoMode,
  SvgIcAutoRikshaw,
  SvgIcAux,
  SvgIcAux35,
  SvgIcAward,
  SvgIcAwardBadge,
  SvgIcBabyBottle,
  SvgIcBabyChangingRoom,
  SvgIcBabyMonitor,
  SvgIcBack,
  SvgIcBackspace,
  SvgIcBadminton,
  SvgIcBakery,
  SvgIcBalcony,
  SvgIcBankAccount,
  SvgIcBankBranch,
  SvgIcBankMainBranch,
  SvgIcBarcode,
  SvgIcBarn,
  SvgIcBarnStock,
  SvgIcBasketball,
  SvgIcBasketballPlayer,
  SvgIcBathroom,
  SvgIcBathtub,
  SvgIcBattery10,
  SvgIcBattery100,
  SvgIcBattery20,
  SvgIcBattery30,
  SvgIcBattery40,
  SvgIcBattery5,
  SvgIcBattery50,
  SvgIcBattery60,
  SvgIcBattery70,
  SvgIcBattery80,
  SvgIcBattery90,
  SvgIcBatteryEmpty,
  SvgIcBatteryEmptyLoading,
  SvgIcBatteryFull,
  SvgIcBatteryFullLoading,
  SvgIcBatteryHorizontal1Bar,
  SvgIcBatteryHorizontal2Bar,
  SvgIcBatteryHorizontal3Bar,
  SvgIcBatteryHorizontalEmpty,
  SvgIcBatteryLow,
  SvgIcBatteryMid,
  SvgIcBatteryOff,
  SvgIcBatteryWarning,
  SvgIcBeamer,
  SvgIcBeauty,
  SvgIcBeautyProducts,
  SvgIcBedDouble,
  SvgIcBedMedical,
  SvgIcBedSingle,
  SvgIcBedSleeping,
  SvgIcBikeMan,
  SvgIcBill,
  SvgIcBinaryCode,
  SvgIcBiography,
  SvgIcBiology,
  SvgIcBirthday,
  SvgIcBladder,
  SvgIcBlocked,
  SvgIcBlood,
  SvgIcBloodBag,
  SvgIcBloodBank,
  SvgIcBloodCells,
  SvgIcBloodGlucoseMeter,
  SvgIcBloodPressureCuff,
  SvgIcBloodTest,
  SvgIcBloodVessels,
  SvgIcBluetooth,
  SvgIcBluetoothConnected,
  SvgIcBoards,
  SvgIcBodyCare,
  SvgIcBodyScale,
  SvgIcBold,
  SvgIcBookmark,
  SvgIcBookmarkAdd,
  SvgIcBoxing,
  SvgIcBrain,
  SvgIcBrainAdd,
  SvgIcBrainStroke,
  SvgIcBrainSurgery,
  SvgIcBrightness,
  SvgIcBrightnessDisplay,
  SvgIcBrightnessFull,
  SvgIcBrightnessHalf,
  SvgIcBroadcast,
  SvgIcBrokenImage,
  SvgIcBroom,
  SvgIcBrush,
  SvgIcBuffer,
  SvgIcBulb,
  SvgIcBull,
  SvgIcBurgerMenu,
  SvgIcBusFront,
  SvgIcBusShuttle,
  SvgIcBusSide,
  SvgIcButler,
  SvgIcCableBox,
  SvgIcCablePlug,
  SvgIcCalculate,
  SvgIcCalculator,
  SvgIcCalculatorPercentage,
  SvgIcCalendar,
  SvgIcCalendarEvent,
  SvgIcCalendarSchedule,
  SvgIcCalendarWeek,
  SvgIcCalendarWeekend,
  SvgIcCalf,
  SvgIcCall,
  SvgIcCallChat,
  SvgIcCallClear,
  SvgIcCallComposer,
  SvgIcCallData,
  SvgIcCallDids,
  SvgIcCallEnd,
  SvgIcCallForward,
  SvgIcCallGroup,
  SvgIcCallHd,
  SvgIcCallHold,
  SvgIcCallHunting,
  SvgIcCallIncomingOutgoing,
  SvgIcCallIncomming,
  SvgIcCallMissed,
  SvgIcCallNumber,
  SvgIcCallOff,
  SvgIcCallOutgoing,
  SvgIcCallSound,
  SvgIcCallWifi,
  SvgIcCamera,
  SvgIcCameraAuto,
  SvgIcCameraDome,
  SvgIcCameraFocus,
  SvgIcCameraHighEnd,
  SvgIcCameraManual,
  SvgIcCameraVarifocalBullet,
  SvgIcCameraVarifocalDome,
  SvgIcCancer,
  SvgIcCarDriver,
  SvgIcCarFleet,
  SvgIcCarFront,
  SvgIcCarShareRide,
  SvgIcCarSide,
  SvgIcCarTop,
  SvgIcCarbonDioxide,
  SvgIcCard,
  SvgIcCardiology,
  SvgIcCardiologyOutput,
  SvgIcCardiologyVentricle,
  SvgIcCards,
  SvgIcCare,
  SvgIcCarpenter,
  SvgIcCarpool,
  SvgIcCart,
  SvgIcCartPreorder,
  SvgIcCast,
  SvgIcCastMedia,
  SvgIcCastScreen,
  SvgIcCategories,
  SvgIcCategoriesSub,
  SvgIcCattleGroup,
  SvgIcCattleList,
  SvgIcCcv,
  SvgIcCcvOff,
  SvgIcCelebration,
  SvgIcChaos,
  SvgIcCharity,
  SvgIcChat,
  SvgIcChats,
  SvgIcChemistry,
  SvgIcCherry,
  SvgIcChestPain,
  SvgIcChevronDown,
  SvgIcChevronDownCircle,
  SvgIcChevronLeft,
  SvgIcChevronLeftCircle,
  SvgIcChevronRight,
  SvgIcChevronRightCircle,
  SvgIcChevronUp,
  SvgIcChevronUpCircle,
  SvgIcChildrenGame,
  SvgIcChip,
  SvgIcCholesterol,
  SvgIcCinch,
  SvgIcCinchCable,
  SvgIcCity,
  SvgIcClauset,
  SvgIcCleaning,
  SvgIcCleaningRequest,
  SvgIcClear,
  SvgIcClerk,
  SvgIcClimbing,
  SvgIcClipping,
  SvgIcClose,
  SvgIcCloseRemove,
  SvgIcCloud,
  SvgIcCloudConnect,
  SvgIcCloudOff,
  SvgIcCloudSynced,
  SvgIcCloudUpload,
  SvgIcCode,
  SvgIcCodeDocument,
  SvgIcColonComplaints,
  SvgIcColourPalette,
  SvgIcColourSpot,
  SvgIcComedy,
  SvgIcCommunicationSkills,
  SvgIcCompare,
  SvgIcComparison,
  SvgIcCompoundInterest,
  SvgIcCompress,
  SvgIcComputer,
  SvgIcComputerGraph,
  SvgIcComputerHistory,
  SvgIcConfirm,
  SvgIcConnectedHome,
  SvgIcConsultant,
  SvgIcConsumptionAccounted,
  SvgIcConsumptionAverage,
  SvgIcConsumptionHigh,
  SvgIcConsumptionLow,
  SvgIcConsumptionUnaccounted,
  SvgIcContactAdd,
  SvgIcContactShare,
  SvgIcContacts,
  SvgIcControler,
  SvgIcCooking,
  SvgIcCooling,
  SvgIcCoolingHeating,
  SvgIcCopy,
  SvgIcCopyDocument,
  SvgIcCough,
  SvgIcCoupon,
  SvgIcCovid19,
  SvgIcCowAdult,
  SvgIcCowDevice,
  SvgIcCowDeviceOff,
  SvgIcCowHeatActivity,
  SvgIcCowProfile,
  SvgIcCowRetired,
  SvgIcCreatePlaylist,
  SvgIcCricket,
  SvgIcCrime,
  SvgIcCrop,
  SvgIcCropFree,
  SvgIcCropOriginal,
  SvgIcCropPlanningStyle1,
  SvgIcCropPlanningStyle2,
  SvgIcCropPlanningStyle3,
  SvgIcCup,
  SvgIcCut,
  SvgIcCutOut,
  SvgIcCutScissor,
  SvgIcCv,
  SvgIcDancing,
  SvgIcDarkLight,
  SvgIcDataCard,
  SvgIcDataCircle,
  SvgIcDataIn,
  SvgIcDataInOut,
  SvgIcDataInOutNone,
  SvgIcDataLoan,
  SvgIcDataOut,
  SvgIcDataPack,
  SvgIcDataSaver,
  SvgIcDay,
  SvgIcDayNight,
  SvgIcDc9V,
  SvgIcDeleteBackspace,
  SvgIcDeliveryBoy,
  SvgIcDeployment,
  SvgIcDesignTools,
  SvgIcDevelopment,
  SvgIcDeviceHistory,
  SvgIcDevicesMixed,
  SvgIcDevotion,
  SvgIcDiamond,
  SvgIcDiaolog,
  SvgIcDice2,
  SvgIcDigitalEcosystem,
  SvgIcDigitalSelfService,
  SvgIcDining,
  SvgIcDirectionTurnRight,
  SvgIcDirectionsOff,
  SvgIcDisabled,
  SvgIcDisinfectant,
  SvgIcDislike,
  SvgIcDisplayLed,
  SvgIcDisposeOff,
  SvgIcDistributeHorizontalSpacing,
  SvgIcDistributeVerticalSpacing,
  SvgIcDistribution,
  SvgIcDizzy,
  SvgIcDna,
  SvgIcDoctor,
  SvgIcDocument,
  SvgIcDocumentUnknown,
  SvgIcDocumentViewer,
  SvgIcDocumentary,
  SvgIcDolbySound,
  SvgIcDongleAudio,
  SvgIcDongleVideo,
  SvgIcDoodle,
  SvgIcDoor,
  SvgIcDoorBell,
  SvgIcDoorCamera,
  SvgIcDoorLocked,
  SvgIcDoorOpen,
  SvgIcDoorSensor,
  SvgIcDoorUnlocked,
  SvgIcDoorlock,
  SvgIcDownload,
  SvgIcDownloadFast,
  SvgIcDownloadQueue,
  SvgIcDownloadQueueBottom,
  SvgIcDownloadQueueTop,
  SvgIcDownloads,
  SvgIcDownloadsFast,
  SvgIcDrama,
  SvgIcDrawer,
  SvgIcDrill,
  SvgIcDrinks,
  SvgIcDrone,
  SvgIcDryAir,
  SvgIcDth,
  SvgIcDthSignal,
  SvgIcDualCamera,
  SvgIcDualCameraHorizontal,
  SvgIcDualSim,
  SvgIcDvdPlayer,
  SvgIcEBookReader,
  SvgIcESim,
  SvgIcEar,
  SvgIcEarPain,
  SvgIcEdit,
  SvgIcEditPen,
  SvgIcEducation,
  SvgIcElephant,
  SvgIcElevator,
  SvgIcEllipse,
  SvgIcEmergencyServices,
  SvgIcEmvcoTapPay,
  SvgIcEndChat,
  SvgIcEndocrinology,
  SvgIcEnergyOthers,
  SvgIcEnergyTotal,
  SvgIcEngineeringRequest,
  SvgIcEnter,
  SvgIcEnterpreneurial,
  SvgIcEntertainment,
  SvgIcEntertainmentPlay,
  SvgIcEpisodes,
  SvgIcEqualizer,
  SvgIcEraser,
  SvgIcError,
  SvgIcErrorColored,
  SvgIcEthernet,
  SvgIcEthernetOff,
  SvgIcExchange,
  SvgIcExchangeData,
  SvgIcExclamation,
  SvgIcExploreCompass,
  SvgIcExport,
  SvgIcExposure,
  SvgIcExtract,
  SvgIcFaceFilter,
  SvgIcFacebook,
  SvgIcFallopianTube,
  SvgIcFamilyHistory,
  SvgIcFamilyMember,
  SvgIcFan,
  SvgIcFanAutoSpeed,
  SvgIcFanSpeedHigh,
  SvgIcFanSpeedLow,
  SvgIcFanSpeedMedium,
  SvgIcFanSpeedTurbo,
  SvgIcFantasy,
  SvgIcFaq,
  SvgIcFashion,
  SvgIcFashionChild,
  SvgIcFashionWoman,
  SvgIcFavorite,
  SvgIcFavouriteMode,
  SvgIcFeaver,
  SvgIcFeedback,
  SvgIcFeedbackAdd,
  SvgIcFeedbackRating,
  SvgIcFemale,
  SvgIcFemaleHygieneProducts,
  SvgIcFemaleMale,
  SvgIcFertilized,
  SvgIcFertilizer,
  SvgIcFilter,
  SvgIcFilterMultiple,
  SvgIcFingerprint,
  SvgIcFinishLine,
  SvgIcFire,
  SvgIcFireAlarm,
  SvgIcFirefighter,
  SvgIcFirefighterManager,
  SvgIcFirefighterOfficer,
  SvgIcFirstAid,
  SvgIcFirstpage,
  SvgIcFitness,
  SvgIcFixedDeposit,
  SvgIcFlag,
  SvgIcFlagGb,
  SvgIcFlagIn,
  SvgIcFlash,
  SvgIcFlashAuto,
  SvgIcFlashOff,
  SvgIcFlightGame,
  SvgIcFlightMode,
  SvgIcFlightModeOff,
  SvgIcFlipCamera,
  SvgIcFlipHorizontal,
  SvgIcFlipVertical,
  SvgIcFlower,
  SvgIcFlushRelay,
  SvgIcFolder,
  SvgIcFolderFavorites,
  SvgIcFolderMoveFiles,
  SvgIcFolderRated,
  SvgIcFolderRemove,
  SvgIcFoodDrink,
  SvgIcFootball,
  SvgIcForkSpoon,
  SvgIcForm,
  SvgIcFormAdd,
  SvgIcForms,
  SvgIcFort,
  SvgIcForward,
  SvgIcForward1,
  SvgIcFoyer,
  SvgIcFrame,
  SvgIcFrontDoor,
  SvgIcFuel,
  SvgIcFullscreenMode,
  SvgIcFullscreenModeOff,
  SvgIcGames,
  SvgIcGaming,
  SvgIcGamingCloud,
  SvgIcGamingControllers,
  SvgIcGamingProfile,
  SvgIcGarage,
  SvgIcGardenPlants,
  SvgIcGardenTools,
  SvgIcGas,
  SvgIcGasPiped,
  SvgIcGasSensor,
  SvgIcGastrointestinal,
  SvgIcGateway1,
  SvgIcGateway2,
  SvgIcGayser,
  SvgIcGeometry,
  SvgIcGhost,
  SvgIcGift,
  SvgIcGiftCard,
  SvgIcGladiator,
  SvgIcGlobe,
  SvgIcGoBack,
  SvgIcGoBack10,
  SvgIcGoBack30,
  SvgIcGoForward,
  SvgIcGoForward10,
  SvgIcGoForward30,
  SvgIcGoogle,
  SvgIcGoogleLens,
  SvgIcGpon,
  SvgIcGraphIncreasing,
  SvgIcGraphLow,
  SvgIcGraphTable,
  SvgIcGrocery,
  SvgIcGroup,
  SvgIcGuard,
  SvgIcGuestroom,
  SvgIcHairDresser,
  SvgIcHairProblems,
  SvgIcHairRoot,
  SvgIcHalloween,
  SvgIcHammer,
  SvgIcHandBag,
  SvgIcHandLuggage,
  SvgIcHandSoap,
  SvgIcHandcuffs,
  SvgIcHands,
  SvgIcHardDisk,
  SvgIcHarddrive,
  SvgIcHarvest,
  SvgIcHcvTop,
  SvgIcHd,
  SvgIcHdScreen,
  SvgIcHdmi,
  SvgIcHdr,
  SvgIcHdrAuto,
  SvgIcHdrOff,
  SvgIcHeadlight,
  SvgIcHeadphones,
  SvgIcHeadset,
  SvgIcHeadsetBluetooth,
  SvgIcHealthConditions,
  SvgIcHealthProtection,
  SvgIcHealthReport,
  SvgIcHeartRate,
  SvgIcHeifer,
  SvgIcHelmetWar,
  SvgIcHelp,
  SvgIcHieferAbortion,
  SvgIcHieferBreeding,
  SvgIcHighSpeed,
  SvgIcHighTemperatureOff,
  SvgIcHockey,
  SvgIcHockeyIce,
  SvgIcHome,
  SvgIcHomeCare,
  SvgIcHomeConnection,
  SvgIcHomeMaintenance,
  SvgIcHomework,
  SvgIcHorror,
  SvgIcHorzontalSwing,
  SvgIcHospital,
  SvgIcHospitalBed,
  SvgIcHotspot,
  SvgIcHotspotLocator,
  SvgIcHourglass,
  SvgIcHtml5,
  SvgIcHubmode,
  SvgIcHumidity,
  SvgIcHydrant,
  SvgIcIceSkating,
  SvgIcId,
  SvgIcIdCheck,
  SvgIcImage,
  SvgIcImport,
  SvgIcIncognito,
  SvgIcIncoming,
  SvgIcIndustry,
  SvgIcInfant,
  SvgIcInfo,
  SvgIcInfoText,
  SvgIcInformationSensor,
  SvgIcInfrastructure,
  SvgIcInsemination,
  SvgIcInsomnia,
  SvgIcInstagram,
  SvgIcIntercomCallMobile,
  SvgIcIntercomCalls,
  SvgIcInterestLow,
  SvgIcInterestPayout,
  SvgIcInternet,
  SvgIcInternetHighSpeed,
  SvgIcIntersection,
  SvgIcIp67,
  SvgIcIpCamera,
  SvgIcIron,
  SvgIcIrrigation,
  SvgIcItalic,
  SvgIcItching,
  SvgIcJanitor,
  SvgIcJewelleryDiamond,
  SvgIcJewelleryRing,
  SvgIcJioFi,
  SvgIcJioFiDongle,
  SvgIcJioInstitute,
  SvgIcJioLink,
  SvgIcJioPayments,
  SvgIcJioTunes,
  SvgIcJiopay,
  SvgIcJoints,
  SvgIcKabaddi,
  SvgIcKarate,
  SvgIcKey,
  SvgIcKeyOff,
  SvgIcKeyboard,
  SvgIcKidney,
  SvgIcKidneyBladder,
  SvgIcKidsroom,
  SvgIcKiranaStore,
  SvgIcKitchen,
  SvgIcKitchenExtractor,
  SvgIcKitchenPot,
  SvgIcKitchenSink,
  SvgIcKnightChess,
  SvgIcKnownConditions,
  SvgIcKyc,
  SvgIcKycManager,
  SvgIcKycSupervisor,
  SvgIcLamp,
  SvgIcLandComposition,
  SvgIcLandPreparation,
  SvgIcLandscape,
  SvgIcLanguage,
  SvgIcLaptop,
  SvgIcLaptopMobile,
  SvgIcLaptopScreen,
  SvgIcLastpage,
  SvgIcLcvTop,
  SvgIcLibrary,
  SvgIcLightbulb,
  SvgIcLike,
  SvgIcLimitAccess,
  SvgIcLimitAccessProtection,
  SvgIcLine,
  SvgIcLineCrossing,
  SvgIcLinkedAccounts,
  SvgIcLinkedin,
  SvgIcList,
  SvgIcLiveCamera,
  SvgIcLoactionShare,
  SvgIcLocation,
  SvgIcLocationDoctor,
  SvgIcLocationHospital,
  SvgIcLocationMobileCoolers,
  SvgIcLocationOff,
  SvgIcLocationOpen,
  SvgIcLocationPoint,
  SvgIcLock,
  SvgIcLockUnlock,
  SvgIcLogin,
  SvgIcLogout,
  SvgIcLoiteringOff,
  SvgIcLotus,
  SvgIcLteDevice,
  SvgIcLuggage,
  SvgIcLungs,
  SvgIcMagic,
  SvgIcMagnetTrain,
  SvgIcMail,
  SvgIcMale,
  SvgIcManager,
  SvgIcMap,
  SvgIcMapLayers,
  SvgIcMarioGame,
  SvgIcMask,
  SvgIcMaskOff,
  SvgIcMason,
  SvgIcMathematics,
  SvgIcMediaShare,
  SvgIcMediaShareMobile,
  SvgIcMedicalFiles,
  SvgIcMedicalHistory,
  SvgIcMedicalInsurance,
  SvgIcMedicine,
  SvgIcMedicineMortar,
  SvgIcMedicines,
  SvgIcMeetingRoom,
  SvgIcMegaphone,
  SvgIcMenuCard,
  SvgIcMenuCardRoomservice,
  SvgIcMerge,
  SvgIcMessagePartiallyDelivered,
  SvgIcMessageRead,
  SvgIcMessageSend,
  SvgIcMic,
  SvgIcMicOff,
  SvgIcMicroSd,
  SvgIcMicroscope,
  SvgIcMicrowave,
  SvgIcMilk,
  SvgIcMilkLow,
  SvgIcMinimise,
  SvgIcMinus,
  SvgIcMirrorCast,
  SvgIcMobile,
  SvgIcMobileData,
  SvgIcMobileDataOff,
  SvgIcMobileDevices,
  SvgIcMobileHorizontal,
  SvgIcMobileNumberPortability,
  SvgIcMobileOff,
  SvgIcModem,
  SvgIcMoneyAdd,
  SvgIcMoneyLoan,
  SvgIcMoneyRequest,
  SvgIcMoneySend,
  SvgIcMoneyToSelf,
  SvgIcMoneybag,
  SvgIcMonster,
  SvgIcMonth,
  SvgIcMopedDelivery,
  SvgIcMopedSide,
  SvgIcMoreHorizontal,
  SvgIcMoreVertical,
  SvgIcMotionOff,
  SvgIcMotorbikeSide,
  SvgIcMouse,
  SvgIcMoversPackers,
  SvgIcMovie,
  SvgIcMultiSensor,
  SvgIcMunicipalTax,
  SvgIcMusic,
  SvgIcMusicNote,
  SvgIcMusical,
  SvgIcMyLocation,
  SvgIcMythology,
  SvgIcNamaste,
  SvgIcNas,
  SvgIcNature,
  SvgIcNatureOff,
  SvgIcNetwork,
  SvgIcNetworkDetails,
  SvgIcNetworkDish,
  SvgIcNetworkFuture,
  SvgIcNeutralGender,
  SvgIcNewChat,
  SvgIcNews,
  SvgIcNext,
  SvgIcNextCircle,
  SvgIcNextTitle,
  SvgIcNfc,
  SvgIcNicCard,
  SvgIcNoRepair,
  SvgIcNoSimCard,
  SvgIcNonVeg,
  SvgIcNose,
  SvgIcNotAtHome,
  SvgIcNotes,
  SvgIcNotification,
  SvgIcNotificationOff,
  SvgIcNowPlaying,
  SvgIcNumPad,
  SvgIcObesity,
  SvgIcOff,
  SvgIcOffer,
  SvgIcOfferCoupon,
  SvgIcOlympics,
  SvgIcOneTap,
  SvgIcOpenInNewTab,
  SvgIcOpenWith,
  SvgIcOperatingTable,
  SvgIcOperator,
  SvgIcOrder,
  SvgIcOrders,
  SvgIcOtp,
  SvgIcOutOfStock,
  SvgIcOutgoing,
  SvgIcOutlet,
  SvgIcOverlay,
  SvgIcOxygen,
  SvgIcPageFlip,
  SvgIcPaintRoller,
  SvgIcPaired,
  SvgIcPairing,
  SvgIcPairingComplete,
  SvgIcPanicButton,
  SvgIcPanorma,
  SvgIcParentalControlPhone,
  SvgIcParentalControlWeb,
  SvgIcParking,
  SvgIcPartialOxygenPressure,
  SvgIcPartner,
  SvgIcPassbook,
  SvgIcPaste,
  SvgIcPasteDocument,
  SvgIcPause,
  SvgIcPauseCircle,
  SvgIcPayBill,
  SvgIcPayEmiInstall,
  SvgIcPayFriend,
  SvgIcPayRecurring,
  SvgIcPaySchedule,
  SvgIcPayment,
  SvgIcPaymentPlan,
  SvgIcPercentageDecrease,
  SvgIcPercentageIncrease,
  SvgIcPercentageValue,
  SvgIcPeriodProblems,
  SvgIcPersonalHistory,
  SvgIcPersonalTrainer,
  SvgIcPestProblem,
  SvgIcPesticides,
  SvgIcPests,
  SvgIcPets,
  SvgIcPharmacy,
  SvgIcPhoneKeyAccess,
  SvgIcPhoneNumberLandline,
  SvgIcPhonePerformance,
  SvgIcPhoneSecured,
  SvgIcPhoto,
  SvgIcPhotoAdd,
  SvgIcPhotoCamera,
  SvgIcPhotoCrop,
  SvgIcPhotoFilter,
  SvgIcPhotoMediaFiles,
  SvgIcPhotoRemove,
  SvgIcPhotoResize,
  SvgIcPhotoSize,
  SvgIcPin,
  SvgIcPinOff,
  SvgIcPipe,
  SvgIcPlan,
  SvgIcPlanAdd,
  SvgIcPlaneArrival,
  SvgIcPlaneDeparture,
  SvgIcPlans,
  SvgIcPlantGrowth,
  SvgIcPlanting,
  SvgIcPlay,
  SvgIcPlayCircle,
  SvgIcPlayPause,
  SvgIcPlaylist,
  SvgIcPlaylistAdd,
  SvgIcPlaylistSuccessful,
  SvgIcPlc,
  SvgIcPlcPoe,
  SvgIcPlcWifi,
  SvgIcPlug,
  SvgIcPooja,
  SvgIcPool,
  SvgIcPorch,
  SvgIcPortrait,
  SvgIcPowerOverEthernet,
  SvgIcPregnancyTest,
  SvgIcPreviousTitle,
  SvgIcPrimeContent,
  SvgIcPrint,
  SvgIcPro,
  SvgIcProfile,
  SvgIcProfileFemale,
  SvgIcProfileMale,
  SvgIcProjection,
  SvgIcProtection,
  SvgIcProtectionLocked,
  SvgIcProtectionThreats,
  SvgIcProtectionUnlock,
  SvgIcPulseOximeter,
  SvgIcPuzzle,
  SvgIcQrCode,
  SvgIcQuickCapture,
  SvgIcQuickPayment,
  SvgIcRacingCar,
  SvgIcRacingRacetrack,
  SvgIcRadio,
  SvgIcRadioSignal,
  SvgIcRadioStation,
  SvgIcRam,
  SvgIcRamHorizonal,
  SvgIcRaspberry,
  SvgIcReader,
  SvgIcRearrange,
  SvgIcRecentHistory,
  SvgIcRechargeFriend,
  SvgIcRechargeHistory,
  SvgIcRecord,
  SvgIcRecording,
  SvgIcRectangle,
  SvgIcRecycling,
  SvgIcRedo,
  SvgIcRefresh,
  SvgIcRefund,
  SvgIcRegularSensor,
  SvgIcRemote,
  SvgIcRemotePush,
  SvgIcRemoteRecord,
  SvgIcRemoteUniversal,
  SvgIcRemoteUniversalA,
  SvgIcRemoteUniversalB,
  SvgIcRemoteUniversalU,
  SvgIcRename,
  SvgIcRepeat,
  SvgIcRepeatOne,
  SvgIcReplay,
  SvgIcReply,
  SvgIcReplyAll,
  SvgIcReplyCircle,
  SvgIcRequest,
  SvgIcResearch,
  SvgIcReset,
  SvgIcRestaurant,
  SvgIcResumeReading,
  SvgIcResumeWatching,
  SvgIcReturn,
  SvgIcRevolver,
  SvgIcRewind,
  SvgIcRibbonGrid,
  SvgIcRingerVibrate,
  SvgIcRoRepair,
  SvgIcRoaming,
  SvgIcRoamingNetwork,
  SvgIcRoamingOff,
  SvgIcRobot,
  SvgIcRocket,
  SvgIcRollerBlinds,
  SvgIcRollerBlindsClosed,
  SvgIcRomance,
  SvgIcRoomPurifyer,
  SvgIcRotatePhone,
  SvgIcRoulette,
  SvgIcRoutes,
  SvgIcRoutesTraffic,
  SvgIcRuler,
  SvgIcRunning,
  SvgIcRupee,
  SvgIcRupeeCoin,
  SvgIcRupeeCoinOff,
  SvgIcSafetySensor,
  SvgIcSampling,
  SvgIcSaturation,
  SvgIcSave,
  SvgIcSavings,
  SvgIcScale,
  SvgIcScalpel,
  SvgIcScan,
  SvgIcScanBody,
  SvgIcScanFace,
  SvgIcScanPicture,
  SvgIcScanQrCode,
  SvgIcScanText,
  SvgIcSchedule,
  SvgIcScheduledDoctorAppointment,
  SvgIcScheduledDoctorConsultation,
  SvgIcSciFiction,
  SvgIcScreen,
  SvgIcScreenFull,
  SvgIcScreenMinimise,
  SvgIcScreenReduce,
  SvgIcScribble,
  SvgIcSdCard,
  SvgIcSearch,
  SvgIcSeats,
  SvgIcSecureLocked,
  SvgIcSecured,
  SvgIcSecurityCameraBall,
  SvgIcSecurityCameraCeiling,
  SvgIcSecuritySensor,
  SvgIcSecurityVehicle,
  SvgIcSecurityguard,
  SvgIcSecurityguardManager,
  SvgIcSecurityguardOfficer,
  SvgIcSeedling,
  SvgIcSeekbar,
  SvgIcSendMessage,
  SvgIcServer,
  SvgIcServerCloud,
  SvgIcServerHome,
  SvgIcServerInternet,
  SvgIcServerShared,
  SvgIcServerWifi,
  SvgIcServiceCenter,
  SvgIcSettings,
  SvgIcSewingMachine,
  SvgIcShare,
  SvgIcShopping,
  SvgIcShoppingBag,
  SvgIcShoppingBagFavorite,
  SvgIcShoppingBags,
  SvgIcShoppingBasket,
  SvgIcShuffle,
  SvgIcSign,
  SvgIcSignIn,
  SvgIcSignOut,
  SvgIcSim,
  SvgIcSim1,
  SvgIcSim2,
  SvgIcSimOff,
  SvgIcSimPostPaid,
  SvgIcSirene,
  SvgIcSkating,
  SvgIcSkull,
  SvgIcSleepMode,
  SvgIcSleeping,
  SvgIcSlide,
  SvgIcSlowMotion,
  SvgIcSmartBulb,
  SvgIcSmartBulbConnect,
  SvgIcSmartBulbDimmable,
  SvgIcSmartBulbRgb,
  SvgIcSmartCleaner,
  SvgIcSmartDoorlock,
  SvgIcSmartFridge,
  SvgIcSmartHoover,
  SvgIcSmartOutlet,
  SvgIcSmartPlug,
  SvgIcSmartSwitchPlug,
  SvgIcSmartWatch,
  SvgIcSmartphoneLandline,
  SvgIcSmileyDelighted,
  SvgIcSmileyHappy,
  SvgIcSmileyNeutral,
  SvgIcSmileyOutraged,
  SvgIcSmileySatisfied,
  SvgIcSmileyUnhappy,
  SvgIcSmileyUnsatisfied,
  SvgIcSmokeSensor,
  SvgIcSmoking,
  SvgIcSmokingOff,
  SvgIcSms,
  SvgIcSmsGroup,
  SvgIcSmsReceive,
  SvgIcSmsSend,
  SvgIcSmss,
  SvgIcSnacks,
  SvgIcSnapchat,
  SvgIcSofa,
  SvgIcSoil,
  SvgIcSoilLayers,
  SvgIcSort,
  SvgIcSortHandle,
  SvgIcSortList,
  SvgIcSos,
  SvgIcSosCircle,
  SvgIcSound,
  SvgIcSoundDisabled,
  SvgIcSoundLoud,
  SvgIcSoundMedium,
  SvgIcSoundQuiet,
  SvgIcSowing,
  SvgIcSpade,
  SvgIcSpanner,
  SvgIcSpdifOptical,
  SvgIcSpdifOpticalPos,
  SvgIcSpeaker,
  SvgIcSpine,
  SvgIcSport,
  SvgIcSportsPulse,
  SvgIcSpotcolor,
  SvgIcSprayCan,
  SvgIcStabilization,
  SvgIcStairway,
  SvgIcStamp,
  SvgIcStar,
  SvgIcStarAdd,
  SvgIcStatusFail,
  SvgIcStatusLoading,
  SvgIcStatusSuccessful,
  SvgIcSteeringWheel,
  SvgIcSteps,
  SvgIcStopwatch,
  SvgIcStore,
  SvgIcStoreRoom,
  SvgIcStory,
  SvgIcStream,
  SvgIcStreamOff,
  SvgIcStretching,
  SvgIcStroller,
  SvgIcStudent,
  SvgIcSubscription,
  SvgIcSubscriptions,
  SvgIcSubtitle,
  SvgIcSuccess,
  SvgIcSuccessColored,
  SvgIcSunHeating,
  SvgIcSupervisor,
  SvgIcSupport,
  SvgIcSupportAdmin,
  SvgIcSurvey,
  SvgIcSwap,
  SvgIcSwimming,
  SvgIcSwitch,
  SvgIcSword,
  SvgIcTableTennis,
  SvgIcTablet,
  SvgIcTag,
  SvgIcTarget,
  SvgIcTargetAim,
  SvgIcTariffAlert,
  SvgIcTariffChecking,
  SvgIcTariffExpired,
  SvgIcTask,
  SvgIcTaxiFront,
  SvgIcTeach,
  SvgIcTeam,
  SvgIcTeamMembers,
  SvgIcTechnology,
  SvgIcTeddy,
  SvgIcTeddyLove,
  SvgIcTemperature,
  SvgIcTemperatureDown,
  SvgIcTemperatureOff,
  SvgIcTemperatureUp,
  SvgIcTempered,
  SvgIcTemple,
  SvgIcTennis,
  SvgIcTerminal,
  SvgIcTest,
  SvgIcText,
  SvgIcTextAlignCenter,
  SvgIcTextAlignJustify,
  SvgIcTextAlignLeft,
  SvgIcTextAlignRight,
  SvgIcTextbook,
  SvgIcTheaterRoom,
  SvgIcTheme,
  SvgIcThinking,
  SvgIcThinkingBrain,
  SvgIcThinkingCritical,
  SvgIcThreeDay,
  SvgIcThroat,
  SvgIcThumbnail,
  SvgIcTicket,
  SvgIcTicketDetails,
  SvgIcTicketPnrNumber,
  SvgIcTicketRaise,
  SvgIcTicketStatus,
  SvgIcTickets,
  SvgIcTime,
  SvgIcTimelapse,
  SvgIcTimeline,
  SvgIcTimelines,
  SvgIcTimezone,
  SvgIcTimezones,
  SvgIcTips,
  SvgIcTochpanel,
  SvgIcToddler,
  SvgIcToiletManWomen,
  SvgIcToiletSeat,
  SvgIcToll,
  SvgIcTollStation,
  SvgIcTooth,
  SvgIcTorch,
  SvgIcTorchOff,
  SvgIcTower,
  SvgIcTrackEcg,
  SvgIcTrackVitals,
  SvgIcTrafficCone,
  SvgIcTrainDelay,
  SvgIcTrainFront,
  SvgIcTrainStatus,
  SvgIcTramFront,
  SvgIcTransactionHistory,
  SvgIcTrash,
  SvgIcTrashClear,
  SvgIcTrendingFlame,
  SvgIcTriangle,
  SvgIcTrivia,
  SvgIcTrolleyClearance,
  SvgIcTruckDelivery,
  SvgIcTruckSide,
  SvgIcTv,
  SvgIcTvCall,
  SvgIcTvCam,
  SvgIcTvChannels,
  SvgIcTvOnline,
  SvgIcTvPlay,
  SvgIcTvPlus,
  SvgIcTwitter,
  SvgIcUdder,
  SvgIcUdderOff,
  SvgIcUnderline,
  SvgIcUndo,
  SvgIcUnpaired,
  SvgIcUpdate,
  SvgIcUpiNumber,
  SvgIcUpload,
  SvgIcUpload1,
  SvgIcUploads,
  SvgIcUsb,
  SvgIcUsbCable,
  SvgIcUsbDongle,
  SvgIcUsbStick,
  SvgIcUser,
  SvgIcVaccine,
  SvgIcVaccumCleaner,
  SvgIcVampire,
  SvgIcVeg,
  SvgIcVerticalSwing,
  SvgIcVideo,
  SvgIcVideoCall,
  SvgIcVideoCallGroup,
  SvgIcVideoCalls,
  SvgIcVideoEnd,
  SvgIcVideoInOut,
  SvgIcVideoIncomming,
  SvgIcVideoOutgoing,
  SvgIcVideoResize,
  SvgIcVideoSize,
  SvgIcVideoSurveillance,
  SvgIcViewTile,
  SvgIcVinylRecord,
  SvgIcVirus,
  SvgIcVisible,
  SvgIcVisibleOff,
  SvgIcVoice,
  SvgIcVolume,
  SvgIcVoucher4G,
  SvgIcVoucherCashback,
  SvgIcVoucherPlan,
  SvgIcVpn,
  SvgIcVr,
  SvgIcWalking,
  SvgIcWalkingAids,
  SvgIcWallet,
  SvgIcWallpaper,
  SvgIcWar,
  SvgIcWarehouse,
  SvgIcWarning,
  SvgIcWarningColored,
  SvgIcWarranty,
  SvgIcWashingMachine,
  SvgIcWater,
  SvgIcWaterBottle,
  SvgIcWaterBottleReuseable,
  SvgIcWaterChecked,
  SvgIcWaterPipe,
  SvgIcWaterPump,
  SvgIcWaterPurifier,
  SvgIcWaterSensor,
  SvgIcWaterTap,
  SvgIcWateringCan,
  SvgIcWatermelon,
  SvgIcWebBrowser,
  SvgIcWebBrowserCursor,
  SvgIcWebBrowserMobile,
  SvgIcWebBrowserSuccessful,
  SvgIcWebseries,
  SvgIcWeek,
  SvgIcWeightTraining,
  SvgIcWhatsapp,
  SvgIcWideAngle170,
  SvgIcWidestRange,
  SvgIcWidgets,
  SvgIcWifi,
  SvgIcWifiConnected,
  SvgIcWifiEnable,
  SvgIcWifiLocked,
  SvgIcWifiLocked0,
  SvgIcWifiLocked1,
  SvgIcWifiLocked2,
  SvgIcWifiLocked3,
  SvgIcWifiNetwork,
  SvgIcWifiNoInternet,
  SvgIcWifiNotFound,
  SvgIcWifiOff,
  SvgIcWifiOk,
  SvgIcWifiRouter,
  SvgIcWifiSignInRequired,
  SvgIcWifiStrength0,
  SvgIcWifiStrength1,
  SvgIcWifiStrength2,
  SvgIcWifiStrength3,
  SvgIcWord,
  SvgIcWork,
  SvgIcWorkshop,
  SvgIcWps,
  SvgIcWrestling,
  SvgIcWriting,
  SvgIcXRay,
  SvgIcXRayBody,
  SvgIcYoga,
  SvgIcYogaMeditation,
  SvgIcYoutube,
  SvgIcZombie,
  _default$5 as Tab,
  _default$4 as TabItem,
  _default$1 as Table,
  ToastManager,
  _default$3 as ToggleButton,
  _default$6 as Tooltip,
  _default$c as Validation,
};
//# sourceMappingURL=index.d.ts.map
