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
declare const _default$e: React.MemoExoticComponent<{
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
declare const _default$d: React.MemoExoticComponent<{
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
declare const _default$c: React.MemoExoticComponent<{
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
declare const _default$b: React.MemoExoticComponent<{
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
declare const _default$a: React.MemoExoticComponent<{
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
declare const _default$9: React.MemoExoticComponent<{
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
declare const _default$8: React.MemoExoticComponent<{
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
}
declare const _default$7: React.MemoExoticComponent<{
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

type ItemsType = Array<{
  name: string | number;
  description?: string | number;
  isInactive?: boolean;
  isCompleted?: boolean;
  icon?: React.ElementType;
  iconSize?: string;
  iconColor?: string;
  extraIconProps?: object;
  buttonText?: string;
  buttonStyles?: object;
}>;
interface StepperProps {
  activeIndex?: number;
  maxActiveIndex?: number;
  items?: ItemsType;
  onClick?: Function;
  isHorizontal: boolean;
  heading?: string;
  showProgress?: boolean;
  className?: string;
  style?: React.CSSProperties;
  progressStrokeColor?: string;
}
declare const _default$6: React.MemoExoticComponent<{
  (props: StepperProps): JSX.Element;
  defaultProps: {
    items: never[];
    maxActiveIndex: number;
    activeIndex: number;
    isHorizontal: boolean;
    progressStrokeColor: string;
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
declare const _default$5: React.MemoExoticComponent<{
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
declare const _default$4: React.MemoExoticComponent<{
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
declare const _default$3: React.MemoExoticComponent<
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
declare const _default$2: React.MemoExoticComponent<{
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
declare const _default$1: React.MemoExoticComponent<{
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
  checkable?: Boolean;
  onRowClick?: (index: number) => void;
  allChecked?: Boolean;
  getCheckedItems?: Function;
  allCheckClicked?: Function;
}
declare const _default: React.NamedExoticComponent<TableProps>;

interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

declare function Svg124(props: IconBaseProps): JSX.Element;
declare function Svg3DRotation(props: IconBaseProps): JSX.Element;
declare function SvgAbc(props: IconBaseProps): JSX.Element;
declare function SvgAccessibilityNew(props: IconBaseProps): JSX.Element;
declare function SvgAccessibility(props: IconBaseProps): JSX.Element;
declare function SvgAccessibleForward(props: IconBaseProps): JSX.Element;
declare function SvgAccessible(props: IconBaseProps): JSX.Element;
declare function SvgAccountBalanceWallet(props: IconBaseProps): JSX.Element;
declare function SvgAccountBalance(props: IconBaseProps): JSX.Element;
declare function SvgAccountBox(props: IconBaseProps): JSX.Element;
declare function SvgAccountCircle(props: IconBaseProps): JSX.Element;
declare function SvgAddCard(props: IconBaseProps): JSX.Element;
declare function SvgAddShoppingCart(props: IconBaseProps): JSX.Element;
declare function SvgAddTask(props: IconBaseProps): JSX.Element;
declare function SvgAddToDrive(props: IconBaseProps): JSX.Element;
declare function SvgAddchart(props: IconBaseProps): JSX.Element;
declare function SvgAdminPanelSettings(props: IconBaseProps): JSX.Element;
declare function SvgAdsClick(props: IconBaseProps): JSX.Element;
declare function SvgAlarmAdd(props: IconBaseProps): JSX.Element;
declare function SvgAlarmOff(props: IconBaseProps): JSX.Element;
declare function SvgAlarmOn(props: IconBaseProps): JSX.Element;
declare function SvgAlarm(props: IconBaseProps): JSX.Element;
declare function SvgAllInbox(props: IconBaseProps): JSX.Element;
declare function SvgAllOut(props: IconBaseProps): JSX.Element;
declare function SvgAnalytics(props: IconBaseProps): JSX.Element;
declare function SvgAnchor(props: IconBaseProps): JSX.Element;
declare function SvgAndroid(props: IconBaseProps): JSX.Element;
declare function SvgAnnouncement(props: IconBaseProps): JSX.Element;
declare function SvgApi(props: IconBaseProps): JSX.Element;
declare function SvgAppBlocking(props: IconBaseProps): JSX.Element;
declare function SvgAppShortcut(props: IconBaseProps): JSX.Element;
declare function SvgArrowCircleDown(props: IconBaseProps): JSX.Element;
declare function SvgArrowCircleLeft(props: IconBaseProps): JSX.Element;
declare function SvgArrowCircleRight(props: IconBaseProps): JSX.Element;
declare function SvgArrowCircleUp(props: IconBaseProps): JSX.Element;
declare function SvgArrowRightAlt(props: IconBaseProps): JSX.Element;
declare function SvgArticle(props: IconBaseProps): JSX.Element;
declare function SvgAspectRatio(props: IconBaseProps): JSX.Element;
declare function SvgAssessment(props: IconBaseProps): JSX.Element;
declare function SvgAssignmentInd(props: IconBaseProps): JSX.Element;
declare function SvgAssignmentLate(props: IconBaseProps): JSX.Element;
declare function SvgAssignmentReturn(props: IconBaseProps): JSX.Element;
declare function SvgAssignmentReturned(props: IconBaseProps): JSX.Element;
declare function SvgAssignmentTurnedIn(props: IconBaseProps): JSX.Element;
declare function SvgAssignment(props: IconBaseProps): JSX.Element;
declare function SvgAssuredWorkload(props: IconBaseProps): JSX.Element;
declare function SvgAutorenew(props: IconBaseProps): JSX.Element;
declare function SvgBackupTable(props: IconBaseProps): JSX.Element;
declare function SvgBackup(props: IconBaseProps): JSX.Element;
declare function SvgBalance(props: IconBaseProps): JSX.Element;
declare function SvgBatchPrediction(props: IconBaseProps): JSX.Element;
declare function SvgBookOnline(props: IconBaseProps): JSX.Element;
declare function SvgBook(props: IconBaseProps): JSX.Element;
declare function SvgBookmarkAdd(props: IconBaseProps): JSX.Element;
declare function SvgBookmarkAdded(props: IconBaseProps): JSX.Element;
declare function SvgBookmarkBorder(props: IconBaseProps): JSX.Element;
declare function SvgBookmarkRemove(props: IconBaseProps): JSX.Element;
declare function SvgBookmark(props: IconBaseProps): JSX.Element;
declare function SvgBookmarks(props: IconBaseProps): JSX.Element;
declare function SvgBrowseGallery(props: IconBaseProps): JSX.Element;
declare function SvgBugReport(props: IconBaseProps): JSX.Element;
declare function SvgBuildCircle(props: IconBaseProps): JSX.Element;
declare function SvgBuild(props: IconBaseProps): JSX.Element;
declare function SvgBulb(props: IconBaseProps): JSX.Element;
declare function SvgCached(props: IconBaseProps): JSX.Element;
declare function SvgCalendarMonth(props: IconBaseProps): JSX.Element;
declare function SvgCalendarToday(props: IconBaseProps): JSX.Element;
declare function SvgCalendarViewDay(props: IconBaseProps): JSX.Element;
declare function SvgCalendarViewMonth(props: IconBaseProps): JSX.Element;
declare function SvgCalendarViewWeek(props: IconBaseProps): JSX.Element;
declare function SvgCameraEnhance(props: IconBaseProps): JSX.Element;
declare function SvgCancelScheduleSend(props: IconBaseProps): JSX.Element;
declare function SvgCardGiftcard(props: IconBaseProps): JSX.Element;
declare function SvgCardMembership(props: IconBaseProps): JSX.Element;
declare function SvgCardTravel(props: IconBaseProps): JSX.Element;
declare function SvgChangeHistory(props: IconBaseProps): JSX.Element;
declare function SvgCheckCircleOutline(props: IconBaseProps): JSX.Element;
declare function SvgCheckCircle(props: IconBaseProps): JSX.Element;
declare function SvgChromeReaderMode(props: IconBaseProps): JSX.Element;
declare function SvgCircleNotifications(props: IconBaseProps): JSX.Element;
declare function SvgClass(props: IconBaseProps): JSX.Element;
declare function SvgCloseFullscreen(props: IconBaseProps): JSX.Element;
declare function SvgCodeOff(props: IconBaseProps): JSX.Element;
declare function SvgCode(props: IconBaseProps): JSX.Element;
declare function SvgCommentBank(props: IconBaseProps): JSX.Element;
declare function SvgCommit(props: IconBaseProps): JSX.Element;
declare function SvgCommute(props: IconBaseProps): JSX.Element;
declare function SvgCompareArrows(props: IconBaseProps): JSX.Element;
declare function SvgCompress(props: IconBaseProps): JSX.Element;
declare function SvgContactPage(props: IconBaseProps): JSX.Element;
declare function SvgContactSupport(props: IconBaseProps): JSX.Element;
declare function SvgContactless(props: IconBaseProps): JSX.Element;
declare function SvgCopyright(props: IconBaseProps): JSX.Element;
declare function SvgCreditCardOff(props: IconBaseProps): JSX.Element;
declare function SvgCreditCard(props: IconBaseProps): JSX.Element;
declare function SvgCss(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyExchange(props: IconBaseProps): JSX.Element;
declare function SvgDangerous(props: IconBaseProps): JSX.Element;
declare function SvgDashboardCustomize(props: IconBaseProps): JSX.Element;
declare function SvgDashboard(props: IconBaseProps): JSX.Element;
declare function SvgDataExploration(props: IconBaseProps): JSX.Element;
declare function SvgDataThresholding(props: IconBaseProps): JSX.Element;
declare function SvgDateRange(props: IconBaseProps): JSX.Element;
declare function SvgDeleteForever(props: IconBaseProps): JSX.Element;
declare function SvgDeleteOutline(props: IconBaseProps): JSX.Element;
declare function SvgDelete(props: IconBaseProps): JSX.Element;
declare function SvgDensityLarge(props: IconBaseProps): JSX.Element;
declare function SvgDensityMedium(props: IconBaseProps): JSX.Element;
declare function SvgDensitySmall(props: IconBaseProps): JSX.Element;
declare function SvgDescription(props: IconBaseProps): JSX.Element;
declare function SvgDisabledByDefault(props: IconBaseProps): JSX.Element;
declare function SvgDisabledVisible(props: IconBaseProps): JSX.Element;
declare function SvgDisplaySettings(props: IconBaseProps): JSX.Element;
declare function SvgDns(props: IconBaseProps): JSX.Element;
declare function SvgDoneAll(props: IconBaseProps): JSX.Element;
declare function SvgDoneOutline(props: IconBaseProps): JSX.Element;
declare function SvgDone(props: IconBaseProps): JSX.Element;
declare function SvgDonutLarge(props: IconBaseProps): JSX.Element;
declare function SvgDonutSmall(props: IconBaseProps): JSX.Element;
declare function SvgDragIndicator(props: IconBaseProps): JSX.Element;
declare function SvgDynamicForm(props: IconBaseProps): JSX.Element;
declare function SvgEditCalendar(props: IconBaseProps): JSX.Element;
declare function SvgEditOff(props: IconBaseProps): JSX.Element;
declare function SvgEject(props: IconBaseProps): JSX.Element;
declare function SvgEuroSymbol(props: IconBaseProps): JSX.Element;
declare function SvgEventRepeat(props: IconBaseProps): JSX.Element;
declare function SvgEventSeat(props: IconBaseProps): JSX.Element;
declare function SvgEvent(props: IconBaseProps): JSX.Element;
declare function SvgExitToApp(props: IconBaseProps): JSX.Element;
declare function SvgExpand(props: IconBaseProps): JSX.Element;
declare function SvgExploreOff(props: IconBaseProps): JSX.Element;
declare function SvgExplore(props: IconBaseProps): JSX.Element;
declare function SvgExtensionOff(props: IconBaseProps): JSX.Element;
declare function SvgExtension(props: IconBaseProps): JSX.Element;
declare function SvgFace(props: IconBaseProps): JSX.Element;
declare function SvgFactCheck(props: IconBaseProps): JSX.Element;
declare function SvgFavoriteBorder(props: IconBaseProps): JSX.Element;
declare function SvgFavorite(props: IconBaseProps): JSX.Element;
declare function SvgFax(props: IconBaseProps): JSX.Element;
declare function SvgFeedback(props: IconBaseProps): JSX.Element;
declare function SvgFilePresent(props: IconBaseProps): JSX.Element;
declare function SvgFilterAltOff(props: IconBaseProps): JSX.Element;
declare function SvgFilterAlt(props: IconBaseProps): JSX.Element;
declare function SvgFindInPage(props: IconBaseProps): JSX.Element;
declare function SvgFindReplace(props: IconBaseProps): JSX.Element;
declare function SvgFingerprint(props: IconBaseProps): JSX.Element;
declare function SvgFitScreen(props: IconBaseProps): JSX.Element;
declare function SvgFlaky(props: IconBaseProps): JSX.Element;
declare function SvgFlightLand(props: IconBaseProps): JSX.Element;
declare function SvgFlightTakeoff(props: IconBaseProps): JSX.Element;
declare function SvgFlipToBack(props: IconBaseProps): JSX.Element;
declare function SvgFlipToFront(props: IconBaseProps): JSX.Element;
declare function SvgFlutterDash(props: IconBaseProps): JSX.Element;
declare function SvgFreeCancellation(props: IconBaseProps): JSX.Element;
declare function SvgGTranslate(props: IconBaseProps): JSX.Element;
declare function SvgGavel(props: IconBaseProps): JSX.Element;
declare function SvgGeneratingTokens(props: IconBaseProps): JSX.Element;
declare function SvgGetApp(props: IconBaseProps): JSX.Element;
declare function SvgGifBox(props: IconBaseProps): JSX.Element;
declare function SvgGif(props: IconBaseProps): JSX.Element;
declare function SvgGrade(props: IconBaseProps): JSX.Element;
declare function SvgGrading(props: IconBaseProps): JSX.Element;
declare function SvgGroupWork(props: IconBaseProps): JSX.Element;
declare function SvgHelpCenter(props: IconBaseProps): JSX.Element;
declare function SvgHelpOutline(props: IconBaseProps): JSX.Element;
declare function SvgHelp(props: IconBaseProps): JSX.Element;
declare function SvgHideSource(props: IconBaseProps): JSX.Element;
declare function SvgHighlightAlt(props: IconBaseProps): JSX.Element;
declare function SvgHighlightOff(props: IconBaseProps): JSX.Element;
declare function SvgHistoryToggleOff(props: IconBaseProps): JSX.Element;
declare function SvgHistory(props: IconBaseProps): JSX.Element;
declare function SvgHlsOff(props: IconBaseProps): JSX.Element;
declare function SvgHls(props: IconBaseProps): JSX.Element;
declare function SvgHome(props: IconBaseProps): JSX.Element;
declare function SvgHorizontalSplit(props: IconBaseProps): JSX.Element;
declare function SvgHotelClass(props: IconBaseProps): JSX.Element;
declare function SvgHourglassDisabled(props: IconBaseProps): JSX.Element;
declare function SvgHourglassEmpty(props: IconBaseProps): JSX.Element;
declare function SvgHourglassFull(props: IconBaseProps): JSX.Element;
declare function SvgHtml(props: IconBaseProps): JSX.Element;
declare function SvgHttp(props: IconBaseProps): JSX.Element;
declare function SvgHttps(props: IconBaseProps): JSX.Element;
declare function SvgImportantDevices(props: IconBaseProps): JSX.Element;
declare function SvgInfo(props: IconBaseProps): JSX.Element;
declare function SvgInput(props: IconBaseProps): JSX.Element;
declare function SvgInstallDesktop(props: IconBaseProps): JSX.Element;
declare function SvgInstallMobile(props: IconBaseProps): JSX.Element;
declare function SvgIntegrationInstructions(props: IconBaseProps): JSX.Element;
declare function SvgInvertColors(props: IconBaseProps): JSX.Element;
declare function SvgJavascript(props: IconBaseProps): JSX.Element;
declare function SvgJoinFull(props: IconBaseProps): JSX.Element;
declare function SvgJoinInner(props: IconBaseProps): JSX.Element;
declare function SvgJoinLeft(props: IconBaseProps): JSX.Element;
declare function SvgJoinRight(props: IconBaseProps): JSX.Element;
declare function SvgLabelImportant(props: IconBaseProps): JSX.Element;
declare function SvgLabelOff(props: IconBaseProps): JSX.Element;
declare function SvgLabel(props: IconBaseProps): JSX.Element;
declare function SvgLanguage(props: IconBaseProps): JSX.Element;
declare function SvgLaunch(props: IconBaseProps): JSX.Element;
declare function SvgLeaderboard(props: IconBaseProps): JSX.Element;
declare function SvgLightbulbCircle(props: IconBaseProps): JSX.Element;
declare function SvgLineStyle(props: IconBaseProps): JSX.Element;
declare function SvgLineWeight(props: IconBaseProps): JSX.Element;
declare function SvgList(props: IconBaseProps): JSX.Element;
declare function SvgLockClock(props: IconBaseProps): JSX.Element;
declare function SvgLockOpen(props: IconBaseProps): JSX.Element;
declare function SvgLockPerson(props: IconBaseProps): JSX.Element;
declare function SvgLockReset(props: IconBaseProps): JSX.Element;
declare function SvgLock(props: IconBaseProps): JSX.Element;
declare function SvgLogin(props: IconBaseProps): JSX.Element;
declare function SvgLogout(props: IconBaseProps): JSX.Element;
declare function SvgLoyalty(props: IconBaseProps): JSX.Element;
declare function SvgManageAccounts(props: IconBaseProps): JSX.Element;
declare function SvgManageHistory(props: IconBaseProps): JSX.Element;
declare function SvgMarkAsUnread(props: IconBaseProps): JSX.Element;
declare function SvgMarkunreadMailbox(props: IconBaseProps): JSX.Element;
declare function SvgMaximize(props: IconBaseProps): JSX.Element;
declare function SvgMediation(props: IconBaseProps): JSX.Element;
declare function SvgMinimize(props: IconBaseProps): JSX.Element;
declare function SvgModelTraining(props: IconBaseProps): JSX.Element;
declare function SvgNetworkPing(props: IconBaseProps): JSX.Element;
declare function SvgNewLabel(props: IconBaseProps): JSX.Element;
declare function SvgNextPlan(props: IconBaseProps): JSX.Element;
declare function SvgNightlightRound(props: IconBaseProps): JSX.Element;
declare function SvgNoAccounts(props: IconBaseProps): JSX.Element;
declare function SvgNoiseAware(props: IconBaseProps): JSX.Element;
declare function SvgNoiseControlOff(props: IconBaseProps): JSX.Element;
declare function SvgNotAccessible(props: IconBaseProps): JSX.Element;
declare function SvgNotStarted(props: IconBaseProps): JSX.Element;
declare function SvgNoteAdd(props: IconBaseProps): JSX.Element;
declare function SvgOfflineBolt(props: IconBaseProps): JSX.Element;
declare function SvgOfflinePin(props: IconBaseProps): JSX.Element;
declare function SvgOnDeviceTraining(props: IconBaseProps): JSX.Element;
declare function SvgOnlinePrediction(props: IconBaseProps): JSX.Element;
declare function SvgOpacity(props: IconBaseProps): JSX.Element;
declare function SvgOpenInBrowser(props: IconBaseProps): JSX.Element;
declare function SvgOpenInFull(props: IconBaseProps): JSX.Element;
declare function SvgOpenInNewOff(props: IconBaseProps): JSX.Element;
declare function SvgOpenInNew(props: IconBaseProps): JSX.Element;
declare function SvgOpenWith(props: IconBaseProps): JSX.Element;
declare function SvgOutbound(props: IconBaseProps): JSX.Element;
declare function SvgOutbox(props: IconBaseProps): JSX.Element;
declare function SvgOutlet(props: IconBaseProps): JSX.Element;
declare function SvgOutput(props: IconBaseProps): JSX.Element;
declare function SvgPageview(props: IconBaseProps): JSX.Element;
declare function SvgPaid(props: IconBaseProps): JSX.Element;
declare function SvgPanToolAlt(props: IconBaseProps): JSX.Element;
declare function SvgPanTool(props: IconBaseProps): JSX.Element;
declare function SvgPayment(props: IconBaseProps): JSX.Element;
declare function SvgPendingActions(props: IconBaseProps): JSX.Element;
declare function SvgPending(props: IconBaseProps): JSX.Element;
declare function SvgPercent(props: IconBaseProps): JSX.Element;
declare function SvgPermCameraMic(props: IconBaseProps): JSX.Element;
declare function SvgPermContactCalendar(props: IconBaseProps): JSX.Element;
declare function SvgPermDataSetting(props: IconBaseProps): JSX.Element;
declare function SvgPermDeviceInformation(props: IconBaseProps): JSX.Element;
declare function SvgPermIdentity(props: IconBaseProps): JSX.Element;
declare function SvgPermMedia(props: IconBaseProps): JSX.Element;
declare function SvgPermPhoneMsg(props: IconBaseProps): JSX.Element;
declare function SvgPermScanWifi(props: IconBaseProps): JSX.Element;
declare function SvgPets(props: IconBaseProps): JSX.Element;
declare function SvgPhp(props: IconBaseProps): JSX.Element;
declare function SvgPictureInPictureAlt(props: IconBaseProps): JSX.Element;
declare function SvgPictureInPicture(props: IconBaseProps): JSX.Element;
declare function SvgPinEnd(props: IconBaseProps): JSX.Element;
declare function SvgPinInvoke(props: IconBaseProps): JSX.Element;
declare function SvgPinch(props: IconBaseProps): JSX.Element;
declare function SvgPlagiarism(props: IconBaseProps): JSX.Element;
declare function SvgPlayForWork(props: IconBaseProps): JSX.Element;
declare function SvgPolymer(props: IconBaseProps): JSX.Element;
declare function SvgPowerSettingsNew(props: IconBaseProps): JSX.Element;
declare function SvgPregnantWoman(props: IconBaseProps): JSX.Element;
declare function SvgPreview(props: IconBaseProps): JSX.Element;
declare function SvgPrint(props: IconBaseProps): JSX.Element;
declare function SvgPrivacyTip(props: IconBaseProps): JSX.Element;
declare function SvgPrivateConnectivity(props: IconBaseProps): JSX.Element;
declare function SvgProductionQuantityLimits(props: IconBaseProps): JSX.Element;
declare function SvgPublishedWithChanges(props: IconBaseProps): JSX.Element;
declare function SvgQueryBuilder(props: IconBaseProps): JSX.Element;
declare function SvgQuestionAnswer(props: IconBaseProps): JSX.Element;
declare function SvgQuestionMark(props: IconBaseProps): JSX.Element;
declare function SvgQuickreply(props: IconBaseProps): JSX.Element;
declare function SvgReceipt(props: IconBaseProps): JSX.Element;
declare function SvgRecordVoiceOver(props: IconBaseProps): JSX.Element;
declare function SvgRedeem(props: IconBaseProps): JSX.Element;
declare function SvgRemoveDone(props: IconBaseProps): JSX.Element;
declare function SvgRemoveShoppingCart(props: IconBaseProps): JSX.Element;
declare function SvgReorder(props: IconBaseProps): JSX.Element;
declare function SvgReportProblem(props: IconBaseProps): JSX.Element;
declare function SvgRequestPage(props: IconBaseProps): JSX.Element;
declare function SvgRestoreFromTrash(props: IconBaseProps): JSX.Element;
declare function SvgRestorePage(props: IconBaseProps): JSX.Element;
declare function SvgRestore(props: IconBaseProps): JSX.Element;
declare function SvgRocketLaunch(props: IconBaseProps): JSX.Element;
declare function SvgRocket(props: IconBaseProps): JSX.Element;
declare function SvgRoom(props: IconBaseProps): JSX.Element;
declare function SvgRoundedCorner(props: IconBaseProps): JSX.Element;
declare function SvgRowing(props: IconBaseProps): JSX.Element;
declare function SvgRule(props: IconBaseProps): JSX.Element;
declare function SvgSatelliteAlt(props: IconBaseProps): JSX.Element;
declare function SvgSavedSearch(props: IconBaseProps): JSX.Element;
declare function SvgSavings(props: IconBaseProps): JSX.Element;
declare function SvgScheduleSend(props: IconBaseProps): JSX.Element;
declare function SvgSchedule(props: IconBaseProps): JSX.Element;
declare function SvgSearchOff(props: IconBaseProps): JSX.Element;
declare function SvgSearch(props: IconBaseProps): JSX.Element;
declare function SvgSegment(props: IconBaseProps): JSX.Element;
declare function SvgSendAndArchive(props: IconBaseProps): JSX.Element;
declare function SvgSensorsOff(props: IconBaseProps): JSX.Element;
declare function SvgSensors(props: IconBaseProps): JSX.Element;
declare function SvgSettingsAccessibility(props: IconBaseProps): JSX.Element;
declare function SvgSettingsApplications(props: IconBaseProps): JSX.Element;
declare function SvgSettingsBackupRestore(props: IconBaseProps): JSX.Element;
declare function SvgSettingsBluetooth(props: IconBaseProps): JSX.Element;
declare function SvgSettingsBrightness(props: IconBaseProps): JSX.Element;
declare function SvgSettingsCell(props: IconBaseProps): JSX.Element;
declare function SvgSettingsEthernet(props: IconBaseProps): JSX.Element;
declare function SvgSettingsInputAntenna(props: IconBaseProps): JSX.Element;
declare function SvgSettingsInputComponent(props: IconBaseProps): JSX.Element;
declare function SvgSettingsInputComposite(props: IconBaseProps): JSX.Element;
declare function SvgSettingsInputHdmi(props: IconBaseProps): JSX.Element;
declare function SvgSettingsInputSvideo(props: IconBaseProps): JSX.Element;
declare function SvgSettingsOverscan(props: IconBaseProps): JSX.Element;
declare function SvgSettingsPhone(props: IconBaseProps): JSX.Element;
declare function SvgSettingsPower(props: IconBaseProps): JSX.Element;
declare function SvgSettingsRemote(props: IconBaseProps): JSX.Element;
declare function SvgSettingsVoice(props: IconBaseProps): JSX.Element;
declare function SvgSettings(props: IconBaseProps): JSX.Element;
declare function SvgShop2(props: IconBaseProps): JSX.Element;
declare function SvgShopTwo(props: IconBaseProps): JSX.Element;
declare function SvgShop(props: IconBaseProps): JSX.Element;
declare function SvgShoppingBag(props: IconBaseProps): JSX.Element;
declare function SvgShoppingBasket(props: IconBaseProps): JSX.Element;
declare function SvgShoppingCartCheckout(props: IconBaseProps): JSX.Element;
declare function SvgShoppingCart(props: IconBaseProps): JSX.Element;
declare function SvgSmartButton(props: IconBaseProps): JSX.Element;
declare function SvgSource(props: IconBaseProps): JSX.Element;
declare function SvgSpaceDashboard(props: IconBaseProps): JSX.Element;
declare function SvgSpatialAudioOff(props: IconBaseProps): JSX.Element;
declare function SvgSpatialAudio(props: IconBaseProps): JSX.Element;
declare function SvgSpatialTracking(props: IconBaseProps): JSX.Element;
declare function SvgSpeakerNotesOff(props: IconBaseProps): JSX.Element;
declare function SvgSpeakerNotes(props: IconBaseProps): JSX.Element;
declare function SvgSpellcheck(props: IconBaseProps): JSX.Element;
declare function SvgStarRate(props: IconBaseProps): JSX.Element;
declare function SvgStars(props: IconBaseProps): JSX.Element;
declare function SvgStickyNote2(props: IconBaseProps): JSX.Element;
declare function SvgStore(props: IconBaseProps): JSX.Element;
declare function SvgSubject(props: IconBaseProps): JSX.Element;
declare function SvgSubtitlesOff(props: IconBaseProps): JSX.Element;
declare function SvgSupervisedUserCircle(props: IconBaseProps): JSX.Element;
declare function SvgSupervisorAccount(props: IconBaseProps): JSX.Element;
declare function SvgSupport(props: IconBaseProps): JSX.Element;
declare function SvgSwapHoriz(props: IconBaseProps): JSX.Element;
declare function SvgSwapHorizontalCircle(props: IconBaseProps): JSX.Element;
declare function SvgSwapVert(props: IconBaseProps): JSX.Element;
declare function SvgSwapVerticalCircle(props: IconBaseProps): JSX.Element;
declare function SvgSwipeDownAlt(props: IconBaseProps): JSX.Element;
declare function SvgSwipeDown(props: IconBaseProps): JSX.Element;
declare function SvgSwipeLeftAlt(props: IconBaseProps): JSX.Element;
declare function SvgSwipeLeft(props: IconBaseProps): JSX.Element;
declare function SvgSwipeRightAlt(props: IconBaseProps): JSX.Element;
declare function SvgSwipeRight(props: IconBaseProps): JSX.Element;
declare function SvgSwipeUpAlt(props: IconBaseProps): JSX.Element;
declare function SvgSwipeUp(props: IconBaseProps): JSX.Element;
declare function SvgSwipeVertical(props: IconBaseProps): JSX.Element;
declare function SvgSwipe(props: IconBaseProps): JSX.Element;
declare function SvgSwitchAccessShortcutAdd(props: IconBaseProps): JSX.Element;
declare function SvgSwitchAccessShortcut(props: IconBaseProps): JSX.Element;
declare function SvgSyncAlt(props: IconBaseProps): JSX.Element;
declare function SvgSystemUpdateAlt(props: IconBaseProps): JSX.Element;
declare function SvgTabUnselected(props: IconBaseProps): JSX.Element;
declare function SvgTab(props: IconBaseProps): JSX.Element;
declare function SvgTableView(props: IconBaseProps): JSX.Element;
declare function SvgTaskAlt(props: IconBaseProps): JSX.Element;
declare function SvgTerminal(props: IconBaseProps): JSX.Element;
declare function SvgTextRotateUp(props: IconBaseProps): JSX.Element;
declare function SvgTextRotateVertical(props: IconBaseProps): JSX.Element;
declare function SvgTextRotationAngledown(props: IconBaseProps): JSX.Element;
declare function SvgTextRotationAngleup(props: IconBaseProps): JSX.Element;
declare function SvgTextRotationDown(props: IconBaseProps): JSX.Element;
declare function SvgTextRotationNone(props: IconBaseProps): JSX.Element;
declare function SvgTheaters(props: IconBaseProps): JSX.Element;
declare function SvgThumbDownOffAlt(props: IconBaseProps): JSX.Element;
declare function SvgThumbDown(props: IconBaseProps): JSX.Element;
declare function SvgThumbUpOffAlt(props: IconBaseProps): JSX.Element;
declare function SvgThumbUp(props: IconBaseProps): JSX.Element;
declare function SvgThumbsUpDown(props: IconBaseProps): JSX.Element;
declare function SvgTimeline(props: IconBaseProps): JSX.Element;
declare function SvgTipsAndUpdates(props: IconBaseProps): JSX.Element;
declare function SvgToc(props: IconBaseProps): JSX.Element;
declare function SvgToday(props: IconBaseProps): JSX.Element;
declare function SvgToken(props: IconBaseProps): JSX.Element;
declare function SvgToll(props: IconBaseProps): JSX.Element;
declare function SvgTouchApp(props: IconBaseProps): JSX.Element;
declare function SvgTour(props: IconBaseProps): JSX.Element;
declare function SvgTrackChanges(props: IconBaseProps): JSX.Element;
declare function SvgTranslate(props: IconBaseProps): JSX.Element;
declare function SvgTrendingDown(props: IconBaseProps): JSX.Element;
declare function SvgTrendingFlat(props: IconBaseProps): JSX.Element;
declare function SvgTrendingUp(props: IconBaseProps): JSX.Element;
declare function SvgTry(props: IconBaseProps): JSX.Element;
declare function SvgTurnedInNot(props: IconBaseProps): JSX.Element;
declare function SvgTurnedIn(props: IconBaseProps): JSX.Element;
declare function SvgUnpublished(props: IconBaseProps): JSX.Element;
declare function SvgUpdateDisabled(props: IconBaseProps): JSX.Element;
declare function SvgUpdate(props: IconBaseProps): JSX.Element;
declare function SvgUpgrade(props: IconBaseProps): JSX.Element;
declare function SvgVerifiedUser(props: IconBaseProps): JSX.Element;
declare function SvgVerified(props: IconBaseProps): JSX.Element;
declare function SvgVerticalSplit(props: IconBaseProps): JSX.Element;
declare function SvgViewAgenda(props: IconBaseProps): JSX.Element;
declare function SvgViewArray(props: IconBaseProps): JSX.Element;
declare function SvgViewCarousel(props: IconBaseProps): JSX.Element;
declare function SvgViewColumn(props: IconBaseProps): JSX.Element;
declare function SvgViewComfyAlt(props: IconBaseProps): JSX.Element;
declare function SvgViewCompactAlt(props: IconBaseProps): JSX.Element;
declare function SvgViewCozy(props: IconBaseProps): JSX.Element;
declare function SvgViewDay(props: IconBaseProps): JSX.Element;
declare function SvgViewHeadline(props: IconBaseProps): JSX.Element;
declare function SvgViewInAr(props: IconBaseProps): JSX.Element;
declare function SvgViewKanban(props: IconBaseProps): JSX.Element;
declare function SvgViewList(props: IconBaseProps): JSX.Element;
declare function SvgViewModule(props: IconBaseProps): JSX.Element;
declare function SvgViewQuilt(props: IconBaseProps): JSX.Element;
declare function SvgViewSidebar(props: IconBaseProps): JSX.Element;
declare function SvgViewStream(props: IconBaseProps): JSX.Element;
declare function SvgViewTimeline(props: IconBaseProps): JSX.Element;
declare function SvgViewWeek(props: IconBaseProps): JSX.Element;
declare function SvgVisibilityOff(props: IconBaseProps): JSX.Element;
declare function SvgVisibility(props: IconBaseProps): JSX.Element;
declare function SvgVoiceOverOff(props: IconBaseProps): JSX.Element;
declare function SvgWatchLater(props: IconBaseProps): JSX.Element;
declare function SvgWebhook(props: IconBaseProps): JSX.Element;
declare function SvgWidthFull(props: IconBaseProps): JSX.Element;
declare function SvgWidthNormal(props: IconBaseProps): JSX.Element;
declare function SvgWidthWide(props: IconBaseProps): JSX.Element;
declare function SvgWifiProtectedSetup(props: IconBaseProps): JSX.Element;
declare function SvgWorkHistory(props: IconBaseProps): JSX.Element;
declare function SvgWorkOff(props: IconBaseProps): JSX.Element;
declare function SvgWorkOutline(props: IconBaseProps): JSX.Element;
declare function SvgWork(props: IconBaseProps): JSX.Element;
declare function SvgWysiwyg(props: IconBaseProps): JSX.Element;
declare function SvgYoutubeSearchedFor(props: IconBaseProps): JSX.Element;
declare function SvgZoomIn(props: IconBaseProps): JSX.Element;
declare function SvgZoomOut(props: IconBaseProps): JSX.Element;
declare function SvgBulkAction(props: IconBaseProps): JSX.Element;

declare function SvgAddAlert(props: IconBaseProps): JSX.Element;
declare function SvgAutoDelete(props: IconBaseProps): JSX.Element;
declare function SvgErrorOutline(props: IconBaseProps): JSX.Element;
declare function SvgError(props: IconBaseProps): JSX.Element;
declare function SvgNotificationImportant(props: IconBaseProps): JSX.Element;
declare function SvgWarningAmber(props: IconBaseProps): JSX.Element;
declare function SvgWarning(props: IconBaseProps): JSX.Element;

declare function Svg10K(props: IconBaseProps): JSX.Element;
declare function Svg1K(props: IconBaseProps): JSX.Element;
declare function Svg2KPlus(props: IconBaseProps): JSX.Element;
declare function Svg3KPlus(props: IconBaseProps): JSX.Element;
declare function Svg3K(props: IconBaseProps): JSX.Element;
declare function Svg4KPlus(props: IconBaseProps): JSX.Element;
declare function Svg4K(props: IconBaseProps): JSX.Element;
declare function Svg5G(props: IconBaseProps): JSX.Element;
declare function Svg6KPlus(props: IconBaseProps): JSX.Element;
declare function Svg6K(props: IconBaseProps): JSX.Element;
declare function Svg7KPlus(props: IconBaseProps): JSX.Element;
declare function Svg7K(props: IconBaseProps): JSX.Element;
declare function Svg8KPlus(props: IconBaseProps): JSX.Element;
declare function Svg8K(props: IconBaseProps): JSX.Element;
declare function SvgAddToQueue(props: IconBaseProps): JSX.Element;
declare function SvgAirplay(props: IconBaseProps): JSX.Element;
declare function SvgAlbum(props: IconBaseProps): JSX.Element;
declare function SvgArtTrack(props: IconBaseProps): JSX.Element;
declare function SvgAudioFile(props: IconBaseProps): JSX.Element;
declare function SvgAvTimer(props: IconBaseProps): JSX.Element;
declare function SvgClosedCaptionDisabled(props: IconBaseProps): JSX.Element;
declare function SvgClosedCaptionOff(props: IconBaseProps): JSX.Element;
declare function SvgClosedCaption(props: IconBaseProps): JSX.Element;
declare function SvgControlCamera(props: IconBaseProps): JSX.Element;
declare function SvgEqualizer(props: IconBaseProps): JSX.Element;
declare function SvgExplicit(props: IconBaseProps): JSX.Element;
declare function SvgFeaturedPlayList(props: IconBaseProps): JSX.Element;
declare function SvgFeaturedVideo(props: IconBaseProps): JSX.Element;
declare function SvgFiberDvr(props: IconBaseProps): JSX.Element;
declare function SvgFiberManualRecord(props: IconBaseProps): JSX.Element;
declare function SvgFiberNew(props: IconBaseProps): JSX.Element;
declare function SvgFiberPin(props: IconBaseProps): JSX.Element;
declare function SvgForward30(props: IconBaseProps): JSX.Element;
declare function SvgForward5(props: IconBaseProps): JSX.Element;
declare function SvgGames(props: IconBaseProps): JSX.Element;
declare function SvgHd(props: IconBaseProps): JSX.Element;
declare function SvgHearingDisabled(props: IconBaseProps): JSX.Element;
declare function SvgHearing(props: IconBaseProps): JSX.Element;
declare function SvgLibraryAddCheck(props: IconBaseProps): JSX.Element;
declare function SvgLibraryAdd(props: IconBaseProps): JSX.Element;
declare function SvgLibraryBooks(props: IconBaseProps): JSX.Element;
declare function SvgLibraryMusic(props: IconBaseProps): JSX.Element;
declare function SvgLoop(props: IconBaseProps): JSX.Element;
declare function SvgLyrics(props: IconBaseProps): JSX.Element;
declare function SvgMicOff(props: IconBaseProps): JSX.Element;
declare function SvgMissedVideoCall(props: IconBaseProps): JSX.Element;
declare function SvgMovie(props: IconBaseProps): JSX.Element;
declare function SvgMusicVideo(props: IconBaseProps): JSX.Element;
declare function SvgNewReleases(props: IconBaseProps): JSX.Element;
declare function SvgNotInterested(props: IconBaseProps): JSX.Element;
declare function SvgPauseCircleFilled(props: IconBaseProps): JSX.Element;
declare function SvgPauseCircleOutline(props: IconBaseProps): JSX.Element;
declare function SvgPauseCircle(props: IconBaseProps): JSX.Element;
declare function SvgPlayArrow(props: IconBaseProps): JSX.Element;
declare function SvgPlayCircleFilled(props: IconBaseProps): JSX.Element;
declare function SvgPlayCircle(props: IconBaseProps): JSX.Element;
declare function SvgPlaylistAddCheckCircle(props: IconBaseProps): JSX.Element;
declare function SvgPlaylistAddCheck(props: IconBaseProps): JSX.Element;
declare function SvgPlaylistAddCircle(props: IconBaseProps): JSX.Element;
declare function SvgPlaylistAdd(props: IconBaseProps): JSX.Element;
declare function SvgPlaylistPlay(props: IconBaseProps): JSX.Element;
declare function SvgPlaylistRemove(props: IconBaseProps): JSX.Element;
declare function SvgQueuePlayNext(props: IconBaseProps): JSX.Element;
declare function SvgRadio(props: IconBaseProps): JSX.Element;
declare function SvgRecentActors(props: IconBaseProps): JSX.Element;
declare function SvgRemoveFromQueue(props: IconBaseProps): JSX.Element;
declare function SvgRepeatOn(props: IconBaseProps): JSX.Element;
declare function SvgRepeat(props: IconBaseProps): JSX.Element;
declare function SvgReplay10(props: IconBaseProps): JSX.Element;
declare function SvgReplay30(props: IconBaseProps): JSX.Element;
declare function SvgReplay5(props: IconBaseProps): JSX.Element;
declare function SvgReplayCircleFilled(props: IconBaseProps): JSX.Element;
declare function SvgReplay(props: IconBaseProps): JSX.Element;
declare function SvgSd(props: IconBaseProps): JSX.Element;
declare function SvgSkipNext(props: IconBaseProps): JSX.Element;
declare function SvgSkipPrevious(props: IconBaseProps): JSX.Element;
declare function SvgSlowMotionVideo(props: IconBaseProps): JSX.Element;
declare function SvgSnooze(props: IconBaseProps): JSX.Element;
declare function SvgSortByAlpha(props: IconBaseProps): JSX.Element;
declare function SvgSpeed(props: IconBaseProps): JSX.Element;
declare function SvgSubscriptions(props: IconBaseProps): JSX.Element;
declare function SvgSubtitles(props: IconBaseProps): JSX.Element;
declare function SvgSurroundSound(props: IconBaseProps): JSX.Element;
declare function SvgVideoCall(props: IconBaseProps): JSX.Element;
declare function SvgVideoFile(props: IconBaseProps): JSX.Element;
declare function SvgVideoLabel(props: IconBaseProps): JSX.Element;
declare function SvgVideocamOff(props: IconBaseProps): JSX.Element;
declare function SvgVideocam(props: IconBaseProps): JSX.Element;
declare function SvgVolumeDown(props: IconBaseProps): JSX.Element;
declare function SvgVolumeMute(props: IconBaseProps): JSX.Element;
declare function SvgVolumeOff(props: IconBaseProps): JSX.Element;
declare function SvgVolumeUp(props: IconBaseProps): JSX.Element;
declare function SvgWebAssetOff(props: IconBaseProps): JSX.Element;

declare function Svg3P(props: IconBaseProps): JSX.Element;
declare function SvgAddIcCall(props: IconBaseProps): JSX.Element;
declare function SvgAlternateEmail(props: IconBaseProps): JSX.Element;
declare function SvgAppRegistration(props: IconBaseProps): JSX.Element;
declare function SvgBusiness(props: IconBaseProps): JSX.Element;
declare function SvgCallEnd(props: IconBaseProps): JSX.Element;
declare function SvgCallMade(props: IconBaseProps): JSX.Element;
declare function SvgCallMerge(props: IconBaseProps): JSX.Element;
declare function SvgCallMissedOutgoing(props: IconBaseProps): JSX.Element;
declare function SvgCallMissed(props: IconBaseProps): JSX.Element;
declare function SvgCallReceived(props: IconBaseProps): JSX.Element;
declare function SvgCallSplit(props: IconBaseProps): JSX.Element;
declare function SvgCall(props: IconBaseProps): JSX.Element;
declare function SvgCancelPresentation(props: IconBaseProps): JSX.Element;
declare function SvgCellTower(props: IconBaseProps): JSX.Element;
declare function SvgCellWifi(props: IconBaseProps): JSX.Element;
declare function SvgChatBubbleOutline(props: IconBaseProps): JSX.Element;
declare function SvgChatBubble(props: IconBaseProps): JSX.Element;
declare function SvgChat(props: IconBaseProps): JSX.Element;
declare function SvgClearAll(props: IconBaseProps): JSX.Element;
declare function SvgCoPresent(props: IconBaseProps): JSX.Element;
declare function SvgComment(props: IconBaseProps): JSX.Element;
declare function SvgCommentsDisabled(props: IconBaseProps): JSX.Element;
declare function SvgContactMail(props: IconBaseProps): JSX.Element;
declare function SvgContactPhone(props: IconBaseProps): JSX.Element;
declare function SvgContacts(props: IconBaseProps): JSX.Element;
declare function SvgDesktopAccessDisabled(props: IconBaseProps): JSX.Element;
declare function SvgDialerSip(props: IconBaseProps): JSX.Element;
declare function SvgDialpad(props: IconBaseProps): JSX.Element;
declare function SvgDocumentScanner(props: IconBaseProps): JSX.Element;
declare function SvgDomainDisabled(props: IconBaseProps): JSX.Element;
declare function SvgDomainVerification(props: IconBaseProps): JSX.Element;
declare function SvgDuo(props: IconBaseProps): JSX.Element;
declare function SvgEmail(props: IconBaseProps): JSX.Element;
declare function SvgForum(props: IconBaseProps): JSX.Element;
declare function SvgForwardToInbox(props: IconBaseProps): JSX.Element;
declare function SvgHourglassBottom(props: IconBaseProps): JSX.Element;
declare function SvgHourglassTop(props: IconBaseProps): JSX.Element;
declare function SvgHub(props: IconBaseProps): JSX.Element;
declare function SvgImportContacts(props: IconBaseProps): JSX.Element;
declare function SvgImportExport(props: IconBaseProps): JSX.Element;
declare function SvgInvertColorsOff(props: IconBaseProps): JSX.Element;
declare function SvgKeyOff(props: IconBaseProps): JSX.Element;
declare function SvgKey(props: IconBaseProps): JSX.Element;
declare function SvgListAlt(props: IconBaseProps): JSX.Element;
declare function SvgLiveHelp(props: IconBaseProps): JSX.Element;
declare function SvgLocationOff(props: IconBaseProps): JSX.Element;
declare function SvgLocationOn(props: IconBaseProps): JSX.Element;
declare function SvgMailLock(props: IconBaseProps): JSX.Element;
declare function SvgMailOutline(props: IconBaseProps): JSX.Element;
declare function SvgMarkChatRead(props: IconBaseProps): JSX.Element;
declare function SvgMarkChatUnread(props: IconBaseProps): JSX.Element;
declare function SvgMarkEmailRead(props: IconBaseProps): JSX.Element;
declare function SvgMarkEmailUnread(props: IconBaseProps): JSX.Element;
declare function SvgMarkUnreadChatAlt(props: IconBaseProps): JSX.Element;
declare function SvgMessage(props: IconBaseProps): JSX.Element;
declare function SvgMobileScreenShare(props: IconBaseProps): JSX.Element;
declare function SvgMoreTime(props: IconBaseProps): JSX.Element;
declare function SvgNat(props: IconBaseProps): JSX.Element;
declare function SvgNoSim(props: IconBaseProps): JSX.Element;
declare function SvgPausePresentation(props: IconBaseProps): JSX.Element;
declare function SvgPersonAddDisabled(props: IconBaseProps): JSX.Element;
declare function SvgPersonSearch(props: IconBaseProps): JSX.Element;
declare function SvgPhoneDisabled(props: IconBaseProps): JSX.Element;
declare function SvgPhoneEnabled(props: IconBaseProps): JSX.Element;
declare function SvgPhone(props: IconBaseProps): JSX.Element;
declare function SvgPhonelinkErase(props: IconBaseProps): JSX.Element;
declare function SvgPhonelinkLock(props: IconBaseProps): JSX.Element;
declare function SvgPhonelinkRing(props: IconBaseProps): JSX.Element;
declare function SvgPhonelinkSetup(props: IconBaseProps): JSX.Element;
declare function SvgPortableWifiOff(props: IconBaseProps): JSX.Element;
declare function SvgPresentToAll(props: IconBaseProps): JSX.Element;
declare function SvgPrintDisabled(props: IconBaseProps): JSX.Element;
declare function SvgQrCode2(props: IconBaseProps): JSX.Element;
declare function SvgQrCodeScanner(props: IconBaseProps): JSX.Element;
declare function SvgQrCode(props: IconBaseProps): JSX.Element;
declare function SvgReadMore(props: IconBaseProps): JSX.Element;
declare function SvgRingVolume(props: IconBaseProps): JSX.Element;
declare function SvgRssFeed(props: IconBaseProps): JSX.Element;
declare function SvgRtt(props: IconBaseProps): JSX.Element;
declare function SvgScreenShare(props: IconBaseProps): JSX.Element;
declare function SvgSendTimeExtension(props: IconBaseProps): JSX.Element;
declare function SvgSentimentSatisfiedAlt(props: IconBaseProps): JSX.Element;
declare function SvgSip(props: IconBaseProps): JSX.Element;
declare function SvgSpeakerPhone(props: IconBaseProps): JSX.Element;
declare function SvgSpoke(props: IconBaseProps): JSX.Element;
declare function SvgStayCurrentLandscape(props: IconBaseProps): JSX.Element;
declare function SvgStayCurrentPortrait(props: IconBaseProps): JSX.Element;
declare function SvgStayPrimaryLandscape(props: IconBaseProps): JSX.Element;
declare function SvgStayPrimaryPortrait(props: IconBaseProps): JSX.Element;
declare function SvgStopScreenShare(props: IconBaseProps): JSX.Element;
declare function SvgSwapCalls(props: IconBaseProps): JSX.Element;
declare function SvgTextsms(props: IconBaseProps): JSX.Element;
declare function SvgUnsubscribe(props: IconBaseProps): JSX.Element;
declare function SvgVoicemail(props: IconBaseProps): JSX.Element;
declare function SvgVpnKeyOff(props: IconBaseProps): JSX.Element;
declare function SvgVpnKey(props: IconBaseProps): JSX.Element;
declare function SvgWifiCalling(props: IconBaseProps): JSX.Element;

declare function SvgAddBox(props: IconBaseProps): JSX.Element;
declare function SvgAddCircleOutline(props: IconBaseProps): JSX.Element;
declare function SvgAddCircle(props: IconBaseProps): JSX.Element;
declare function SvgAddLink(props: IconBaseProps): JSX.Element;
declare function SvgAdd(props: IconBaseProps): JSX.Element;
declare function SvgArchive(props: IconBaseProps): JSX.Element;
declare function SvgAttribution(props: IconBaseProps): JSX.Element;
declare function SvgBackspace(props: IconBaseProps): JSX.Element;
declare function SvgBallot(props: IconBaseProps): JSX.Element;
declare function SvgBiotech(props: IconBaseProps): JSX.Element;
declare function SvgBlock(props: IconBaseProps): JSX.Element;
declare function SvgBolt(props: IconBaseProps): JSX.Element;
declare function SvgCalculate(props: IconBaseProps): JSX.Element;
declare function SvgChangeCircle(props: IconBaseProps): JSX.Element;
declare function SvgClear(props: IconBaseProps): JSX.Element;
declare function SvgContentCopy(props: IconBaseProps): JSX.Element;
declare function SvgContentCut(props: IconBaseProps): JSX.Element;
declare function SvgContentPasteGo(props: IconBaseProps): JSX.Element;
declare function SvgContentPasteOff(props: IconBaseProps): JSX.Element;
declare function SvgContentPasteSearch(props: IconBaseProps): JSX.Element;
declare function SvgContentPaste(props: IconBaseProps): JSX.Element;
declare function SvgCopyAll(props: IconBaseProps): JSX.Element;
declare function SvgCreate(props: IconBaseProps): JSX.Element;
declare function SvgDeleteSweep(props: IconBaseProps): JSX.Element;
declare function SvgDeselect(props: IconBaseProps): JSX.Element;
declare function SvgDrafts(props: IconBaseProps): JSX.Element;
declare function SvgDynamicFeed(props: IconBaseProps): JSX.Element;
declare function SvgFileCopy(props: IconBaseProps): JSX.Element;
declare function SvgFilterListOff(props: IconBaseProps): JSX.Element;
declare function SvgFilterList(props: IconBaseProps): JSX.Element;
declare function SvgFlagCircle(props: IconBaseProps): JSX.Element;
declare function SvgFlag(props: IconBaseProps): JSX.Element;
declare function SvgFontDownloadOff(props: IconBaseProps): JSX.Element;
declare function SvgFontDownload(props: IconBaseProps): JSX.Element;
declare function SvgForward(props: IconBaseProps): JSX.Element;
declare function SvgGesture(props: IconBaseProps): JSX.Element;
declare function SvgHowToReg(props: IconBaseProps): JSX.Element;
declare function SvgHowToVote(props: IconBaseProps): JSX.Element;
declare function SvgInbox(props: IconBaseProps): JSX.Element;
declare function SvgInsights(props: IconBaseProps): JSX.Element;
declare function SvgInventory2(props: IconBaseProps): JSX.Element;
declare function SvgInventory(props: IconBaseProps): JSX.Element;
declare function SvgLinkOff(props: IconBaseProps): JSX.Element;
declare function SvgLink(props: IconBaseProps): JSX.Element;
declare function SvgLowPriority(props: IconBaseProps): JSX.Element;
declare function SvgMail(props: IconBaseProps): JSX.Element;
declare function SvgMarkunread(props: IconBaseProps): JSX.Element;
declare function SvgMoveToInbox(props: IconBaseProps): JSX.Element;
declare function SvgNextWeek(props: IconBaseProps): JSX.Element;
declare function SvgOutlinedFlag(props: IconBaseProps): JSX.Element;
declare function SvgPolicy(props: IconBaseProps): JSX.Element;
declare function SvgPushPin(props: IconBaseProps): JSX.Element;
declare function SvgRedo(props: IconBaseProps): JSX.Element;
declare function SvgRemoveCircleOutline(props: IconBaseProps): JSX.Element;
declare function SvgRemoveCircle(props: IconBaseProps): JSX.Element;
declare function SvgRemove(props: IconBaseProps): JSX.Element;
declare function SvgReplyAll(props: IconBaseProps): JSX.Element;
declare function SvgReply(props: IconBaseProps): JSX.Element;
declare function SvgReportGmailerrorred(props: IconBaseProps): JSX.Element;
declare function SvgReportOff(props: IconBaseProps): JSX.Element;
declare function SvgReport(props: IconBaseProps): JSX.Element;
declare function SvgSaveAlt(props: IconBaseProps): JSX.Element;
declare function SvgSaveAs(props: IconBaseProps): JSX.Element;
declare function SvgSave(props: IconBaseProps): JSX.Element;
declare function SvgSelectAll(props: IconBaseProps): JSX.Element;
declare function SvgSend(props: IconBaseProps): JSX.Element;
declare function SvgShield(props: IconBaseProps): JSX.Element;
declare function SvgSort(props: IconBaseProps): JSX.Element;
declare function SvgSquareFoot(props: IconBaseProps): JSX.Element;
declare function SvgStackedBarChart(props: IconBaseProps): JSX.Element;
declare function SvgStream(props: IconBaseProps): JSX.Element;
declare function SvgTag(props: IconBaseProps): JSX.Element;
declare function SvgTextFormat(props: IconBaseProps): JSX.Element;
declare function SvgUnarchive(props: IconBaseProps): JSX.Element;
declare function SvgUndo(props: IconBaseProps): JSX.Element;
declare function SvgWaves(props: IconBaseProps): JSX.Element;
declare function SvgWeekend(props: IconBaseProps): JSX.Element;
declare function SvgWhereToVote(props: IconBaseProps): JSX.Element;

declare function Svg1XMobiledata(props: IconBaseProps): JSX.Element;
declare function Svg30Fps(props: IconBaseProps): JSX.Element;
declare function Svg3GMobiledata(props: IconBaseProps): JSX.Element;
declare function Svg4GMobiledata(props: IconBaseProps): JSX.Element;
declare function Svg4GPlusMobiledata(props: IconBaseProps): JSX.Element;
declare function Svg60Fps(props: IconBaseProps): JSX.Element;
declare function SvgAccessAlarm(props: IconBaseProps): JSX.Element;
declare function SvgAccessAlarms(props: IconBaseProps): JSX.Element;
declare function SvgAccessTimeFilled(props: IconBaseProps): JSX.Element;
declare function SvgAccessTime(props: IconBaseProps): JSX.Element;
declare function SvgAdUnits(props: IconBaseProps): JSX.Element;
declare function SvgAddAlarm(props: IconBaseProps): JSX.Element;
declare function SvgAddToHomeScreen(props: IconBaseProps): JSX.Element;
declare function SvgAir(props: IconBaseProps): JSX.Element;
declare function SvgAirplaneTicket(props: IconBaseProps): JSX.Element;
declare function SvgAirplanemodeActive(props: IconBaseProps): JSX.Element;
declare function SvgAirplanemodeInactive(props: IconBaseProps): JSX.Element;
declare function SvgAod(props: IconBaseProps): JSX.Element;
declare function SvgBattery0Bar(props: IconBaseProps): JSX.Element;
declare function SvgBattery1Bar(props: IconBaseProps): JSX.Element;
declare function SvgBattery2Bar(props: IconBaseProps): JSX.Element;
declare function SvgBattery3Bar(props: IconBaseProps): JSX.Element;
declare function SvgBattery4Bar(props: IconBaseProps): JSX.Element;
declare function SvgBattery5Bar(props: IconBaseProps): JSX.Element;
declare function SvgBattery6Bar(props: IconBaseProps): JSX.Element;
declare function SvgBatteryAlert(props: IconBaseProps): JSX.Element;
declare function SvgBatteryChargingFull(props: IconBaseProps): JSX.Element;
declare function SvgBatteryFull(props: IconBaseProps): JSX.Element;
declare function SvgBatterySaver(props: IconBaseProps): JSX.Element;
declare function SvgBatteryStd(props: IconBaseProps): JSX.Element;
declare function SvgBatteryUnknown(props: IconBaseProps): JSX.Element;
declare function SvgBloodtype(props: IconBaseProps): JSX.Element;
declare function SvgBluetoothConnected(props: IconBaseProps): JSX.Element;
declare function SvgBluetoothDisabled(props: IconBaseProps): JSX.Element;
declare function SvgBluetoothDrive(props: IconBaseProps): JSX.Element;
declare function SvgBluetoothSearching(props: IconBaseProps): JSX.Element;
declare function SvgBluetooth(props: IconBaseProps): JSX.Element;
declare function SvgBrightnessAuto(props: IconBaseProps): JSX.Element;
declare function SvgBrightnessHigh(props: IconBaseProps): JSX.Element;
declare function SvgBrightnessLow(props: IconBaseProps): JSX.Element;
declare function SvgBrightnessMedium(props: IconBaseProps): JSX.Element;
declare function SvgCable(props: IconBaseProps): JSX.Element;
declare function SvgCameraswitch(props: IconBaseProps): JSX.Element;
declare function SvgCreditScore(props: IconBaseProps): JSX.Element;
declare function SvgDarkMode(props: IconBaseProps): JSX.Element;
declare function SvgDataSaverOff(props: IconBaseProps): JSX.Element;
declare function SvgDataSaverOn(props: IconBaseProps): JSX.Element;
declare function SvgDataUsage(props: IconBaseProps): JSX.Element;
declare function SvgDeveloperMode(props: IconBaseProps): JSX.Element;
declare function SvgDeviceThermostat(props: IconBaseProps): JSX.Element;
declare function SvgDevicesFold(props: IconBaseProps): JSX.Element;
declare function SvgDevices(props: IconBaseProps): JSX.Element;
declare function SvgDiscount(props: IconBaseProps): JSX.Element;
declare function SvgDoNotDisturbOnTotalSilence(
  props: IconBaseProps
): JSX.Element;
declare function SvgDvr(props: IconBaseProps): JSX.Element;
declare function SvgEMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgEdgesensorHigh(props: IconBaseProps): JSX.Element;
declare function SvgEdgesensorLow(props: IconBaseProps): JSX.Element;
declare function SvgFlashlightOff(props: IconBaseProps): JSX.Element;
declare function SvgFlashlightOn(props: IconBaseProps): JSX.Element;
declare function SvgFlourescent(props: IconBaseProps): JSX.Element;
declare function SvgFmdBad(props: IconBaseProps): JSX.Element;
declare function SvgFmdGood(props: IconBaseProps): JSX.Element;
declare function SvgGMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgGppBad(props: IconBaseProps): JSX.Element;
declare function SvgGppGood(props: IconBaseProps): JSX.Element;
declare function SvgGppMaybe(props: IconBaseProps): JSX.Element;
declare function SvgGpsFixed(props: IconBaseProps): JSX.Element;
declare function SvgGpsNotFixed(props: IconBaseProps): JSX.Element;
declare function SvgGpsOff(props: IconBaseProps): JSX.Element;
declare function SvgGraphicEq(props: IconBaseProps): JSX.Element;
declare function SvgGrid3X3(props: IconBaseProps): JSX.Element;
declare function SvgGrid4X4(props: IconBaseProps): JSX.Element;
declare function SvgGridGoldenratio(props: IconBaseProps): JSX.Element;
declare function SvgHMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgHPlusMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgHdrAutoSelect(props: IconBaseProps): JSX.Element;
declare function SvgHdrAuto(props: IconBaseProps): JSX.Element;
declare function SvgHdrOffSelect(props: IconBaseProps): JSX.Element;
declare function SvgHdrOnSelect(props: IconBaseProps): JSX.Element;
declare function SvgLan(props: IconBaseProps): JSX.Element;
declare function SvgLensBlur(props: IconBaseProps): JSX.Element;
declare function SvgLightMode(props: IconBaseProps): JSX.Element;
declare function SvgLocationDisabled(props: IconBaseProps): JSX.Element;
declare function SvgLocationSearching(props: IconBaseProps): JSX.Element;
declare function SvgLteMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgLtePlusMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgMediaBluetoothOff(props: IconBaseProps): JSX.Element;
declare function SvgMediaBluetoothOn(props: IconBaseProps): JSX.Element;
declare function SvgMedicationLiquid(props: IconBaseProps): JSX.Element;
declare function SvgMedication(props: IconBaseProps): JSX.Element;
declare function SvgMobileFriendly(props: IconBaseProps): JSX.Element;
declare function SvgMobileOff(props: IconBaseProps): JSX.Element;
declare function SvgMobiledataOff(props: IconBaseProps): JSX.Element;
declare function SvgModeNight(props: IconBaseProps): JSX.Element;
declare function SvgModeStandby(props: IconBaseProps): JSX.Element;
declare function SvgMonitorHeart(props: IconBaseProps): JSX.Element;
declare function SvgMonitorWeight(props: IconBaseProps): JSX.Element;
declare function SvgNearbyError(props: IconBaseProps): JSX.Element;
declare function SvgNearbyOff(props: IconBaseProps): JSX.Element;
declare function SvgNetworkCell(props: IconBaseProps): JSX.Element;
declare function SvgNetworkWifi1Bar(props: IconBaseProps): JSX.Element;
declare function SvgNetworkWifi2Bar(props: IconBaseProps): JSX.Element;
declare function SvgNetworkWifi3Bar(props: IconBaseProps): JSX.Element;
declare function SvgNetworkWifi(props: IconBaseProps): JSX.Element;
declare function SvgNfc(props: IconBaseProps): JSX.Element;
declare function SvgNightlight(props: IconBaseProps): JSX.Element;
declare function SvgNoteAlt(props: IconBaseProps): JSX.Element;
declare function SvgPassword(props: IconBaseProps): JSX.Element;
declare function SvgPattern(props: IconBaseProps): JSX.Element;
declare function SvgPhishing(props: IconBaseProps): JSX.Element;
declare function SvgPin(props: IconBaseProps): JSX.Element;
declare function SvgPlayLesson(props: IconBaseProps): JSX.Element;
declare function SvgPriceChange(props: IconBaseProps): JSX.Element;
declare function SvgPriceCheck(props: IconBaseProps): JSX.Element;
declare function SvgPunchClock(props: IconBaseProps): JSX.Element;
declare function SvgQuiz(props: IconBaseProps): JSX.Element;
declare function SvgRMobiledata(props: IconBaseProps): JSX.Element;
declare function SvgRadar(props: IconBaseProps): JSX.Element;
declare function SvgRememberMe(props: IconBaseProps): JSX.Element;
declare function SvgResetTv(props: IconBaseProps): JSX.Element;
declare function SvgRestartAlt(props: IconBaseProps): JSX.Element;
declare function SvgReviews(props: IconBaseProps): JSX.Element;
declare function SvgRsvp(props: IconBaseProps): JSX.Element;
declare function SvgScreenLockLandscape(props: IconBaseProps): JSX.Element;
declare function SvgScreenLockPortrait(props: IconBaseProps): JSX.Element;
declare function SvgScreenLockRotation(props: IconBaseProps): JSX.Element;
declare function SvgScreenRotation(props: IconBaseProps): JSX.Element;
declare function SvgScreenSearchDesktop(props: IconBaseProps): JSX.Element;
declare function SvgScreenshotMonitor(props: IconBaseProps): JSX.Element;
declare function SvgScreenshot(props: IconBaseProps): JSX.Element;
declare function SvgSdStorage(props: IconBaseProps): JSX.Element;
declare function SvgSecurityUpdateGood(props: IconBaseProps): JSX.Element;
declare function SvgSecurityUpdateWarning(props: IconBaseProps): JSX.Element;
declare function SvgSecurityUpdate(props: IconBaseProps): JSX.Element;
declare function SvgSell(props: IconBaseProps): JSX.Element;
declare function SvgSendToMobile(props: IconBaseProps): JSX.Element;
declare function SvgSettingsSuggest(props: IconBaseProps): JSX.Element;
declare function SvgSettingsSystemDaydream(props: IconBaseProps): JSX.Element;
declare function SvgShareLocation(props: IconBaseProps): JSX.Element;
declare function SvgShortcut(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellular0Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellular4Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularAlt1Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularAlt2Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularAlt(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularConnectedNoInternet0Bar(
  props: IconBaseProps
): JSX.Element;
declare function SvgSignalCellularConnectedNoInternet4Bar(
  props: IconBaseProps
): JSX.Element;
declare function SvgSignalCellularNoSim(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularNodata(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularNull(props: IconBaseProps): JSX.Element;
declare function SvgSignalCellularOff(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifi0Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifi4BarLock(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifi4Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifiBad(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifiConnectedNoInternet4(
  props: IconBaseProps
): JSX.Element;
declare function SvgSignalWifiOff(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifiStatusbar4Bar(props: IconBaseProps): JSX.Element;
declare function SvgSignalWifiStatusbarConnectedNoInternet4(
  props: IconBaseProps
): JSX.Element;
declare function SvgSignalWifiStatusbarNull(props: IconBaseProps): JSX.Element;
declare function SvgSimCardDownload(props: IconBaseProps): JSX.Element;
declare function SvgSplitscreen(props: IconBaseProps): JSX.Element;
declare function SvgSportsScore(props: IconBaseProps): JSX.Element;
declare function SvgSsidChart(props: IconBaseProps): JSX.Element;
declare function SvgStorage(props: IconBaseProps): JSX.Element;
declare function SvgStorm(props: IconBaseProps): JSX.Element;
declare function SvgSummarize(props: IconBaseProps): JSX.Element;
declare function SvgSystemSecurityUpdateGood(props: IconBaseProps): JSX.Element;
declare function SvgSystemSecurityUpdateWarning(
  props: IconBaseProps
): JSX.Element;
declare function SvgSystemSecurityUpdate(props: IconBaseProps): JSX.Element;
declare function SvgTask(props: IconBaseProps): JSX.Element;
declare function SvgThermostat(props: IconBaseProps): JSX.Element;
declare function SvgTimer10Select(props: IconBaseProps): JSX.Element;
declare function SvgTimer3Select(props: IconBaseProps): JSX.Element;
declare function SvgTungsten(props: IconBaseProps): JSX.Element;
declare function SvgUsbOff(props: IconBaseProps): JSX.Element;
declare function SvgUsb(props: IconBaseProps): JSX.Element;
declare function SvgWallpaper(props: IconBaseProps): JSX.Element;
declare function SvgWater(props: IconBaseProps): JSX.Element;
declare function SvgWidgets(props: IconBaseProps): JSX.Element;
declare function SvgWifi1Bar(props: IconBaseProps): JSX.Element;
declare function SvgWifi2Bar(props: IconBaseProps): JSX.Element;
declare function SvgWifiCalling3(props: IconBaseProps): JSX.Element;
declare function SvgWifiChannel(props: IconBaseProps): JSX.Element;
declare function SvgWifiFind(props: IconBaseProps): JSX.Element;
declare function SvgWifiLock(props: IconBaseProps): JSX.Element;
declare function SvgWifiPassword(props: IconBaseProps): JSX.Element;
declare function SvgWifiTetheringError(props: IconBaseProps): JSX.Element;
declare function SvgWifiTetheringOff(props: IconBaseProps): JSX.Element;
declare function SvgWifiTethering(props: IconBaseProps): JSX.Element;

declare function SvgAddChart(props: IconBaseProps): JSX.Element;
declare function SvgAddComment(props: IconBaseProps): JSX.Element;
declare function SvgAlignHorizontalCenter(props: IconBaseProps): JSX.Element;
declare function SvgAlignHorizontalLeft(props: IconBaseProps): JSX.Element;
declare function SvgAlignHorizontalRight(props: IconBaseProps): JSX.Element;
declare function SvgAlignVerticalBottom(props: IconBaseProps): JSX.Element;
declare function SvgAlignVerticalCenter(props: IconBaseProps): JSX.Element;
declare function SvgAlignVerticalTop(props: IconBaseProps): JSX.Element;
declare function SvgAreaChart(props: IconBaseProps): JSX.Element;
declare function SvgAttachFile(props: IconBaseProps): JSX.Element;
declare function SvgAttachMoney(props: IconBaseProps): JSX.Element;
declare function SvgAutoGraph(props: IconBaseProps): JSX.Element;
declare function SvgBarChart(props: IconBaseProps): JSX.Element;
declare function SvgBorderAll(props: IconBaseProps): JSX.Element;
declare function SvgBorderBottom(props: IconBaseProps): JSX.Element;
declare function SvgBorderClear(props: IconBaseProps): JSX.Element;
declare function SvgBorderColor(props: IconBaseProps): JSX.Element;
declare function SvgBorderHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgBorderInner(props: IconBaseProps): JSX.Element;
declare function SvgBorderLeft(props: IconBaseProps): JSX.Element;
declare function SvgBorderOuter(props: IconBaseProps): JSX.Element;
declare function SvgBorderRight(props: IconBaseProps): JSX.Element;
declare function SvgBorderStyle(props: IconBaseProps): JSX.Element;
declare function SvgBorderTop(props: IconBaseProps): JSX.Element;
declare function SvgBorderVertical(props: IconBaseProps): JSX.Element;
declare function SvgBubbleChart(props: IconBaseProps): JSX.Element;
declare function SvgCandlestickChart(props: IconBaseProps): JSX.Element;
declare function SvgChecklistRtl(props: IconBaseProps): JSX.Element;
declare function SvgChecklist(props: IconBaseProps): JSX.Element;
declare function SvgDataArray(props: IconBaseProps): JSX.Element;
declare function SvgDataObject(props: IconBaseProps): JSX.Element;
declare function SvgDragHandle(props: IconBaseProps): JSX.Element;
declare function SvgDraw(props: IconBaseProps): JSX.Element;
declare function SvgEditNote(props: IconBaseProps): JSX.Element;
declare function SvgFormatAlignCenter(props: IconBaseProps): JSX.Element;
declare function SvgFormatAlignJustify(props: IconBaseProps): JSX.Element;
declare function SvgFormatAlignLeft(props: IconBaseProps): JSX.Element;
declare function SvgFormatAlignRight(props: IconBaseProps): JSX.Element;
declare function SvgFormatBold(props: IconBaseProps): JSX.Element;
declare function SvgFormatClear(props: IconBaseProps): JSX.Element;
declare function SvgFormatColorFill(props: IconBaseProps): JSX.Element;
declare function SvgFormatColorReset(props: IconBaseProps): JSX.Element;
declare function SvgFormatColorText(props: IconBaseProps): JSX.Element;
declare function SvgFormatIndentDecrease(props: IconBaseProps): JSX.Element;
declare function SvgFormatIndentIncrease(props: IconBaseProps): JSX.Element;
declare function SvgFormatItalic(props: IconBaseProps): JSX.Element;
declare function SvgFormatLineSpacing(props: IconBaseProps): JSX.Element;
declare function SvgFormatListBulleted(props: IconBaseProps): JSX.Element;
declare function SvgFormatListNumberedRtl(props: IconBaseProps): JSX.Element;
declare function SvgFormatListNumbered(props: IconBaseProps): JSX.Element;
declare function SvgFormatPaint(props: IconBaseProps): JSX.Element;
declare function SvgFormatQuote(props: IconBaseProps): JSX.Element;
declare function SvgFormatShapes(props: IconBaseProps): JSX.Element;
declare function SvgFormatSize(props: IconBaseProps): JSX.Element;
declare function SvgFormatStrikethrough(props: IconBaseProps): JSX.Element;
declare function SvgFormatTextdirectionLToR(props: IconBaseProps): JSX.Element;
declare function SvgFormatTextdirectionRToL(props: IconBaseProps): JSX.Element;
declare function SvgFormatUnderlined(props: IconBaseProps): JSX.Element;
declare function SvgFunctions(props: IconBaseProps): JSX.Element;
declare function SvgHeight(props: IconBaseProps): JSX.Element;
declare function SvgHexagon(props: IconBaseProps): JSX.Element;
declare function SvgHighlight(props: IconBaseProps): JSX.Element;
declare function SvgHorizontalDistribute(props: IconBaseProps): JSX.Element;
declare function SvgHorizontalRule(props: IconBaseProps): JSX.Element;
declare function SvgInsertChartOutlined(props: IconBaseProps): JSX.Element;
declare function SvgInsertChart(props: IconBaseProps): JSX.Element;
declare function SvgInsertComment(props: IconBaseProps): JSX.Element;
declare function SvgInsertDriveFile(props: IconBaseProps): JSX.Element;
declare function SvgInsertEmoticon(props: IconBaseProps): JSX.Element;
declare function SvgInsertInvitation(props: IconBaseProps): JSX.Element;
declare function SvgInsertLink(props: IconBaseProps): JSX.Element;
declare function SvgInsertPageBreak(props: IconBaseProps): JSX.Element;
declare function SvgInsertPhoto(props: IconBaseProps): JSX.Element;
declare function SvgLineAxis(props: IconBaseProps): JSX.Element;
declare function SvgLinearScale(props: IconBaseProps): JSX.Element;
declare function SvgMargin(props: IconBaseProps): JSX.Element;
declare function SvgMergeType(props: IconBaseProps): JSX.Element;
declare function SvgModeComment(props: IconBaseProps): JSX.Element;
declare function SvgModeEditOutline(props: IconBaseProps): JSX.Element;
declare function SvgModeEdit(props: IconBaseProps): JSX.Element;
declare function SvgMode(props: IconBaseProps): JSX.Element;
declare function SvgMonetizationOn(props: IconBaseProps): JSX.Element;
declare function SvgMoneyOffCsred(props: IconBaseProps): JSX.Element;
declare function SvgMoneyOff(props: IconBaseProps): JSX.Element;
declare function SvgMoveDown(props: IconBaseProps): JSX.Element;
declare function SvgMoveUp(props: IconBaseProps): JSX.Element;
declare function SvgMultilineChart(props: IconBaseProps): JSX.Element;
declare function SvgNotes(props: IconBaseProps): JSX.Element;
declare function SvgNumbers(props: IconBaseProps): JSX.Element;
declare function SvgPadding(props: IconBaseProps): JSX.Element;
declare function SvgPentagon(props: IconBaseProps): JSX.Element;
declare function SvgPieChartOutline(props: IconBaseProps): JSX.Element;
declare function SvgPieChart(props: IconBaseProps): JSX.Element;
declare function SvgPolyline(props: IconBaseProps): JSX.Element;
declare function SvgPostAdd(props: IconBaseProps): JSX.Element;
declare function SvgPublish(props: IconBaseProps): JSX.Element;
declare function SvgQueryStats(props: IconBaseProps): JSX.Element;
declare function SvgRectangle(props: IconBaseProps): JSX.Element;
declare function SvgScatterPlot(props: IconBaseProps): JSX.Element;
declare function SvgSchema(props: IconBaseProps): JSX.Element;
declare function SvgScore(props: IconBaseProps): JSX.Element;
declare function SvgShortText(props: IconBaseProps): JSX.Element;
declare function SvgShowChart(props: IconBaseProps): JSX.Element;
declare function SvgSpaceBar(props: IconBaseProps): JSX.Element;
declare function SvgSquare(props: IconBaseProps): JSX.Element;
declare function SvgStackedLineChart(props: IconBaseProps): JSX.Element;
declare function SvgStrikethroughS(props: IconBaseProps): JSX.Element;
declare function SvgSubscript(props: IconBaseProps): JSX.Element;
declare function SvgSuperscript(props: IconBaseProps): JSX.Element;
declare function SvgTableChart(props: IconBaseProps): JSX.Element;
declare function SvgTableRows(props: IconBaseProps): JSX.Element;
declare function SvgTextDecrease(props: IconBaseProps): JSX.Element;
declare function SvgTextFields(props: IconBaseProps): JSX.Element;
declare function SvgTextIncrease(props: IconBaseProps): JSX.Element;
declare function SvgTitle(props: IconBaseProps): JSX.Element;
declare function SvgVerticalAlignBottom(props: IconBaseProps): JSX.Element;
declare function SvgVerticalAlignCenter(props: IconBaseProps): JSX.Element;
declare function SvgVerticalAlignTop(props: IconBaseProps): JSX.Element;
declare function SvgVerticalDistribute(props: IconBaseProps): JSX.Element;
declare function SvgWrapText(props: IconBaseProps): JSX.Element;

declare function SvgApproval(props: IconBaseProps): JSX.Element;
declare function SvgAttachEmail(props: IconBaseProps): JSX.Element;
declare function SvgAttachment(props: IconBaseProps): JSX.Element;
declare function SvgCloudCircle(props: IconBaseProps): JSX.Element;
declare function SvgCloudDone(props: IconBaseProps): JSX.Element;
declare function SvgCloudDownload(props: IconBaseProps): JSX.Element;
declare function SvgCloudOff(props: IconBaseProps): JSX.Element;
declare function SvgCloudQueue(props: IconBaseProps): JSX.Element;
declare function SvgCloudSync(props: IconBaseProps): JSX.Element;
declare function SvgCloudUpload(props: IconBaseProps): JSX.Element;
declare function SvgCloud(props: IconBaseProps): JSX.Element;
declare function SvgCreateNewFolder(props: IconBaseProps): JSX.Element;
declare function SvgDifference(props: IconBaseProps): JSX.Element;
declare function SvgDownloadDone(props: IconBaseProps): JSX.Element;
declare function SvgDownloadForOffline(props: IconBaseProps): JSX.Element;
declare function SvgDownload(props: IconBaseProps): JSX.Element;
declare function SvgDownloading(props: IconBaseProps): JSX.Element;
declare function SvgDriveFileMoveRtl(props: IconBaseProps): JSX.Element;
declare function SvgDriveFileMove(props: IconBaseProps): JSX.Element;
declare function SvgDriveFileRenameOutline(props: IconBaseProps): JSX.Element;
declare function SvgDriveFolderUpload(props: IconBaseProps): JSX.Element;
declare function SvgFileDownloadDone(props: IconBaseProps): JSX.Element;
declare function SvgFileDownloadOff(props: IconBaseProps): JSX.Element;
declare function SvgFileDownload(props: IconBaseProps): JSX.Element;
declare function SvgFileOpen(props: IconBaseProps): JSX.Element;
declare function SvgFileUpload(props: IconBaseProps): JSX.Element;
declare function SvgFolderCopy(props: IconBaseProps): JSX.Element;
declare function SvgFolderDelete(props: IconBaseProps): JSX.Element;
declare function SvgFolderOff(props: IconBaseProps): JSX.Element;
declare function SvgFolderOpen(props: IconBaseProps): JSX.Element;
declare function SvgFolderShared(props: IconBaseProps): JSX.Element;
declare function SvgFolderZip(props: IconBaseProps): JSX.Element;
declare function SvgFolder(props: IconBaseProps): JSX.Element;
declare function SvgFormatOverline(props: IconBaseProps): JSX.Element;
declare function SvgGridView(props: IconBaseProps): JSX.Element;
declare function SvgNewspaper(props: IconBaseProps): JSX.Element;
declare function SvgRequestQuote(props: IconBaseProps): JSX.Element;
declare function SvgRuleFolder(props: IconBaseProps): JSX.Element;
declare function SvgSnippetFolder(props: IconBaseProps): JSX.Element;
declare function SvgTextSnippet(props: IconBaseProps): JSX.Element;
declare function SvgTopic(props: IconBaseProps): JSX.Element;
declare function SvgUploadFile(props: IconBaseProps): JSX.Element;
declare function SvgUpload(props: IconBaseProps): JSX.Element;
declare function SvgWorkspaces(props: IconBaseProps): JSX.Element;

declare function SvgAdfScanner(props: IconBaseProps): JSX.Element;
declare function SvgBrowserNotSupported(props: IconBaseProps): JSX.Element;
declare function SvgBrowserUpdated(props: IconBaseProps): JSX.Element;
declare function SvgCastConnected(props: IconBaseProps): JSX.Element;
declare function SvgCastForEducation(props: IconBaseProps): JSX.Element;
declare function SvgCast(props: IconBaseProps): JSX.Element;
declare function SvgComputer(props: IconBaseProps): JSX.Element;
declare function SvgConnectedTv(props: IconBaseProps): JSX.Element;
declare function SvgDesktopMac(props: IconBaseProps): JSX.Element;
declare function SvgDesktopWindows(props: IconBaseProps): JSX.Element;
declare function SvgDeveloperBoardOff(props: IconBaseProps): JSX.Element;
declare function SvgDeveloperBoard(props: IconBaseProps): JSX.Element;
declare function SvgDeviceHub(props: IconBaseProps): JSX.Element;
declare function SvgDeviceUnknown(props: IconBaseProps): JSX.Element;
declare function SvgDevicesOther(props: IconBaseProps): JSX.Element;
declare function SvgDock(props: IconBaseProps): JSX.Element;
declare function SvgEarbudsBattery(props: IconBaseProps): JSX.Element;
declare function SvgEarbuds(props: IconBaseProps): JSX.Element;
declare function SvgGamepad(props: IconBaseProps): JSX.Element;
declare function SvgHeadphonesBattery(props: IconBaseProps): JSX.Element;
declare function SvgHeadphones(props: IconBaseProps): JSX.Element;
declare function SvgHeadsetMic(props: IconBaseProps): JSX.Element;
declare function SvgHeadsetOff(props: IconBaseProps): JSX.Element;
declare function SvgHeadset(props: IconBaseProps): JSX.Element;
declare function SvgHomeMax(props: IconBaseProps): JSX.Element;
declare function SvgHomeMini(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardAlt(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardArrowDown(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardArrowLeft(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardArrowRight(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardArrowUp(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardBackspace(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardCapslock(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardCommandKey(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardControlKey(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardDoubleArrowDown(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardDoubleArrowLeft(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardDoubleArrowRight(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardDoubleArrowUp(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardHide(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardOptionKey(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardReturn(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardTab(props: IconBaseProps): JSX.Element;
declare function SvgKeyboardVoice(props: IconBaseProps): JSX.Element;
declare function SvgKeyboard(props: IconBaseProps): JSX.Element;
declare function SvgLaptopChromebook(props: IconBaseProps): JSX.Element;
declare function SvgLaptopMac(props: IconBaseProps): JSX.Element;
declare function SvgLaptopWindows(props: IconBaseProps): JSX.Element;
declare function SvgLaptop(props: IconBaseProps): JSX.Element;
declare function SvgMemory(props: IconBaseProps): JSX.Element;
declare function SvgMonitor(props: IconBaseProps): JSX.Element;
declare function SvgMouse(props: IconBaseProps): JSX.Element;
declare function SvgPhoneAndroid(props: IconBaseProps): JSX.Element;
declare function SvgPhoneIphone(props: IconBaseProps): JSX.Element;
declare function SvgPhonelinkOff(props: IconBaseProps): JSX.Element;
declare function SvgPhonelink(props: IconBaseProps): JSX.Element;
declare function SvgPointOfSale(props: IconBaseProps): JSX.Element;
declare function SvgPowerInput(props: IconBaseProps): JSX.Element;
declare function SvgRouter(props: IconBaseProps): JSX.Element;
declare function SvgScanner(props: IconBaseProps): JSX.Element;
declare function SvgSecurity(props: IconBaseProps): JSX.Element;
declare function SvgSimCard(props: IconBaseProps): JSX.Element;
declare function SvgSmartDisplay(props: IconBaseProps): JSX.Element;
declare function SvgSmartScreen(props: IconBaseProps): JSX.Element;
declare function SvgSmartToy(props: IconBaseProps): JSX.Element;
declare function SvgSmartphone(props: IconBaseProps): JSX.Element;
declare function SvgSpeakerGroup(props: IconBaseProps): JSX.Element;
declare function SvgSpeaker(props: IconBaseProps): JSX.Element;
declare function SvgStart(props: IconBaseProps): JSX.Element;
declare function SvgTabletAndroid(props: IconBaseProps): JSX.Element;
declare function SvgTabletMac(props: IconBaseProps): JSX.Element;
declare function SvgTablet(props: IconBaseProps): JSX.Element;
declare function SvgToys(props: IconBaseProps): JSX.Element;
declare function SvgTv(props: IconBaseProps): JSX.Element;
declare function SvgVideogameAssetOff(props: IconBaseProps): JSX.Element;
declare function SvgVideogameAsset(props: IconBaseProps): JSX.Element;
declare function SvgWatchOff(props: IconBaseProps): JSX.Element;
declare function SvgWatch(props: IconBaseProps): JSX.Element;

declare function SvgAutoMode(props: IconBaseProps): JSX.Element;
declare function SvgBlindsClosed(props: IconBaseProps): JSX.Element;
declare function SvgBlinds(props: IconBaseProps): JSX.Element;
declare function SvgBroadcastOnHome(props: IconBaseProps): JSX.Element;
declare function SvgBroadcastOnPersonal(props: IconBaseProps): JSX.Element;
declare function SvgCurtainsClosed(props: IconBaseProps): JSX.Element;
declare function SvgCurtains(props: IconBaseProps): JSX.Element;
declare function SvgElectricBolt(props: IconBaseProps): JSX.Element;
declare function SvgElectricMeter(props: IconBaseProps): JSX.Element;
declare function SvgEnergySavingsLeaf(props: IconBaseProps): JSX.Element;
declare function SvgGasMeter(props: IconBaseProps): JSX.Element;
declare function SvgHeatPump(props: IconBaseProps): JSX.Element;
declare function SvgModeFanOff(props: IconBaseProps): JSX.Element;
declare function SvgNestCamWiredStand(props: IconBaseProps): JSX.Element;
declare function SvgOilBarrel(props: IconBaseProps): JSX.Element;
declare function SvgPropaneTank(props: IconBaseProps): JSX.Element;
declare function SvgPropane(props: IconBaseProps): JSX.Element;
declare function SvgRollerShadesClosed(props: IconBaseProps): JSX.Element;
declare function SvgRollerShades(props: IconBaseProps): JSX.Element;
declare function SvgSensorDoor(props: IconBaseProps): JSX.Element;
declare function SvgSensorOccupied(props: IconBaseProps): JSX.Element;
declare function SvgSensorWindow(props: IconBaseProps): JSX.Element;
declare function SvgShieldMoon(props: IconBaseProps): JSX.Element;
declare function SvgSolarPower(props: IconBaseProps): JSX.Element;
declare function SvgVerticalShadesClosed(props: IconBaseProps): JSX.Element;
declare function SvgVerticalShades(props: IconBaseProps): JSX.Element;
declare function SvgWindPower(props: IconBaseProps): JSX.Element;

declare function Svg361(props: IconBaseProps): JSX.Element;
declare function SvgAddBusiness(props: IconBaseProps): JSX.Element;
declare function SvgAddLocationAlt(props: IconBaseProps): JSX.Element;
declare function SvgAddLocation(props: IconBaseProps): JSX.Element;
declare function SvgAddRoad(props: IconBaseProps): JSX.Element;
declare function SvgAgriculture(props: IconBaseProps): JSX.Element;
declare function SvgAirlineStops(props: IconBaseProps): JSX.Element;
declare function SvgAirlines(props: IconBaseProps): JSX.Element;
declare function SvgAltRoute(props: IconBaseProps): JSX.Element;
declare function SvgAtm(props: IconBaseProps): JSX.Element;
declare function SvgAttractions(props: IconBaseProps): JSX.Element;
declare function SvgBadge(props: IconBaseProps): JSX.Element;
declare function SvgBakeryDining(props: IconBaseProps): JSX.Element;
declare function SvgBeenhere(props: IconBaseProps): JSX.Element;
declare function SvgBikeScooter(props: IconBaseProps): JSX.Element;
declare function SvgBreakfastDining(props: IconBaseProps): JSX.Element;
declare function SvgBrunchDining(props: IconBaseProps): JSX.Element;
declare function SvgBusAlert(props: IconBaseProps): JSX.Element;
declare function SvgCarCrash(props: IconBaseProps): JSX.Element;
declare function SvgCarRental(props: IconBaseProps): JSX.Element;
declare function SvgCarRepair(props: IconBaseProps): JSX.Element;
declare function SvgCastle(props: IconBaseProps): JSX.Element;
declare function SvgCategory(props: IconBaseProps): JSX.Element;
declare function SvgCelebration(props: IconBaseProps): JSX.Element;
declare function SvgChurch(props: IconBaseProps): JSX.Element;
declare function SvgCleaningServices(props: IconBaseProps): JSX.Element;
declare function SvgCompassCalibration(props: IconBaseProps): JSX.Element;
declare function SvgConnectingAirports(props: IconBaseProps): JSX.Element;
declare function SvgCrisisAlert(props: IconBaseProps): JSX.Element;
declare function SvgDeliveryDining(props: IconBaseProps): JSX.Element;
declare function SvgDepartureBoard(props: IconBaseProps): JSX.Element;
declare function SvgDesignServices(props: IconBaseProps): JSX.Element;
declare function SvgDiamond(props: IconBaseProps): JSX.Element;
declare function SvgDinnerDining(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsBike(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsBoatFilled(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsBoat(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsBusFilled(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsBus(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsCarFilled(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsCar(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsRailwayFilled(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsRailway(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsRun(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsSubwayFilled(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsSubway(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsTransitFilled(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsTransit(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsWalk(props: IconBaseProps): JSX.Element;
declare function SvgDirections(props: IconBaseProps): JSX.Element;
declare function SvgDryCleaning(props: IconBaseProps): JSX.Element;
declare function SvgEditAttributes(props: IconBaseProps): JSX.Element;
declare function SvgEditLocationAlt(props: IconBaseProps): JSX.Element;
declare function SvgEditLocation(props: IconBaseProps): JSX.Element;
declare function SvgEditRoad(props: IconBaseProps): JSX.Element;
declare function SvgEggAlt(props: IconBaseProps): JSX.Element;
declare function SvgEgg(props: IconBaseProps): JSX.Element;
declare function SvgElectricBike(props: IconBaseProps): JSX.Element;
declare function SvgElectricCar(props: IconBaseProps): JSX.Element;
declare function SvgElectricMoped(props: IconBaseProps): JSX.Element;
declare function SvgElectricRickshaw(props: IconBaseProps): JSX.Element;
declare function SvgElectricScooter(props: IconBaseProps): JSX.Element;
declare function SvgElectricalServices(props: IconBaseProps): JSX.Element;
declare function SvgEmergencyRecording(props: IconBaseProps): JSX.Element;
declare function SvgEmergencyShare(props: IconBaseProps): JSX.Element;
declare function SvgEmergency(props: IconBaseProps): JSX.Element;
declare function SvgEvStation(props: IconBaseProps): JSX.Element;
declare function SvgFactory(props: IconBaseProps): JSX.Element;
declare function SvgFastfood(props: IconBaseProps): JSX.Element;
declare function SvgFestival(props: IconBaseProps): JSX.Element;
declare function SvgFlightClass(props: IconBaseProps): JSX.Element;
declare function SvgFlight(props: IconBaseProps): JSX.Element;
declare function SvgForest(props: IconBaseProps): JSX.Element;
declare function SvgForkLeft(props: IconBaseProps): JSX.Element;
declare function SvgForkRight(props: IconBaseProps): JSX.Element;
declare function SvgFort(props: IconBaseProps): JSX.Element;
declare function SvgHail(props: IconBaseProps): JSX.Element;
declare function SvgHandyman(props: IconBaseProps): JSX.Element;
declare function SvgHardware(props: IconBaseProps): JSX.Element;
declare function SvgHomeRepairService(props: IconBaseProps): JSX.Element;
declare function SvgHotel(props: IconBaseProps): JSX.Element;
declare function SvgHvac(props: IconBaseProps): JSX.Element;
declare function SvgIcecream(props: IconBaseProps): JSX.Element;
declare function SvgKebabDining(props: IconBaseProps): JSX.Element;
declare function SvgLayersClear(props: IconBaseProps): JSX.Element;
declare function SvgLayers(props: IconBaseProps): JSX.Element;
declare function SvgLiquor(props: IconBaseProps): JSX.Element;
declare function SvgLocalActivity(props: IconBaseProps): JSX.Element;
declare function SvgLocalAirport(props: IconBaseProps): JSX.Element;
declare function SvgLocalAtm(props: IconBaseProps): JSX.Element;
declare function SvgLocalBar(props: IconBaseProps): JSX.Element;
declare function SvgLocalCafe(props: IconBaseProps): JSX.Element;
declare function SvgLocalCarWash(props: IconBaseProps): JSX.Element;
declare function SvgLocalConvenienceStore(props: IconBaseProps): JSX.Element;
declare function SvgLocalDining(props: IconBaseProps): JSX.Element;
declare function SvgLocalDrink(props: IconBaseProps): JSX.Element;
declare function SvgLocalFireDepartment(props: IconBaseProps): JSX.Element;
declare function SvgLocalFlorist(props: IconBaseProps): JSX.Element;
declare function SvgLocalGasStation(props: IconBaseProps): JSX.Element;
declare function SvgLocalGroceryStore(props: IconBaseProps): JSX.Element;
declare function SvgLocalHospital(props: IconBaseProps): JSX.Element;
declare function SvgLocalHotel(props: IconBaseProps): JSX.Element;
declare function SvgLocalLaundryService(props: IconBaseProps): JSX.Element;
declare function SvgLocalLibrary(props: IconBaseProps): JSX.Element;
declare function SvgLocalMall(props: IconBaseProps): JSX.Element;
declare function SvgLocalMovies(props: IconBaseProps): JSX.Element;
declare function SvgLocalOffer(props: IconBaseProps): JSX.Element;
declare function SvgLocalParking(props: IconBaseProps): JSX.Element;
declare function SvgLocalPharmacy(props: IconBaseProps): JSX.Element;
declare function SvgLocalPhone(props: IconBaseProps): JSX.Element;
declare function SvgLocalPizza(props: IconBaseProps): JSX.Element;
declare function SvgLocalPlay(props: IconBaseProps): JSX.Element;
declare function SvgLocalPolice(props: IconBaseProps): JSX.Element;
declare function SvgLocalPostOffice(props: IconBaseProps): JSX.Element;
declare function SvgLocalPrintshop(props: IconBaseProps): JSX.Element;
declare function SvgLocalSee(props: IconBaseProps): JSX.Element;
declare function SvgLocalShipping(props: IconBaseProps): JSX.Element;
declare function SvgLocalTaxi(props: IconBaseProps): JSX.Element;
declare function SvgLunchDining(props: IconBaseProps): JSX.Element;
declare function SvgMap(props: IconBaseProps): JSX.Element;
declare function SvgMapsUgc(props: IconBaseProps): JSX.Element;
declare function SvgMedicalInformation(props: IconBaseProps): JSX.Element;
declare function SvgMedicalServices(props: IconBaseProps): JSX.Element;
declare function SvgMenuBook(props: IconBaseProps): JSX.Element;
declare function SvgMerge(props: IconBaseProps): JSX.Element;
declare function SvgMinorCrash(props: IconBaseProps): JSX.Element;
declare function SvgMiscellaneousServices(props: IconBaseProps): JSX.Element;
declare function SvgModeOfTravel(props: IconBaseProps): JSX.Element;
declare function SvgMoney(props: IconBaseProps): JSX.Element;
declare function SvgMoped(props: IconBaseProps): JSX.Element;
declare function SvgMosque(props: IconBaseProps): JSX.Element;
declare function SvgMoving(props: IconBaseProps): JSX.Element;
declare function SvgMultipleStop(props: IconBaseProps): JSX.Element;
declare function SvgMuseum(props: IconBaseProps): JSX.Element;
declare function SvgMyLocation(props: IconBaseProps): JSX.Element;
declare function SvgNavigation(props: IconBaseProps): JSX.Element;
declare function SvgNearMeDisabled(props: IconBaseProps): JSX.Element;
declare function SvgNearMe(props: IconBaseProps): JSX.Element;
declare function SvgNightlife(props: IconBaseProps): JSX.Element;
declare function SvgNoCrash(props: IconBaseProps): JSX.Element;
declare function SvgNoMeals(props: IconBaseProps): JSX.Element;
declare function SvgNoTransfer(props: IconBaseProps): JSX.Element;
declare function SvgNotListedLocation(props: IconBaseProps): JSX.Element;
declare function SvgPark(props: IconBaseProps): JSX.Element;
declare function SvgPedalBike(props: IconBaseProps): JSX.Element;
declare function SvgPersonPinCircle(props: IconBaseProps): JSX.Element;
declare function SvgPersonPin(props: IconBaseProps): JSX.Element;
declare function SvgPestControlRodent(props: IconBaseProps): JSX.Element;
declare function SvgPestControl(props: IconBaseProps): JSX.Element;
declare function SvgPinDrop(props: IconBaseProps): JSX.Element;
declare function SvgPlace(props: IconBaseProps): JSX.Element;
declare function SvgPlumbing(props: IconBaseProps): JSX.Element;
declare function SvgRailwayAlert(props: IconBaseProps): JSX.Element;
declare function SvgRamenDining(props: IconBaseProps): JSX.Element;
declare function SvgRampLeft(props: IconBaseProps): JSX.Element;
declare function SvgRampRight(props: IconBaseProps): JSX.Element;
declare function SvgRateReview(props: IconBaseProps): JSX.Element;
declare function SvgRemoveRoad(props: IconBaseProps): JSX.Element;
declare function SvgRestaurantMenu(props: IconBaseProps): JSX.Element;
declare function SvgRestaurant(props: IconBaseProps): JSX.Element;
declare function SvgRoundaboutLeft(props: IconBaseProps): JSX.Element;
declare function SvgRoundaboutRight(props: IconBaseProps): JSX.Element;
declare function SvgRoute(props: IconBaseProps): JSX.Element;
declare function SvgRunCircle(props: IconBaseProps): JSX.Element;
declare function SvgSafetyCheck(props: IconBaseProps): JSX.Element;
declare function SvgSailing(props: IconBaseProps): JSX.Element;
declare function SvgSatellite(props: IconBaseProps): JSX.Element;
declare function SvgScreenRotationAlt(props: IconBaseProps): JSX.Element;
declare function SvgSetMeal(props: IconBaseProps): JSX.Element;
declare function SvgSignpost(props: IconBaseProps): JSX.Element;
declare function SvgSnowmobile(props: IconBaseProps): JSX.Element;
declare function SvgSos(props: IconBaseProps): JSX.Element;
declare function SvgSoupKitchen(props: IconBaseProps): JSX.Element;
declare function SvgStadium(props: IconBaseProps): JSX.Element;
declare function SvgStoreMallDirectory(props: IconBaseProps): JSX.Element;
declare function SvgStraight(props: IconBaseProps): JSX.Element;
declare function SvgStreetview(props: IconBaseProps): JSX.Element;
declare function SvgSubway(props: IconBaseProps): JSX.Element;
declare function SvgSynagogue(props: IconBaseProps): JSX.Element;
declare function SvgTakeoutDining(props: IconBaseProps): JSX.Element;
declare function SvgTaxiAlert(props: IconBaseProps): JSX.Element;
declare function SvgTempleBuddhist(props: IconBaseProps): JSX.Element;
declare function SvgTempleHindu(props: IconBaseProps): JSX.Element;
declare function SvgTerrain(props: IconBaseProps): JSX.Element;
declare function SvgTheaterComedy(props: IconBaseProps): JSX.Element;
declare function SvgTireRepair(props: IconBaseProps): JSX.Element;
declare function SvgTraffic(props: IconBaseProps): JSX.Element;
declare function SvgTrain(props: IconBaseProps): JSX.Element;
declare function SvgTram(props: IconBaseProps): JSX.Element;
declare function SvgTransferWithinAStation(props: IconBaseProps): JSX.Element;
declare function SvgTransitEnterexit(props: IconBaseProps): JSX.Element;
declare function SvgTripOrigin(props: IconBaseProps): JSX.Element;
declare function SvgTurnLeft(props: IconBaseProps): JSX.Element;
declare function SvgTurnRight(props: IconBaseProps): JSX.Element;
declare function SvgTurnSharpLeft(props: IconBaseProps): JSX.Element;
declare function SvgTurnSharpRight(props: IconBaseProps): JSX.Element;
declare function SvgTurnSlightLeft(props: IconBaseProps): JSX.Element;
declare function SvgTurnSlightRight(props: IconBaseProps): JSX.Element;
declare function SvgTwoWheeler(props: IconBaseProps): JSX.Element;
declare function SvgUTurnLeft(props: IconBaseProps): JSX.Element;
declare function SvgUTurnRight(props: IconBaseProps): JSX.Element;
declare function SvgVolunteerActivism(props: IconBaseProps): JSX.Element;
declare function SvgWarehouse(props: IconBaseProps): JSX.Element;
declare function SvgWineBar(props: IconBaseProps): JSX.Element;
declare function SvgWrongLocation(props: IconBaseProps): JSX.Element;
declare function SvgZoomInMap(props: IconBaseProps): JSX.Element;
declare function SvgZoomOutMap(props: IconBaseProps): JSX.Element;

declare function SvgAppSettingsAlt(props: IconBaseProps): JSX.Element;
declare function SvgAppsOutage(props: IconBaseProps): JSX.Element;
declare function SvgApps(props: IconBaseProps): JSX.Element;
declare function SvgArrowBackIosNew(props: IconBaseProps): JSX.Element;
declare function SvgArrowBackIos(props: IconBaseProps): JSX.Element;
declare function SvgArrowBack(props: IconBaseProps): JSX.Element;
declare function SvgArrowDownward(props: IconBaseProps): JSX.Element;
declare function SvgArrowDropDownCircle(props: IconBaseProps): JSX.Element;
declare function SvgArrowDropDown(props: IconBaseProps): JSX.Element;
declare function SvgArrowDropUp(props: IconBaseProps): JSX.Element;
declare function SvgArrowForwardIos(props: IconBaseProps): JSX.Element;
declare function SvgArrowForward(props: IconBaseProps): JSX.Element;
declare function SvgArrowLeft(props: IconBaseProps): JSX.Element;
declare function SvgArrowRight(props: IconBaseProps): JSX.Element;
declare function SvgArrowUpward(props: IconBaseProps): JSX.Element;
declare function SvgAssistantDirection(props: IconBaseProps): JSX.Element;
declare function SvgCampaign(props: IconBaseProps): JSX.Element;
declare function SvgCancel(props: IconBaseProps): JSX.Element;
declare function SvgCheck(props: IconBaseProps): JSX.Element;
declare function SvgChevronLeft(props: IconBaseProps): JSX.Element;
declare function SvgChevronRight(props: IconBaseProps): JSX.Element;
declare function SvgClose(props: IconBaseProps): JSX.Element;
declare function SvgDoubleArrow(props: IconBaseProps): JSX.Element;
declare function SvgEast(props: IconBaseProps): JSX.Element;
declare function SvgExpandCircleDown(props: IconBaseProps): JSX.Element;
declare function SvgExpandLess(props: IconBaseProps): JSX.Element;
declare function SvgExpandMore(props: IconBaseProps): JSX.Element;
declare function SvgFirstPage(props: IconBaseProps): JSX.Element;
declare function SvgFullscreenExit(props: IconBaseProps): JSX.Element;
declare function SvgFullscreen(props: IconBaseProps): JSX.Element;
declare function SvgHomeWork(props: IconBaseProps): JSX.Element;
declare function SvgLastPage(props: IconBaseProps): JSX.Element;
declare function SvgLegendToggle(props: IconBaseProps): JSX.Element;
declare function SvgMapsHomeWork(props: IconBaseProps): JSX.Element;
declare function SvgMenuOpen(props: IconBaseProps): JSX.Element;
declare function SvgMenu(props: IconBaseProps): JSX.Element;
declare function SvgMoreHoriz(props: IconBaseProps): JSX.Element;
declare function SvgMoreVert(props: IconBaseProps): JSX.Element;
declare function SvgNorthEast(props: IconBaseProps): JSX.Element;
declare function SvgNorthWest(props: IconBaseProps): JSX.Element;
declare function SvgNorth(props: IconBaseProps): JSX.Element;
declare function SvgOfflineShare(props: IconBaseProps): JSX.Element;
declare function SvgPayments(props: IconBaseProps): JSX.Element;
declare function SvgPivotTableChart(props: IconBaseProps): JSX.Element;
declare function SvgRefresh(props: IconBaseProps): JSX.Element;
declare function SvgSouthEast(props: IconBaseProps): JSX.Element;
declare function SvgSouthWest(props: IconBaseProps): JSX.Element;
declare function SvgSouth(props: IconBaseProps): JSX.Element;
declare function SvgSubdirectoryArrowLeft(props: IconBaseProps): JSX.Element;
declare function SvgSubdirectoryArrowRight(props: IconBaseProps): JSX.Element;
declare function SvgSwitchLeft(props: IconBaseProps): JSX.Element;
declare function SvgSwitchRight(props: IconBaseProps): JSX.Element;
declare function SvgUnfoldLess(props: IconBaseProps): JSX.Element;
declare function SvgUnfoldMore(props: IconBaseProps): JSX.Element;
declare function SvgWaterfallChart(props: IconBaseProps): JSX.Element;
declare function SvgWest(props: IconBaseProps): JSX.Element;

declare function SvgAccountTree(props: IconBaseProps): JSX.Element;
declare function SvgAdb(props: IconBaseProps): JSX.Element;
declare function SvgAirlineSeatFlatAngled(props: IconBaseProps): JSX.Element;
declare function SvgAirlineSeatFlat(props: IconBaseProps): JSX.Element;
declare function SvgAirlineSeatIndividualSuite(
  props: IconBaseProps
): JSX.Element;
declare function SvgAirlineSeatLegroomExtra(props: IconBaseProps): JSX.Element;
declare function SvgAirlineSeatLegroomNormal(props: IconBaseProps): JSX.Element;
declare function SvgAirlineSeatLegroomReduced(
  props: IconBaseProps
): JSX.Element;
declare function SvgAirlineSeatReclineExtra(props: IconBaseProps): JSX.Element;
declare function SvgAirlineSeatReclineNormal(props: IconBaseProps): JSX.Element;
declare function SvgBluetoothAudio(props: IconBaseProps): JSX.Element;
declare function SvgConfirmationNumber(props: IconBaseProps): JSX.Element;
declare function SvgDirectionsOff(props: IconBaseProps): JSX.Element;
declare function SvgDiscFull(props: IconBaseProps): JSX.Element;
declare function SvgDoDisturbAlt(props: IconBaseProps): JSX.Element;
declare function SvgDoDisturbOff(props: IconBaseProps): JSX.Element;
declare function SvgDoDisturbOn(props: IconBaseProps): JSX.Element;
declare function SvgDoDisturb(props: IconBaseProps): JSX.Element;
declare function SvgDoNotDisturbAlt(props: IconBaseProps): JSX.Element;
declare function SvgDoNotDisturbOff(props: IconBaseProps): JSX.Element;
declare function SvgDoNotDisturbOn(props: IconBaseProps): JSX.Element;
declare function SvgDoNotDisturb(props: IconBaseProps): JSX.Element;
declare function SvgDriveEta(props: IconBaseProps): JSX.Element;
declare function SvgEnhancedEncryption(props: IconBaseProps): JSX.Element;
declare function SvgEventAvailable(props: IconBaseProps): JSX.Element;
declare function SvgEventBusy(props: IconBaseProps): JSX.Element;
declare function SvgEventNote(props: IconBaseProps): JSX.Element;
declare function SvgFolderSpecial(props: IconBaseProps): JSX.Element;
declare function SvgImagesearchRoller(props: IconBaseProps): JSX.Element;
declare function SvgLiveTv(props: IconBaseProps): JSX.Element;
declare function SvgMms(props: IconBaseProps): JSX.Element;
declare function SvgMore(props: IconBaseProps): JSX.Element;
declare function SvgNetworkCheck(props: IconBaseProps): JSX.Element;
declare function SvgNetworkLocked(props: IconBaseProps): JSX.Element;
declare function SvgNoEncryptionGmailerrorred(
  props: IconBaseProps
): JSX.Element;
declare function SvgNoEncryption(props: IconBaseProps): JSX.Element;
declare function SvgOndemandVideo(props: IconBaseProps): JSX.Element;
declare function SvgPersonalVideo(props: IconBaseProps): JSX.Element;
declare function SvgPhoneBluetoothSpeaker(props: IconBaseProps): JSX.Element;
declare function SvgPhoneCallback(props: IconBaseProps): JSX.Element;
declare function SvgPhoneForwarded(props: IconBaseProps): JSX.Element;
declare function SvgPhoneInTalk(props: IconBaseProps): JSX.Element;
declare function SvgPhoneLocked(props: IconBaseProps): JSX.Element;
declare function SvgPhoneMissed(props: IconBaseProps): JSX.Element;
declare function SvgPhonePaused(props: IconBaseProps): JSX.Element;
declare function SvgPowerOff(props: IconBaseProps): JSX.Element;
declare function SvgPower(props: IconBaseProps): JSX.Element;
declare function SvgPriorityHigh(props: IconBaseProps): JSX.Element;
declare function SvgRunningWithErrors(props: IconBaseProps): JSX.Element;
declare function SvgSdCardAlert(props: IconBaseProps): JSX.Element;
declare function SvgSdCard(props: IconBaseProps): JSX.Element;
declare function SvgSimCardAlert(props: IconBaseProps): JSX.Element;
declare function SvgSmsFailed(props: IconBaseProps): JSX.Element;
declare function SvgSms(props: IconBaseProps): JSX.Element;
declare function SvgSupportAgent(props: IconBaseProps): JSX.Element;
declare function SvgSyncDisabled(props: IconBaseProps): JSX.Element;
declare function SvgSyncLock(props: IconBaseProps): JSX.Element;
declare function SvgSyncProblem(props: IconBaseProps): JSX.Element;
declare function SvgSync(props: IconBaseProps): JSX.Element;
declare function SvgSystemUpdate(props: IconBaseProps): JSX.Element;
declare function SvgTapAndPlay(props: IconBaseProps): JSX.Element;
declare function SvgTimeToLeave(props: IconBaseProps): JSX.Element;
declare function SvgTvOff(props: IconBaseProps): JSX.Element;
declare function SvgVibration(props: IconBaseProps): JSX.Element;
declare function SvgVoiceChat(props: IconBaseProps): JSX.Element;
declare function SvgVpnLock(props: IconBaseProps): JSX.Element;
declare function SvgWc(props: IconBaseProps): JSX.Element;
declare function SvgWifiOff(props: IconBaseProps): JSX.Element;
declare function SvgWifi(props: IconBaseProps): JSX.Element;

declare function SvgBathroom(props: IconBaseProps): JSX.Element;
declare function SvgBed(props: IconBaseProps): JSX.Element;
declare function SvgBedroomBaby(props: IconBaseProps): JSX.Element;
declare function SvgBedroomChild(props: IconBaseProps): JSX.Element;
declare function SvgBedroomParent(props: IconBaseProps): JSX.Element;
declare function SvgBlender(props: IconBaseProps): JSX.Element;
declare function SvgCameraIndoor(props: IconBaseProps): JSX.Element;
declare function SvgCameraOutdoor(props: IconBaseProps): JSX.Element;
declare function SvgChairAlt(props: IconBaseProps): JSX.Element;
declare function SvgChair(props: IconBaseProps): JSX.Element;
declare function SvgCircleCompleted(props: IconBaseProps): JSX.Element;
declare function SvgCircleDisabled(props: IconBaseProps): JSX.Element;
declare function SvgCircleProgress(props: IconBaseProps): JSX.Element;
declare function SvgCoffeeMaker(props: IconBaseProps): JSX.Element;
declare function SvgCoffee(props: IconBaseProps): JSX.Element;
declare function SvgDining(props: IconBaseProps): JSX.Element;
declare function SvgDoorBack(props: IconBaseProps): JSX.Element;
declare function SvgDoorFront(props: IconBaseProps): JSX.Element;
declare function SvgDoorSliding(props: IconBaseProps): JSX.Element;
declare function SvgDoorbell(props: IconBaseProps): JSX.Element;
declare function SvgFeed(props: IconBaseProps): JSX.Element;
declare function SvgFlatware(props: IconBaseProps): JSX.Element;
declare function SvgGarage(props: IconBaseProps): JSX.Element;
declare function SvgLight(props: IconBaseProps): JSX.Element;
declare function SvgLiving(props: IconBaseProps): JSX.Element;
declare function SvgManageSearch(props: IconBaseProps): JSX.Element;
declare function SvgPodcasts(props: IconBaseProps): JSX.Element;
declare function SvgShower(props: IconBaseProps): JSX.Element;
declare function SvgTableBar(props: IconBaseProps): JSX.Element;
declare function SvgTableRestaurant(props: IconBaseProps): JSX.Element;
declare function SvgWindow(props: IconBaseProps): JSX.Element;
declare function SvgYard(props: IconBaseProps): JSX.Element;

declare function Svg10Mp(props: IconBaseProps): JSX.Element;
declare function Svg11Mp(props: IconBaseProps): JSX.Element;
declare function Svg12Mp(props: IconBaseProps): JSX.Element;
declare function Svg13Mp(props: IconBaseProps): JSX.Element;
declare function Svg14Mp(props: IconBaseProps): JSX.Element;
declare function Svg15Mp(props: IconBaseProps): JSX.Element;
declare function Svg16Mp(props: IconBaseProps): JSX.Element;
declare function Svg17Mp(props: IconBaseProps): JSX.Element;
declare function Svg18Mp(props: IconBaseProps): JSX.Element;
declare function Svg19Mp(props: IconBaseProps): JSX.Element;
declare function Svg20Mp(props: IconBaseProps): JSX.Element;
declare function Svg21Mp(props: IconBaseProps): JSX.Element;
declare function Svg22Mp(props: IconBaseProps): JSX.Element;
declare function Svg23Mp(props: IconBaseProps): JSX.Element;
declare function Svg24Mp(props: IconBaseProps): JSX.Element;
declare function Svg2Mp(props: IconBaseProps): JSX.Element;
declare function Svg30FpsSelect(props: IconBaseProps): JSX.Element;
declare function Svg3Mp(props: IconBaseProps): JSX.Element;
declare function Svg4Mp(props: IconBaseProps): JSX.Element;
declare function Svg5Mp(props: IconBaseProps): JSX.Element;
declare function Svg60FpsSelect(props: IconBaseProps): JSX.Element;
declare function Svg6Mp(props: IconBaseProps): JSX.Element;
declare function Svg7Mp(props: IconBaseProps): JSX.Element;
declare function Svg8Mp(props: IconBaseProps): JSX.Element;
declare function Svg9Mp(props: IconBaseProps): JSX.Element;
declare function SvgAddAPhoto(props: IconBaseProps): JSX.Element;
declare function SvgAddPhotoAlternate(props: IconBaseProps): JSX.Element;
declare function SvgAddToPhotos(props: IconBaseProps): JSX.Element;
declare function SvgAdjust(props: IconBaseProps): JSX.Element;
declare function SvgAnimation(props: IconBaseProps): JSX.Element;
declare function SvgAssistantPhoto(props: IconBaseProps): JSX.Element;
declare function SvgAssistant(props: IconBaseProps): JSX.Element;
declare function SvgAudiotrack(props: IconBaseProps): JSX.Element;
declare function SvgAutoAwesomeMosaic(props: IconBaseProps): JSX.Element;
declare function SvgAutoAwesomeMotion(props: IconBaseProps): JSX.Element;
declare function SvgAutoAwesome(props: IconBaseProps): JSX.Element;
declare function SvgAutoFixHigh(props: IconBaseProps): JSX.Element;
declare function SvgAutoFixNormal(props: IconBaseProps): JSX.Element;
declare function SvgAutoFixOff(props: IconBaseProps): JSX.Element;
declare function SvgAutoStories(props: IconBaseProps): JSX.Element;
declare function SvgAutofpsSelect(props: IconBaseProps): JSX.Element;
declare function SvgBedtimeOff(props: IconBaseProps): JSX.Element;
declare function SvgBedtime(props: IconBaseProps): JSX.Element;
declare function SvgBlurCircular(props: IconBaseProps): JSX.Element;
declare function SvgBlurLinear(props: IconBaseProps): JSX.Element;
declare function SvgBlurOff(props: IconBaseProps): JSX.Element;
declare function SvgBlurOn(props: IconBaseProps): JSX.Element;
declare function SvgBrightness1(props: IconBaseProps): JSX.Element;
declare function SvgBrightness2(props: IconBaseProps): JSX.Element;
declare function SvgBrightness3(props: IconBaseProps): JSX.Element;
declare function SvgBrightness4(props: IconBaseProps): JSX.Element;
declare function SvgBrightness5(props: IconBaseProps): JSX.Element;
declare function SvgBrightness6(props: IconBaseProps): JSX.Element;
declare function SvgBrightness7(props: IconBaseProps): JSX.Element;
declare function SvgBrokenImage(props: IconBaseProps): JSX.Element;
declare function SvgBrush(props: IconBaseProps): JSX.Element;
declare function SvgBurstMode(props: IconBaseProps): JSX.Element;
declare function SvgCameraAlt(props: IconBaseProps): JSX.Element;
declare function SvgCameraFront(props: IconBaseProps): JSX.Element;
declare function SvgCameraRear(props: IconBaseProps): JSX.Element;
declare function SvgCameraRoll(props: IconBaseProps): JSX.Element;
declare function SvgCamera(props: IconBaseProps): JSX.Element;
declare function SvgCases(props: IconBaseProps): JSX.Element;
declare function SvgCenterFocusStrong(props: IconBaseProps): JSX.Element;
declare function SvgCenterFocusWeak(props: IconBaseProps): JSX.Element;
declare function SvgCircle(props: IconBaseProps): JSX.Element;
declare function SvgCollectionsBookmark(props: IconBaseProps): JSX.Element;
declare function SvgCollections(props: IconBaseProps): JSX.Element;
declare function SvgColorLens(props: IconBaseProps): JSX.Element;
declare function SvgColorize(props: IconBaseProps): JSX.Element;
declare function SvgCompare(props: IconBaseProps): JSX.Element;
declare function SvgContrast(props: IconBaseProps): JSX.Element;
declare function SvgControlPointDuplicate(props: IconBaseProps): JSX.Element;
declare function SvgControlPoint(props: IconBaseProps): JSX.Element;
declare function SvgCrop169(props: IconBaseProps): JSX.Element;
declare function SvgCrop32(props: IconBaseProps): JSX.Element;
declare function SvgCrop54(props: IconBaseProps): JSX.Element;
declare function SvgCrop75(props: IconBaseProps): JSX.Element;
declare function SvgCropDin(props: IconBaseProps): JSX.Element;
declare function SvgCropFree(props: IconBaseProps): JSX.Element;
declare function SvgCropLandscape(props: IconBaseProps): JSX.Element;
declare function SvgCropOriginal(props: IconBaseProps): JSX.Element;
declare function SvgCropPortrait(props: IconBaseProps): JSX.Element;
declare function SvgCropRotate(props: IconBaseProps): JSX.Element;
declare function SvgCropSquare(props: IconBaseProps): JSX.Element;
declare function SvgCrop(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyBitcoin(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyFranc(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyLira(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyPound(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyRuble(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyRupee(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyYen(props: IconBaseProps): JSX.Element;
declare function SvgCurrencyYuan(props: IconBaseProps): JSX.Element;
declare function SvgDeblur(props: IconBaseProps): JSX.Element;
declare function SvgDehaze(props: IconBaseProps): JSX.Element;
declare function SvgDetails(props: IconBaseProps): JSX.Element;
declare function SvgDirtyLens(props: IconBaseProps): JSX.Element;
declare function SvgEdit(props: IconBaseProps): JSX.Element;
declare function SvgEuro(props: IconBaseProps): JSX.Element;
declare function SvgExposureNeg1(props: IconBaseProps): JSX.Element;
declare function SvgExposureNeg2(props: IconBaseProps): JSX.Element;
declare function SvgExposurePlus1(props: IconBaseProps): JSX.Element;
declare function SvgExposurePlus2(props: IconBaseProps): JSX.Element;
declare function SvgExposureZero(props: IconBaseProps): JSX.Element;
declare function SvgExposure(props: IconBaseProps): JSX.Element;
declare function SvgFaceRetouchingNatural(props: IconBaseProps): JSX.Element;
declare function SvgFaceRetouchingOff(props: IconBaseProps): JSX.Element;
declare function SvgFilter1(props: IconBaseProps): JSX.Element;
declare function SvgFilter2(props: IconBaseProps): JSX.Element;
declare function SvgFilter3(props: IconBaseProps): JSX.Element;
declare function SvgFilter4(props: IconBaseProps): JSX.Element;
declare function SvgFilter5(props: IconBaseProps): JSX.Element;
declare function SvgFilter6(props: IconBaseProps): JSX.Element;
declare function SvgFilter7(props: IconBaseProps): JSX.Element;
declare function SvgFilter8(props: IconBaseProps): JSX.Element;
declare function SvgFilter9Plus(props: IconBaseProps): JSX.Element;
declare function SvgFilter9(props: IconBaseProps): JSX.Element;
declare function SvgFilterBAndW(props: IconBaseProps): JSX.Element;
declare function SvgFilterCenterFocus(props: IconBaseProps): JSX.Element;
declare function SvgFilterDrama(props: IconBaseProps): JSX.Element;
declare function SvgFilterFrames(props: IconBaseProps): JSX.Element;
declare function SvgFilterHdr(props: IconBaseProps): JSX.Element;
declare function SvgFilterNone(props: IconBaseProps): JSX.Element;
declare function SvgFilterTiltShift(props: IconBaseProps): JSX.Element;
declare function SvgFilterVintage(props: IconBaseProps): JSX.Element;
declare function SvgFilter(props: IconBaseProps): JSX.Element;
declare function SvgFlare(props: IconBaseProps): JSX.Element;
declare function SvgFlashAuto(props: IconBaseProps): JSX.Element;
declare function SvgFlashOff(props: IconBaseProps): JSX.Element;
declare function SvgFlashOn(props: IconBaseProps): JSX.Element;
declare function SvgFlipCameraAndroid(props: IconBaseProps): JSX.Element;
declare function SvgFlipCameraIos(props: IconBaseProps): JSX.Element;
declare function SvgFlip(props: IconBaseProps): JSX.Element;
declare function SvgGradient(props: IconBaseProps): JSX.Element;
declare function SvgGrain(props: IconBaseProps): JSX.Element;
declare function SvgGridOff(props: IconBaseProps): JSX.Element;
declare function SvgGridOn(props: IconBaseProps): JSX.Element;
declare function SvgHdrEnhancedSelect(props: IconBaseProps): JSX.Element;
declare function SvgHdrOff(props: IconBaseProps): JSX.Element;
declare function SvgHdrOn(props: IconBaseProps): JSX.Element;
declare function SvgHdrPlus(props: IconBaseProps): JSX.Element;
declare function SvgHdrStrong(props: IconBaseProps): JSX.Element;
declare function SvgHdrWeak(props: IconBaseProps): JSX.Element;
declare function SvgHealing(props: IconBaseProps): JSX.Element;
declare function SvgHevc(props: IconBaseProps): JSX.Element;
declare function SvgHideImage(props: IconBaseProps): JSX.Element;
declare function SvgImageAspectRatio(props: IconBaseProps): JSX.Element;
declare function SvgImageNotSupported(props: IconBaseProps): JSX.Element;
declare function SvgImageSearch(props: IconBaseProps): JSX.Element;
declare function SvgImage(props: IconBaseProps): JSX.Element;
declare function SvgIncompleteCircle(props: IconBaseProps): JSX.Element;
declare function SvgIso(props: IconBaseProps): JSX.Element;
declare function SvgLandscape(props: IconBaseProps): JSX.Element;
declare function SvgLeakAdd(props: IconBaseProps): JSX.Element;
declare function SvgLeakRemove(props: IconBaseProps): JSX.Element;
declare function SvgLens(props: IconBaseProps): JSX.Element;
declare function SvgLinkedCamera(props: IconBaseProps): JSX.Element;
declare function SvgLogoDev(props: IconBaseProps): JSX.Element;
declare function SvgLooks3(props: IconBaseProps): JSX.Element;
declare function SvgLooks4(props: IconBaseProps): JSX.Element;
declare function SvgLooks5(props: IconBaseProps): JSX.Element;
declare function SvgLooks6(props: IconBaseProps): JSX.Element;
declare function SvgLooksOne(props: IconBaseProps): JSX.Element;
declare function SvgLooksTwo(props: IconBaseProps): JSX.Element;
declare function SvgLooks(props: IconBaseProps): JSX.Element;
declare function SvgLoupe(props: IconBaseProps): JSX.Element;
declare function SvgMicExternalOff(props: IconBaseProps): JSX.Element;
declare function SvgMicExternalOn(props: IconBaseProps): JSX.Element;
declare function SvgMonochromePhotos(props: IconBaseProps): JSX.Element;
declare function SvgMotionPhotosAuto(props: IconBaseProps): JSX.Element;
declare function SvgMotionPhotosOff(props: IconBaseProps): JSX.Element;
declare function SvgMotionPhotosOn(props: IconBaseProps): JSX.Element;
declare function SvgMotionPhotosPause(props: IconBaseProps): JSX.Element;
declare function SvgMotionPhotosPaused(props: IconBaseProps): JSX.Element;
declare function SvgMovieCreation(props: IconBaseProps): JSX.Element;
declare function SvgMovieFilter(props: IconBaseProps): JSX.Element;
declare function SvgMp(props: IconBaseProps): JSX.Element;
declare function SvgMusicNote(props: IconBaseProps): JSX.Element;
declare function SvgMusicOff(props: IconBaseProps): JSX.Element;
declare function SvgNaturePeople(props: IconBaseProps): JSX.Element;
declare function SvgNature(props: IconBaseProps): JSX.Element;
declare function SvgNavigateBefore(props: IconBaseProps): JSX.Element;
declare function SvgNavigateNext(props: IconBaseProps): JSX.Element;
declare function SvgPalette(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaFishEye(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaHorizontalSelect(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaHorizontal(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaPhotosphereSelect(
  props: IconBaseProps
): JSX.Element;
declare function SvgPanoramaPhotosphere(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaVerticalSelect(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaVertical(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaWideAngleSelect(props: IconBaseProps): JSX.Element;
declare function SvgPanoramaWideAngle(props: IconBaseProps): JSX.Element;
declare function SvgPanorama(props: IconBaseProps): JSX.Element;
declare function SvgPhotoAlbum(props: IconBaseProps): JSX.Element;
declare function SvgPhotoCameraBack(props: IconBaseProps): JSX.Element;
declare function SvgPhotoCameraFront(props: IconBaseProps): JSX.Element;
declare function SvgPhotoCamera(props: IconBaseProps): JSX.Element;
declare function SvgPhotoFilter(props: IconBaseProps): JSX.Element;
declare function SvgPhotoLibrary(props: IconBaseProps): JSX.Element;
declare function SvgPhotoSizeSelectActual(props: IconBaseProps): JSX.Element;
declare function SvgPhotoSizeSelectLarge(props: IconBaseProps): JSX.Element;
declare function SvgPhotoSizeSelectSmall(props: IconBaseProps): JSX.Element;
declare function SvgPhoto(props: IconBaseProps): JSX.Element;
declare function SvgPictureAsPdf(props: IconBaseProps): JSX.Element;
declare function SvgPortrait(props: IconBaseProps): JSX.Element;
declare function SvgRawOff(props: IconBaseProps): JSX.Element;
declare function SvgRawOn(props: IconBaseProps): JSX.Element;
declare function SvgReceiptLong(props: IconBaseProps): JSX.Element;
declare function SvgRemoveRedEye(props: IconBaseProps): JSX.Element;
declare function SvgRotate90DegreesCcw(props: IconBaseProps): JSX.Element;
declare function SvgRotate90DegreesCw(props: IconBaseProps): JSX.Element;
declare function SvgRotateLeft(props: IconBaseProps): JSX.Element;
declare function SvgRotateRight(props: IconBaseProps): JSX.Element;
declare function SvgShutterSpeed(props: IconBaseProps): JSX.Element;
declare function SvgSlideshow(props: IconBaseProps): JSX.Element;
declare function SvgStraighten(props: IconBaseProps): JSX.Element;
declare function SvgStyle(props: IconBaseProps): JSX.Element;
declare function SvgSwitchCamera(props: IconBaseProps): JSX.Element;
declare function SvgSwitchVideo(props: IconBaseProps): JSX.Element;
declare function SvgTagFaces(props: IconBaseProps): JSX.Element;
declare function SvgTexture(props: IconBaseProps): JSX.Element;
declare function SvgThermostatAuto(props: IconBaseProps): JSX.Element;
declare function SvgTimelapse(props: IconBaseProps): JSX.Element;
declare function SvgTimer10(props: IconBaseProps): JSX.Element;
declare function SvgTimer3(props: IconBaseProps): JSX.Element;
declare function SvgTimerOff(props: IconBaseProps): JSX.Element;
declare function SvgTimer(props: IconBaseProps): JSX.Element;
declare function SvgTonality(props: IconBaseProps): JSX.Element;
declare function SvgTransform(props: IconBaseProps): JSX.Element;
declare function SvgTune(props: IconBaseProps): JSX.Element;
declare function SvgVideoCameraBack(props: IconBaseProps): JSX.Element;
declare function SvgVideoCameraFront(props: IconBaseProps): JSX.Element;
declare function SvgVideoStable(props: IconBaseProps): JSX.Element;
declare function SvgViewComfy(props: IconBaseProps): JSX.Element;
declare function SvgViewCompact(props: IconBaseProps): JSX.Element;
declare function SvgVignette(props: IconBaseProps): JSX.Element;
declare function SvgVrpano(props: IconBaseProps): JSX.Element;
declare function SvgWbAuto(props: IconBaseProps): JSX.Element;
declare function SvgWbCloudy(props: IconBaseProps): JSX.Element;
declare function SvgWbIncandescent(props: IconBaseProps): JSX.Element;
declare function SvgWbIridescent(props: IconBaseProps): JSX.Element;
declare function SvgWbShade(props: IconBaseProps): JSX.Element;
declare function SvgWbSunny(props: IconBaseProps): JSX.Element;
declare function SvgWbTwilight(props: IconBaseProps): JSX.Element;

declare function SvgAcUnit(props: IconBaseProps): JSX.Element;
declare function SvgAirportShuttle(props: IconBaseProps): JSX.Element;
declare function SvgAllInclusive(props: IconBaseProps): JSX.Element;
declare function SvgApartment(props: IconBaseProps): JSX.Element;
declare function SvgBabyChangingStation(props: IconBaseProps): JSX.Element;
declare function SvgBackpack(props: IconBaseProps): JSX.Element;
declare function SvgBalcony(props: IconBaseProps): JSX.Element;
declare function SvgBathtub(props: IconBaseProps): JSX.Element;
declare function SvgBeachAccess(props: IconBaseProps): JSX.Element;
declare function SvgBento(props: IconBaseProps): JSX.Element;
declare function SvgBungalow(props: IconBaseProps): JSX.Element;
declare function SvgBusinessCenter(props: IconBaseProps): JSX.Element;
declare function SvgCabin(props: IconBaseProps): JSX.Element;
declare function SvgCarpenter(props: IconBaseProps): JSX.Element;
declare function SvgCasino(props: IconBaseProps): JSX.Element;
declare function SvgChalet(props: IconBaseProps): JSX.Element;
declare function SvgChargingStation(props: IconBaseProps): JSX.Element;
declare function SvgCheckroom(props: IconBaseProps): JSX.Element;
declare function SvgChildCare(props: IconBaseProps): JSX.Element;
declare function SvgChildFriendly(props: IconBaseProps): JSX.Element;
declare function SvgCorporateFare(props: IconBaseProps): JSX.Element;
declare function SvgCottage(props: IconBaseProps): JSX.Element;
declare function SvgCountertops(props: IconBaseProps): JSX.Element;
declare function SvgCrib(props: IconBaseProps): JSX.Element;
declare function SvgDesk(props: IconBaseProps): JSX.Element;
declare function SvgDoNotStep(props: IconBaseProps): JSX.Element;
declare function SvgDoNotTouch(props: IconBaseProps): JSX.Element;
declare function SvgDry(props: IconBaseProps): JSX.Element;
declare function SvgElevator(props: IconBaseProps): JSX.Element;
declare function SvgEscalatorWarning(props: IconBaseProps): JSX.Element;
declare function SvgEscalator(props: IconBaseProps): JSX.Element;
declare function SvgFamilyRestroom(props: IconBaseProps): JSX.Element;
declare function SvgFence(props: IconBaseProps): JSX.Element;
declare function SvgFireExtinguisher(props: IconBaseProps): JSX.Element;
declare function SvgFitnessCenter(props: IconBaseProps): JSX.Element;
declare function SvgFoodBank(props: IconBaseProps): JSX.Element;
declare function SvgFoundation(props: IconBaseProps): JSX.Element;
declare function SvgFreeBreakfast(props: IconBaseProps): JSX.Element;
declare function SvgGite(props: IconBaseProps): JSX.Element;
declare function SvgGolfCourse(props: IconBaseProps): JSX.Element;
declare function SvgGrass(props: IconBaseProps): JSX.Element;
declare function SvgHolidayVillage(props: IconBaseProps): JSX.Element;
declare function SvgHotTub(props: IconBaseProps): JSX.Element;
declare function SvgHouseSiding(props: IconBaseProps): JSX.Element;
declare function SvgHouse(props: IconBaseProps): JSX.Element;
declare function SvgHouseboat(props: IconBaseProps): JSX.Element;
declare function SvgIron(props: IconBaseProps): JSX.Element;
declare function SvgKitchen(props: IconBaseProps): JSX.Element;
declare function SvgMeetingRoom(props: IconBaseProps): JSX.Element;
declare function SvgMicrowave(props: IconBaseProps): JSX.Element;
declare function SvgNightShelter(props: IconBaseProps): JSX.Element;
declare function SvgNoBackpack(props: IconBaseProps): JSX.Element;
declare function SvgNoCell(props: IconBaseProps): JSX.Element;
declare function SvgNoDrinks(props: IconBaseProps): JSX.Element;
declare function SvgNoFlash(props: IconBaseProps): JSX.Element;
declare function SvgNoFood(props: IconBaseProps): JSX.Element;
declare function SvgNoMeetingRoom(props: IconBaseProps): JSX.Element;
declare function SvgNoPhotography(props: IconBaseProps): JSX.Element;
declare function SvgNoStroller(props: IconBaseProps): JSX.Element;
declare function SvgOtherHouses(props: IconBaseProps): JSX.Element;
declare function SvgPool(props: IconBaseProps): JSX.Element;
declare function SvgRiceBowl(props: IconBaseProps): JSX.Element;
declare function SvgRoofing(props: IconBaseProps): JSX.Element;
declare function SvgRoomPreferences(props: IconBaseProps): JSX.Element;
declare function SvgRoomService(props: IconBaseProps): JSX.Element;
declare function SvgRvHookup(props: IconBaseProps): JSX.Element;
declare function SvgSmokeFree(props: IconBaseProps): JSX.Element;
declare function SvgSmokingRooms(props: IconBaseProps): JSX.Element;
declare function SvgSoap(props: IconBaseProps): JSX.Element;
declare function SvgSpa(props: IconBaseProps): JSX.Element;
declare function SvgSportsBar(props: IconBaseProps): JSX.Element;
declare function SvgStairs(props: IconBaseProps): JSX.Element;
declare function SvgStorefront(props: IconBaseProps): JSX.Element;
declare function SvgStroller(props: IconBaseProps): JSX.Element;
declare function SvgTapas(props: IconBaseProps): JSX.Element;
declare function SvgTty(props: IconBaseProps): JSX.Element;
declare function SvgUmbrella(props: IconBaseProps): JSX.Element;
declare function SvgVapeFree(props: IconBaseProps): JSX.Element;
declare function SvgVapingRooms(props: IconBaseProps): JSX.Element;
declare function SvgVilla(props: IconBaseProps): JSX.Element;
declare function SvgWash(props: IconBaseProps): JSX.Element;
declare function SvgWaterDamage(props: IconBaseProps): JSX.Element;
declare function SvgWheelchairPickup(props: IconBaseProps): JSX.Element;

declare function Svg18UpRating(props: IconBaseProps): JSX.Element;
declare function Svg6FtApart(props: IconBaseProps): JSX.Element;
declare function SvgAddModerator(props: IconBaseProps): JSX.Element;
declare function SvgAddReaction(props: IconBaseProps): JSX.Element;
declare function SvgArchitecture(props: IconBaseProps): JSX.Element;
declare function SvgBackHand(props: IconBaseProps): JSX.Element;
declare function SvgBoy(props: IconBaseProps): JSX.Element;
declare function SvgCake(props: IconBaseProps): JSX.Element;
declare function SvgCatchingPokemon(props: IconBaseProps): JSX.Element;
declare function SvgCleanHands(props: IconBaseProps): JSX.Element;
declare function SvgCo2(props: IconBaseProps): JSX.Element;
declare function SvgCompost(props: IconBaseProps): JSX.Element;
declare function SvgConnectWithoutContact(props: IconBaseProps): JSX.Element;
declare function SvgConstruction(props: IconBaseProps): JSX.Element;
declare function SvgCookie(props: IconBaseProps): JSX.Element;
declare function SvgCoronavirus(props: IconBaseProps): JSX.Element;
declare function SvgCrueltyFree(props: IconBaseProps): JSX.Element;
declare function SvgCyclone(props: IconBaseProps): JSX.Element;
declare function SvgDeck(props: IconBaseProps): JSX.Element;
declare function SvgDomainAdd(props: IconBaseProps): JSX.Element;
declare function SvgDomain(props: IconBaseProps): JSX.Element;
declare function SvgDownhillSkiing(props: IconBaseProps): JSX.Element;
declare function SvgEditNotifications(props: IconBaseProps): JSX.Element;
declare function SvgElderlyWoman(props: IconBaseProps): JSX.Element;
declare function SvgElderly(props: IconBaseProps): JSX.Element;
declare function SvgEmojiEmotions(props: IconBaseProps): JSX.Element;
declare function SvgEmojiEvents(props: IconBaseProps): JSX.Element;
declare function SvgEmojiFoodBeverage(props: IconBaseProps): JSX.Element;
declare function SvgEmojiNature(props: IconBaseProps): JSX.Element;
declare function SvgEmojiObjects(props: IconBaseProps): JSX.Element;
declare function SvgEmojiPeople(props: IconBaseProps): JSX.Element;
declare function SvgEmojiSymbols(props: IconBaseProps): JSX.Element;
declare function SvgEmojiTransportation(props: IconBaseProps): JSX.Element;
declare function SvgEngineering(props: IconBaseProps): JSX.Element;
declare function SvgFemale(props: IconBaseProps): JSX.Element;
declare function SvgFireplace(props: IconBaseProps): JSX.Element;
declare function SvgFitbit(props: IconBaseProps): JSX.Element;
declare function SvgFlood(props: IconBaseProps): JSX.Element;
declare function SvgFollowTheSigns(props: IconBaseProps): JSX.Element;
declare function SvgFrontHand(props: IconBaseProps): JSX.Element;
declare function SvgGirl(props: IconBaseProps): JSX.Element;
declare function SvgGroupAdd(props: IconBaseProps): JSX.Element;
declare function SvgGroupOff(props: IconBaseProps): JSX.Element;
declare function SvgGroupRemove(props: IconBaseProps): JSX.Element;
declare function SvgGroup(props: IconBaseProps): JSX.Element;
declare function SvgGroups(props: IconBaseProps): JSX.Element;
declare function SvgHandshake(props: IconBaseProps): JSX.Element;
declare function SvgHealthAndSafety(props: IconBaseProps): JSX.Element;
declare function SvgHeartBroken(props: IconBaseProps): JSX.Element;
declare function SvgHiking(props: IconBaseProps): JSX.Element;
declare function SvgHistoryEdu(props: IconBaseProps): JSX.Element;
declare function SvgHive(props: IconBaseProps): JSX.Element;
declare function SvgIceSkating(props: IconBaseProps): JSX.Element;
declare function SvgInterests(props: IconBaseProps): JSX.Element;
declare function SvgIosShare(props: IconBaseProps): JSX.Element;
declare function SvgKayaking(props: IconBaseProps): JSX.Element;
declare function SvgKingBed(props: IconBaseProps): JSX.Element;
declare function SvgKitesurfing(props: IconBaseProps): JSX.Element;
declare function SvgLandslide(props: IconBaseProps): JSX.Element;
declare function SvgLocationCity(props: IconBaseProps): JSX.Element;
declare function SvgLuggage(props: IconBaseProps): JSX.Element;
declare function SvgMale(props: IconBaseProps): JSX.Element;
declare function SvgMan(props: IconBaseProps): JSX.Element;
declare function SvgMasks(props: IconBaseProps): JSX.Element;
declare function SvgMilitaryTech(props: IconBaseProps): JSX.Element;
declare function SvgMoodBad(props: IconBaseProps): JSX.Element;
declare function SvgMood(props: IconBaseProps): JSX.Element;
declare function SvgNightsStay(props: IconBaseProps): JSX.Element;
declare function SvgNoAdultContent(props: IconBaseProps): JSX.Element;
declare function SvgNoLuggage(props: IconBaseProps): JSX.Element;
declare function SvgNordicWalking(props: IconBaseProps): JSX.Element;
declare function SvgNotificationAdd(props: IconBaseProps): JSX.Element;
declare function SvgNotificationsActive(props: IconBaseProps): JSX.Element;
declare function SvgNotificationsNone(props: IconBaseProps): JSX.Element;
declare function SvgNotificationsOff(props: IconBaseProps): JSX.Element;
declare function SvgNotificationsPaused(props: IconBaseProps): JSX.Element;
declare function SvgNotifications(props: IconBaseProps): JSX.Element;
declare function SvgOutdoorGrill(props: IconBaseProps): JSX.Element;
declare function SvgPages(props: IconBaseProps): JSX.Element;
declare function SvgParagliding(props: IconBaseProps): JSX.Element;
declare function SvgPartyMode(props: IconBaseProps): JSX.Element;
declare function SvgPeopleAlt(props: IconBaseProps): JSX.Element;
declare function SvgPeopleOutline(props: IconBaseProps): JSX.Element;
declare function SvgPeople(props: IconBaseProps): JSX.Element;
declare function SvgPersonAddAlt1(props: IconBaseProps): JSX.Element;
declare function SvgPersonAddAlt(props: IconBaseProps): JSX.Element;
declare function SvgPersonAdd(props: IconBaseProps): JSX.Element;
declare function SvgPersonOff(props: IconBaseProps): JSX.Element;
declare function SvgPersonOutline(props: IconBaseProps): JSX.Element;
declare function SvgPersonRemoveAlt1(props: IconBaseProps): JSX.Element;
declare function SvgPersonRemove(props: IconBaseProps): JSX.Element;
declare function SvgPerson(props: IconBaseProps): JSX.Element;
declare function SvgPersonalInjury(props: IconBaseProps): JSX.Element;
declare function SvgPianoOff(props: IconBaseProps): JSX.Element;
declare function SvgPiano(props: IconBaseProps): JSX.Element;
declare function SvgPix(props: IconBaseProps): JSX.Element;
declare function SvgPlusOne(props: IconBaseProps): JSX.Element;
declare function SvgPoll(props: IconBaseProps): JSX.Element;
declare function SvgPrecisionManufacturing(props: IconBaseProps): JSX.Element;
declare function SvgPsychology(props: IconBaseProps): JSX.Element;
declare function SvgPublicOff(props: IconBaseProps): JSX.Element;
declare function SvgPublic(props: IconBaseProps): JSX.Element;
declare function SvgRealEstateAgent(props: IconBaseProps): JSX.Element;
declare function SvgRecommend(props: IconBaseProps): JSX.Element;
declare function SvgRecycling(props: IconBaseProps): JSX.Element;
declare function SvgReduceCapacity(props: IconBaseProps): JSX.Element;
declare function SvgRemoveModerator(props: IconBaseProps): JSX.Element;
declare function SvgRollerSkating(props: IconBaseProps): JSX.Element;
declare function SvgSafetyDivider(props: IconBaseProps): JSX.Element;
declare function SvgSanitizer(props: IconBaseProps): JSX.Element;
declare function SvgScale(props: IconBaseProps): JSX.Element;
declare function SvgSchool(props: IconBaseProps): JSX.Element;
declare function SvgScience(props: IconBaseProps): JSX.Element;
declare function SvgScoreboard(props: IconBaseProps): JSX.Element;
declare function SvgScubaDiving(props: IconBaseProps): JSX.Element;
declare function SvgSelfImprovement(props: IconBaseProps): JSX.Element;
declare function SvgSentimentDissatisfied(props: IconBaseProps): JSX.Element;
declare function SvgSentimentNeutral(props: IconBaseProps): JSX.Element;
declare function SvgSentimentSatisfied(props: IconBaseProps): JSX.Element;
declare function SvgSentimentVeryDissatisfied(
  props: IconBaseProps
): JSX.Element;
declare function SvgSentimentVerySatisfied(props: IconBaseProps): JSX.Element;
declare function SvgSevereCold(props: IconBaseProps): JSX.Element;
declare function SvgShare(props: IconBaseProps): JSX.Element;
declare function SvgSick(props: IconBaseProps): JSX.Element;
declare function SvgSignLanguage(props: IconBaseProps): JSX.Element;
declare function SvgSingleBed(props: IconBaseProps): JSX.Element;
declare function SvgSkateboarding(props: IconBaseProps): JSX.Element;
declare function SvgSledding(props: IconBaseProps): JSX.Element;
declare function SvgSnowboarding(props: IconBaseProps): JSX.Element;
declare function SvgSnowshoeing(props: IconBaseProps): JSX.Element;
declare function SvgSocialDistance(props: IconBaseProps): JSX.Element;
declare function SvgSouthAmerica(props: IconBaseProps): JSX.Element;
declare function SvgSportsBaseball(props: IconBaseProps): JSX.Element;
declare function SvgSportsBasketball(props: IconBaseProps): JSX.Element;
declare function SvgSportsCricket(props: IconBaseProps): JSX.Element;
declare function SvgSportsEsports(props: IconBaseProps): JSX.Element;
declare function SvgSportsFootball(props: IconBaseProps): JSX.Element;
declare function SvgSportsGolf(props: IconBaseProps): JSX.Element;
declare function SvgSportsGymnastics(props: IconBaseProps): JSX.Element;
declare function SvgSportsHandball(props: IconBaseProps): JSX.Element;
declare function SvgSportsHockey(props: IconBaseProps): JSX.Element;
declare function SvgSportsKabaddi(props: IconBaseProps): JSX.Element;
declare function SvgSportsMartialArts(props: IconBaseProps): JSX.Element;
declare function SvgSportsMma(props: IconBaseProps): JSX.Element;
declare function SvgSportsMotorsports(props: IconBaseProps): JSX.Element;
declare function SvgSportsRugby(props: IconBaseProps): JSX.Element;
declare function SvgSportsSoccer(props: IconBaseProps): JSX.Element;
declare function SvgSportsTennis(props: IconBaseProps): JSX.Element;
declare function SvgSportsVolleyball(props: IconBaseProps): JSX.Element;
declare function SvgSports(props: IconBaseProps): JSX.Element;
declare function SvgSurfing(props: IconBaseProps): JSX.Element;
declare function SvgSwitchAccount(props: IconBaseProps): JSX.Element;
declare function SvgThumbDownAlt(props: IconBaseProps): JSX.Element;
declare function SvgThumbUpAlt(props: IconBaseProps): JSX.Element;
declare function SvgThunderstorm(props: IconBaseProps): JSX.Element;
declare function SvgTornado(props: IconBaseProps): JSX.Element;
declare function SvgTransgender(props: IconBaseProps): JSX.Element;
declare function SvgTravelExplore(props: IconBaseProps): JSX.Element;
declare function SvgTsunami(props: IconBaseProps): JSX.Element;
declare function SvgVaccines(props: IconBaseProps): JSX.Element;
declare function SvgVolcano(props: IconBaseProps): JSX.Element;
declare function SvgWallet(props: IconBaseProps): JSX.Element;
declare function SvgWaterDrop(props: IconBaseProps): JSX.Element;
declare function SvgWavingHand(props: IconBaseProps): JSX.Element;
declare function SvgWhatsapp(props: IconBaseProps): JSX.Element;
declare function SvgWhatshot(props: IconBaseProps): JSX.Element;
declare function SvgWoman(props: IconBaseProps): JSX.Element;
declare function SvgWorkspacePremium(props: IconBaseProps): JSX.Element;

declare function SvgCheckBoxOutlineBlank(props: IconBaseProps): JSX.Element;
declare function SvgCheckBox(props: IconBaseProps): JSX.Element;
declare function SvgIndeterminateCheckBox(props: IconBaseProps): JSX.Element;
declare function SvgRadioButtonChecked(props: IconBaseProps): JSX.Element;
declare function SvgRadioButtonUnchecked(props: IconBaseProps): JSX.Element;
declare function SvgStarBorderPurple500(props: IconBaseProps): JSX.Element;
declare function SvgStarBorder(props: IconBaseProps): JSX.Element;
declare function SvgStarHalf(props: IconBaseProps): JSX.Element;
declare function SvgStarOutline(props: IconBaseProps): JSX.Element;
declare function SvgStarPurple500(props: IconBaseProps): JSX.Element;
declare function SvgStar(props: IconBaseProps): JSX.Element;
declare function SvgToggleOff(props: IconBaseProps): JSX.Element;
declare function SvgToggleOn(props: IconBaseProps): JSX.Element;

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
  Autocomplete,
  _default$e as Badge,
  _default$d as Button,
  Card,
  Checkbox,
  _default$c as Chip,
  _default$1 as Code,
  Dialog,
  Dropdown,
  _default$a as Input,
  _default$9 as Menu,
  _default$8 as MenuItem,
  NudgeManager,
  _default$7 as Pagination,
  Radio,
  _default$6 as Stepper,
  Svg10K,
  Svg10Mp,
  Svg11Mp,
  Svg124,
  Svg12Mp,
  Svg13Mp,
  Svg14Mp,
  Svg15Mp,
  Svg16Mp,
  Svg17Mp,
  Svg18Mp,
  Svg18UpRating,
  Svg19Mp,
  Svg1K,
  Svg1XMobiledata,
  Svg20Mp,
  Svg21Mp,
  Svg22Mp,
  Svg23Mp,
  Svg24Mp,
  Svg2KPlus,
  Svg2Mp,
  Svg30Fps,
  Svg30FpsSelect,
  Svg361,
  Svg3DRotation,
  Svg3GMobiledata,
  Svg3K,
  Svg3KPlus,
  Svg3Mp,
  Svg3P,
  Svg4GMobiledata,
  Svg4GPlusMobiledata,
  Svg4K,
  Svg4KPlus,
  Svg4Mp,
  Svg5G,
  Svg5Mp,
  Svg60Fps,
  Svg60FpsSelect,
  Svg6FtApart,
  Svg6K,
  Svg6KPlus,
  Svg6Mp,
  Svg7K,
  Svg7KPlus,
  Svg7Mp,
  Svg8K,
  Svg8KPlus,
  Svg8Mp,
  Svg9Mp,
  SvgAbc,
  SvgAcUnit,
  SvgAccessAlarm,
  SvgAccessAlarms,
  SvgAccessTime,
  SvgAccessTimeFilled,
  SvgAccessibility,
  SvgAccessibilityNew,
  SvgAccessible,
  SvgAccessibleForward,
  SvgAccountBalance,
  SvgAccountBalanceWallet,
  SvgAccountBox,
  SvgAccountCircle,
  SvgAccountTree,
  SvgAdUnits,
  SvgAdb,
  SvgAdd,
  SvgAddAPhoto,
  SvgAddAlarm,
  SvgAddAlert,
  SvgAddBox,
  SvgAddBusiness,
  SvgAddCard,
  SvgAddChart,
  SvgAddCircle,
  SvgAddCircleOutline,
  SvgAddComment,
  SvgAddIcCall,
  SvgAddLink,
  SvgAddLocation,
  SvgAddLocationAlt,
  SvgAddModerator,
  SvgAddPhotoAlternate,
  SvgAddReaction,
  SvgAddRoad,
  SvgAddShoppingCart,
  SvgAddTask,
  SvgAddToDrive,
  SvgAddToHomeScreen,
  SvgAddToPhotos,
  SvgAddToQueue,
  SvgAddchart,
  SvgAdfScanner,
  SvgAdjust,
  SvgAdminPanelSettings,
  SvgAdsClick,
  SvgAgriculture,
  SvgAir,
  SvgAirlineSeatFlat,
  SvgAirlineSeatFlatAngled,
  SvgAirlineSeatIndividualSuite,
  SvgAirlineSeatLegroomExtra,
  SvgAirlineSeatLegroomNormal,
  SvgAirlineSeatLegroomReduced,
  SvgAirlineSeatReclineExtra,
  SvgAirlineSeatReclineNormal,
  SvgAirlineStops,
  SvgAirlines,
  SvgAirplaneTicket,
  SvgAirplanemodeActive,
  SvgAirplanemodeInactive,
  SvgAirplay,
  SvgAirportShuttle,
  SvgAlarm,
  SvgAlarmAdd,
  SvgAlarmOff,
  SvgAlarmOn,
  SvgAlbum,
  SvgAlignHorizontalCenter,
  SvgAlignHorizontalLeft,
  SvgAlignHorizontalRight,
  SvgAlignVerticalBottom,
  SvgAlignVerticalCenter,
  SvgAlignVerticalTop,
  SvgAllInbox,
  SvgAllInclusive,
  SvgAllOut,
  SvgAltRoute,
  SvgAlternateEmail,
  SvgAnalytics,
  SvgAnchor,
  SvgAndroid,
  SvgAnimation,
  SvgAnnouncement,
  SvgAod,
  SvgApartment,
  SvgApi,
  SvgAppBlocking,
  SvgAppRegistration,
  SvgAppSettingsAlt,
  SvgAppShortcut,
  SvgApproval,
  SvgApps,
  SvgAppsOutage,
  SvgArchitecture,
  SvgArchive,
  SvgAreaChart,
  SvgArrowBack,
  SvgArrowBackIos,
  SvgArrowBackIosNew,
  SvgArrowCircleDown,
  SvgArrowCircleLeft,
  SvgArrowCircleRight,
  SvgArrowCircleUp,
  SvgArrowDownward,
  SvgArrowDropDown,
  SvgArrowDropDownCircle,
  SvgArrowDropUp,
  SvgArrowForward,
  SvgArrowForwardIos,
  SvgArrowLeft,
  SvgArrowRight,
  SvgArrowRightAlt,
  SvgArrowUpward,
  SvgArtTrack,
  SvgArticle,
  SvgAspectRatio,
  SvgAssessment,
  SvgAssignment,
  SvgAssignmentInd,
  SvgAssignmentLate,
  SvgAssignmentReturn,
  SvgAssignmentReturned,
  SvgAssignmentTurnedIn,
  SvgAssistant,
  SvgAssistantDirection,
  SvgAssistantPhoto,
  SvgAssuredWorkload,
  SvgAtm,
  SvgAttachEmail,
  SvgAttachFile,
  SvgAttachMoney,
  SvgAttachment,
  SvgAttractions,
  SvgAttribution,
  SvgAudioFile,
  SvgAudiotrack,
  SvgAutoAwesome,
  SvgAutoAwesomeMosaic,
  SvgAutoAwesomeMotion,
  SvgAutoDelete,
  SvgAutoFixHigh,
  SvgAutoFixNormal,
  SvgAutoFixOff,
  SvgAutoGraph,
  SvgAutoMode,
  SvgAutoStories,
  SvgAutofpsSelect,
  SvgAutorenew,
  SvgAvTimer,
  SvgBabyChangingStation,
  SvgBackHand,
  SvgBackpack,
  SvgBackspace,
  SvgBackup,
  SvgBackupTable,
  SvgBadge,
  SvgBakeryDining,
  SvgBalance,
  SvgBalcony,
  SvgBallot,
  SvgBarChart,
  SvgBatchPrediction,
  SvgBathroom,
  SvgBathtub,
  SvgBattery0Bar,
  SvgBattery1Bar,
  SvgBattery2Bar,
  SvgBattery3Bar,
  SvgBattery4Bar,
  SvgBattery5Bar,
  SvgBattery6Bar,
  SvgBatteryAlert,
  SvgBatteryChargingFull,
  SvgBatteryFull,
  SvgBatterySaver,
  SvgBatteryStd,
  SvgBatteryUnknown,
  SvgBeachAccess,
  SvgBed,
  SvgBedroomBaby,
  SvgBedroomChild,
  SvgBedroomParent,
  SvgBedtime,
  SvgBedtimeOff,
  SvgBeenhere,
  SvgBento,
  SvgBikeScooter,
  SvgBiotech,
  SvgBlender,
  SvgBlinds,
  SvgBlindsClosed,
  SvgBlock,
  SvgBloodtype,
  SvgBluetooth,
  SvgBluetoothAudio,
  SvgBluetoothConnected,
  SvgBluetoothDisabled,
  SvgBluetoothDrive,
  SvgBluetoothSearching,
  SvgBlurCircular,
  SvgBlurLinear,
  SvgBlurOff,
  SvgBlurOn,
  SvgBolt,
  SvgBook,
  SvgBookOnline,
  SvgBookmark,
  SvgBookmarkAdd,
  SvgBookmarkAdded,
  SvgBookmarkBorder,
  SvgBookmarkRemove,
  SvgBookmarks,
  SvgBorderAll,
  SvgBorderBottom,
  SvgBorderClear,
  SvgBorderColor,
  SvgBorderHorizontal,
  SvgBorderInner,
  SvgBorderLeft,
  SvgBorderOuter,
  SvgBorderRight,
  SvgBorderStyle,
  SvgBorderTop,
  SvgBorderVertical,
  SvgBoy,
  SvgBreakfastDining,
  SvgBrightness1,
  SvgBrightness2,
  SvgBrightness3,
  SvgBrightness4,
  SvgBrightness5,
  SvgBrightness6,
  SvgBrightness7,
  SvgBrightnessAuto,
  SvgBrightnessHigh,
  SvgBrightnessLow,
  SvgBrightnessMedium,
  SvgBroadcastOnHome,
  SvgBroadcastOnPersonal,
  SvgBrokenImage,
  SvgBrowseGallery,
  SvgBrowserNotSupported,
  SvgBrowserUpdated,
  SvgBrunchDining,
  SvgBrush,
  SvgBubbleChart,
  SvgBugReport,
  SvgBuild,
  SvgBuildCircle,
  SvgBulb,
  SvgBulkAction,
  SvgBungalow,
  SvgBurstMode,
  SvgBusAlert,
  SvgBusiness,
  SvgBusinessCenter,
  SvgCabin,
  SvgCable,
  SvgCached,
  SvgCake,
  SvgCalculate,
  SvgCalendarMonth,
  SvgCalendarToday,
  SvgCalendarViewDay,
  SvgCalendarViewMonth,
  SvgCalendarViewWeek,
  SvgCall,
  SvgCallEnd,
  SvgCallMade,
  SvgCallMerge,
  SvgCallMissed,
  SvgCallMissedOutgoing,
  SvgCallReceived,
  SvgCallSplit,
  SvgCamera,
  SvgCameraAlt,
  SvgCameraEnhance,
  SvgCameraFront,
  SvgCameraIndoor,
  SvgCameraOutdoor,
  SvgCameraRear,
  SvgCameraRoll,
  SvgCameraswitch,
  SvgCampaign,
  SvgCancel,
  SvgCancelPresentation,
  SvgCancelScheduleSend,
  SvgCandlestickChart,
  SvgCarCrash,
  SvgCarRental,
  SvgCarRepair,
  SvgCardGiftcard,
  SvgCardMembership,
  SvgCardTravel,
  SvgCarpenter,
  SvgCases,
  SvgCasino,
  SvgCast,
  SvgCastConnected,
  SvgCastForEducation,
  SvgCastle,
  SvgCatchingPokemon,
  SvgCategory,
  SvgCelebration,
  SvgCellTower,
  SvgCellWifi,
  SvgCenterFocusStrong,
  SvgCenterFocusWeak,
  SvgChair,
  SvgChairAlt,
  SvgChalet,
  SvgChangeCircle,
  SvgChangeHistory,
  SvgChargingStation,
  SvgChat,
  SvgChatBubble,
  SvgChatBubbleOutline,
  SvgCheck,
  SvgCheckBox,
  SvgCheckBoxOutlineBlank,
  SvgCheckCircle,
  SvgCheckCircleOutline,
  SvgChecklist,
  SvgChecklistRtl,
  SvgCheckroom,
  SvgChevronLeft,
  SvgChevronRight,
  SvgChildCare,
  SvgChildFriendly,
  SvgChromeReaderMode,
  SvgChurch,
  SvgCircle,
  SvgCircleCompleted,
  SvgCircleDisabled,
  SvgCircleNotifications,
  SvgCircleProgress,
  SvgClass,
  SvgCleanHands,
  SvgCleaningServices,
  SvgClear,
  SvgClearAll,
  SvgClose,
  SvgCloseFullscreen,
  SvgClosedCaption,
  SvgClosedCaptionDisabled,
  SvgClosedCaptionOff,
  SvgCloud,
  SvgCloudCircle,
  SvgCloudDone,
  SvgCloudDownload,
  SvgCloudOff,
  SvgCloudQueue,
  SvgCloudSync,
  SvgCloudUpload,
  SvgCo2,
  SvgCoPresent,
  SvgCode,
  SvgCodeOff,
  SvgCoffee,
  SvgCoffeeMaker,
  SvgCollections,
  SvgCollectionsBookmark,
  SvgColorLens,
  SvgColorize,
  SvgComment,
  SvgCommentBank,
  SvgCommentsDisabled,
  SvgCommit,
  SvgCommute,
  SvgCompare,
  SvgCompareArrows,
  SvgCompassCalibration,
  SvgCompost,
  SvgCompress,
  SvgComputer,
  SvgConfirmationNumber,
  SvgConnectWithoutContact,
  SvgConnectedTv,
  SvgConnectingAirports,
  SvgConstruction,
  SvgContactMail,
  SvgContactPage,
  SvgContactPhone,
  SvgContactSupport,
  SvgContactless,
  SvgContacts,
  SvgContentCopy,
  SvgContentCut,
  SvgContentPaste,
  SvgContentPasteGo,
  SvgContentPasteOff,
  SvgContentPasteSearch,
  SvgContrast,
  SvgControlCamera,
  SvgControlPoint,
  SvgControlPointDuplicate,
  SvgCookie,
  SvgCopyAll,
  SvgCopyright,
  SvgCoronavirus,
  SvgCorporateFare,
  SvgCottage,
  SvgCountertops,
  SvgCreate,
  SvgCreateNewFolder,
  SvgCreditCard,
  SvgCreditCardOff,
  SvgCreditScore,
  SvgCrib,
  SvgCrisisAlert,
  SvgCrop,
  SvgCrop169,
  SvgCrop32,
  SvgCrop54,
  SvgCrop75,
  SvgCropDin,
  SvgCropFree,
  SvgCropLandscape,
  SvgCropOriginal,
  SvgCropPortrait,
  SvgCropRotate,
  SvgCropSquare,
  SvgCrueltyFree,
  SvgCss,
  SvgCurrencyBitcoin,
  SvgCurrencyExchange,
  SvgCurrencyFranc,
  SvgCurrencyLira,
  SvgCurrencyPound,
  SvgCurrencyRuble,
  SvgCurrencyRupee,
  SvgCurrencyYen,
  SvgCurrencyYuan,
  SvgCurtains,
  SvgCurtainsClosed,
  SvgCyclone,
  SvgDangerous,
  SvgDarkMode,
  SvgDashboard,
  SvgDashboardCustomize,
  SvgDataArray,
  SvgDataExploration,
  SvgDataObject,
  SvgDataSaverOff,
  SvgDataSaverOn,
  SvgDataThresholding,
  SvgDataUsage,
  SvgDateRange,
  SvgDeblur,
  SvgDeck,
  SvgDehaze,
  SvgDelete,
  SvgDeleteForever,
  SvgDeleteOutline,
  SvgDeleteSweep,
  SvgDeliveryDining,
  SvgDensityLarge,
  SvgDensityMedium,
  SvgDensitySmall,
  SvgDepartureBoard,
  SvgDescription,
  SvgDeselect,
  SvgDesignServices,
  SvgDesk,
  SvgDesktopAccessDisabled,
  SvgDesktopMac,
  SvgDesktopWindows,
  SvgDetails,
  SvgDeveloperBoard,
  SvgDeveloperBoardOff,
  SvgDeveloperMode,
  SvgDeviceHub,
  SvgDeviceThermostat,
  SvgDeviceUnknown,
  SvgDevices,
  SvgDevicesFold,
  SvgDevicesOther,
  SvgDialerSip,
  SvgDialpad,
  SvgDiamond,
  SvgDifference,
  SvgDining,
  SvgDinnerDining,
  SvgDirections,
  SvgDirectionsBike,
  SvgDirectionsBoat,
  SvgDirectionsBoatFilled,
  SvgDirectionsBus,
  SvgDirectionsBusFilled,
  SvgDirectionsCar,
  SvgDirectionsCarFilled,
  SvgDirectionsOff,
  SvgDirectionsRailway,
  SvgDirectionsRailwayFilled,
  SvgDirectionsRun,
  SvgDirectionsSubway,
  SvgDirectionsSubwayFilled,
  SvgDirectionsTransit,
  SvgDirectionsTransitFilled,
  SvgDirectionsWalk,
  SvgDirtyLens,
  SvgDisabledByDefault,
  SvgDisabledVisible,
  SvgDiscFull,
  SvgDiscount,
  SvgDisplaySettings,
  SvgDns,
  SvgDoDisturb,
  SvgDoDisturbAlt,
  SvgDoDisturbOff,
  SvgDoDisturbOn,
  SvgDoNotDisturb,
  SvgDoNotDisturbAlt,
  SvgDoNotDisturbOff,
  SvgDoNotDisturbOn,
  SvgDoNotDisturbOnTotalSilence,
  SvgDoNotStep,
  SvgDoNotTouch,
  SvgDock,
  SvgDocumentScanner,
  SvgDomain,
  SvgDomainAdd,
  SvgDomainDisabled,
  SvgDomainVerification,
  SvgDone,
  SvgDoneAll,
  SvgDoneOutline,
  SvgDonutLarge,
  SvgDonutSmall,
  SvgDoorBack,
  SvgDoorFront,
  SvgDoorSliding,
  SvgDoorbell,
  SvgDoubleArrow,
  SvgDownhillSkiing,
  SvgDownload,
  SvgDownloadDone,
  SvgDownloadForOffline,
  SvgDownloading,
  SvgDrafts,
  SvgDragHandle,
  SvgDragIndicator,
  SvgDraw,
  SvgDriveEta,
  SvgDriveFileMove,
  SvgDriveFileMoveRtl,
  SvgDriveFileRenameOutline,
  SvgDriveFolderUpload,
  SvgDry,
  SvgDryCleaning,
  SvgDuo,
  SvgDvr,
  SvgDynamicFeed,
  SvgDynamicForm,
  SvgEMobiledata,
  SvgEarbuds,
  SvgEarbudsBattery,
  SvgEast,
  SvgEdgesensorHigh,
  SvgEdgesensorLow,
  SvgEdit,
  SvgEditAttributes,
  SvgEditCalendar,
  SvgEditLocation,
  SvgEditLocationAlt,
  SvgEditNote,
  SvgEditNotifications,
  SvgEditOff,
  SvgEditRoad,
  SvgEgg,
  SvgEggAlt,
  SvgEject,
  SvgElderly,
  SvgElderlyWoman,
  SvgElectricBike,
  SvgElectricBolt,
  SvgElectricCar,
  SvgElectricMeter,
  SvgElectricMoped,
  SvgElectricRickshaw,
  SvgElectricScooter,
  SvgElectricalServices,
  SvgElevator,
  SvgEmail,
  SvgEmergency,
  SvgEmergencyRecording,
  SvgEmergencyShare,
  SvgEmojiEmotions,
  SvgEmojiEvents,
  SvgEmojiFoodBeverage,
  SvgEmojiNature,
  SvgEmojiObjects,
  SvgEmojiPeople,
  SvgEmojiSymbols,
  SvgEmojiTransportation,
  SvgEnergySavingsLeaf,
  SvgEngineering,
  SvgEnhancedEncryption,
  SvgEqualizer,
  SvgError,
  SvgErrorOutline,
  SvgEscalator,
  SvgEscalatorWarning,
  SvgEuro,
  SvgEuroSymbol,
  SvgEvStation,
  SvgEvent,
  SvgEventAvailable,
  SvgEventBusy,
  SvgEventNote,
  SvgEventRepeat,
  SvgEventSeat,
  SvgExitToApp,
  SvgExpand,
  SvgExpandCircleDown,
  SvgExpandLess,
  SvgExpandMore,
  SvgExplicit,
  SvgExplore,
  SvgExploreOff,
  SvgExposure,
  SvgExposureNeg1,
  SvgExposureNeg2,
  SvgExposurePlus1,
  SvgExposurePlus2,
  SvgExposureZero,
  SvgExtension,
  SvgExtensionOff,
  SvgFace,
  SvgFaceRetouchingNatural,
  SvgFaceRetouchingOff,
  SvgFactCheck,
  SvgFactory,
  SvgFamilyRestroom,
  SvgFastfood,
  SvgFavorite,
  SvgFavoriteBorder,
  SvgFax,
  SvgFeaturedPlayList,
  SvgFeaturedVideo,
  SvgFeed,
  SvgFeedback,
  SvgFemale,
  SvgFence,
  SvgFestival,
  SvgFiberDvr,
  SvgFiberManualRecord,
  SvgFiberNew,
  SvgFiberPin,
  SvgFileCopy,
  SvgFileDownload,
  SvgFileDownloadDone,
  SvgFileDownloadOff,
  SvgFileOpen,
  SvgFilePresent,
  SvgFileUpload,
  SvgFilter,
  SvgFilter1,
  SvgFilter2,
  SvgFilter3,
  SvgFilter4,
  SvgFilter5,
  SvgFilter6,
  SvgFilter7,
  SvgFilter8,
  SvgFilter9,
  SvgFilter9Plus,
  SvgFilterAlt,
  SvgFilterAltOff,
  SvgFilterBAndW,
  SvgFilterCenterFocus,
  SvgFilterDrama,
  SvgFilterFrames,
  SvgFilterHdr,
  SvgFilterList,
  SvgFilterListOff,
  SvgFilterNone,
  SvgFilterTiltShift,
  SvgFilterVintage,
  SvgFindInPage,
  SvgFindReplace,
  SvgFingerprint,
  SvgFireExtinguisher,
  SvgFireplace,
  SvgFirstPage,
  SvgFitScreen,
  SvgFitbit,
  SvgFitnessCenter,
  SvgFlag,
  SvgFlagCircle,
  SvgFlaky,
  SvgFlare,
  SvgFlashAuto,
  SvgFlashOff,
  SvgFlashOn,
  SvgFlashlightOff,
  SvgFlashlightOn,
  SvgFlatware,
  SvgFlight,
  SvgFlightClass,
  SvgFlightLand,
  SvgFlightTakeoff,
  SvgFlip,
  SvgFlipCameraAndroid,
  SvgFlipCameraIos,
  SvgFlipToBack,
  SvgFlipToFront,
  SvgFlood,
  SvgFlourescent,
  SvgFlutterDash,
  SvgFmdBad,
  SvgFmdGood,
  SvgFolder,
  SvgFolderCopy,
  SvgFolderDelete,
  SvgFolderOff,
  SvgFolderOpen,
  SvgFolderShared,
  SvgFolderSpecial,
  SvgFolderZip,
  SvgFollowTheSigns,
  SvgFontDownload,
  SvgFontDownloadOff,
  SvgFoodBank,
  SvgForest,
  SvgForkLeft,
  SvgForkRight,
  SvgFormatAlignCenter,
  SvgFormatAlignJustify,
  SvgFormatAlignLeft,
  SvgFormatAlignRight,
  SvgFormatBold,
  SvgFormatClear,
  SvgFormatColorFill,
  SvgFormatColorReset,
  SvgFormatColorText,
  SvgFormatIndentDecrease,
  SvgFormatIndentIncrease,
  SvgFormatItalic,
  SvgFormatLineSpacing,
  SvgFormatListBulleted,
  SvgFormatListNumbered,
  SvgFormatListNumberedRtl,
  SvgFormatOverline,
  SvgFormatPaint,
  SvgFormatQuote,
  SvgFormatShapes,
  SvgFormatSize,
  SvgFormatStrikethrough,
  SvgFormatTextdirectionLToR,
  SvgFormatTextdirectionRToL,
  SvgFormatUnderlined,
  SvgFort,
  SvgForum,
  SvgForward,
  SvgForward30,
  SvgForward5,
  SvgForwardToInbox,
  SvgFoundation,
  SvgFreeBreakfast,
  SvgFreeCancellation,
  SvgFrontHand,
  SvgFullscreen,
  SvgFullscreenExit,
  SvgFunctions,
  SvgGMobiledata,
  SvgGTranslate,
  SvgGamepad,
  SvgGames,
  SvgGarage,
  SvgGasMeter,
  SvgGavel,
  SvgGeneratingTokens,
  SvgGesture,
  SvgGetApp,
  SvgGif,
  SvgGifBox,
  SvgGirl,
  SvgGite,
  SvgGolfCourse,
  SvgGppBad,
  SvgGppGood,
  SvgGppMaybe,
  SvgGpsFixed,
  SvgGpsNotFixed,
  SvgGpsOff,
  SvgGrade,
  SvgGradient,
  SvgGrading,
  SvgGrain,
  SvgGraphicEq,
  SvgGrass,
  SvgGrid3X3,
  SvgGrid4X4,
  SvgGridGoldenratio,
  SvgGridOff,
  SvgGridOn,
  SvgGridView,
  SvgGroup,
  SvgGroupAdd,
  SvgGroupOff,
  SvgGroupRemove,
  SvgGroupWork,
  SvgGroups,
  SvgHMobiledata,
  SvgHPlusMobiledata,
  SvgHail,
  SvgHandshake,
  SvgHandyman,
  SvgHardware,
  SvgHd,
  SvgHdrAuto,
  SvgHdrAutoSelect,
  SvgHdrEnhancedSelect,
  SvgHdrOff,
  SvgHdrOffSelect,
  SvgHdrOn,
  SvgHdrOnSelect,
  SvgHdrPlus,
  SvgHdrStrong,
  SvgHdrWeak,
  SvgHeadphones,
  SvgHeadphonesBattery,
  SvgHeadset,
  SvgHeadsetMic,
  SvgHeadsetOff,
  SvgHealing,
  SvgHealthAndSafety,
  SvgHearing,
  SvgHearingDisabled,
  SvgHeartBroken,
  SvgHeatPump,
  SvgHeight,
  SvgHelp,
  SvgHelpCenter,
  SvgHelpOutline,
  SvgHevc,
  SvgHexagon,
  SvgHideImage,
  SvgHideSource,
  SvgHighlight,
  SvgHighlightAlt,
  SvgHighlightOff,
  SvgHiking,
  SvgHistory,
  SvgHistoryEdu,
  SvgHistoryToggleOff,
  SvgHive,
  SvgHls,
  SvgHlsOff,
  SvgHolidayVillage,
  SvgHome,
  SvgHomeMax,
  SvgHomeMini,
  SvgHomeRepairService,
  SvgHomeWork,
  SvgHorizontalDistribute,
  SvgHorizontalRule,
  SvgHorizontalSplit,
  SvgHotTub,
  SvgHotel,
  SvgHotelClass,
  SvgHourglassBottom,
  SvgHourglassDisabled,
  SvgHourglassEmpty,
  SvgHourglassFull,
  SvgHourglassTop,
  SvgHouse,
  SvgHouseSiding,
  SvgHouseboat,
  SvgHowToReg,
  SvgHowToVote,
  SvgHtml,
  SvgHttp,
  SvgHttps,
  SvgHub,
  SvgHvac,
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
  SvgIceSkating,
  SvgIcecream,
  SvgImage,
  SvgImageAspectRatio,
  SvgImageNotSupported,
  SvgImageSearch,
  SvgImagesearchRoller,
  SvgImportContacts,
  SvgImportExport,
  SvgImportantDevices,
  SvgInbox,
  SvgIncompleteCircle,
  SvgIndeterminateCheckBox,
  SvgInfo,
  SvgInput,
  SvgInsertChart,
  SvgInsertChartOutlined,
  SvgInsertComment,
  SvgInsertDriveFile,
  SvgInsertEmoticon,
  SvgInsertInvitation,
  SvgInsertLink,
  SvgInsertPageBreak,
  SvgInsertPhoto,
  SvgInsights,
  SvgInstallDesktop,
  SvgInstallMobile,
  SvgIntegrationInstructions,
  SvgInterests,
  SvgInventory,
  SvgInventory2,
  SvgInvertColors,
  SvgInvertColorsOff,
  SvgIosShare,
  SvgIron,
  SvgIso,
  SvgJavascript,
  SvgJoinFull,
  SvgJoinInner,
  SvgJoinLeft,
  SvgJoinRight,
  SvgKayaking,
  SvgKebabDining,
  SvgKey,
  SvgKeyOff,
  SvgKeyboard,
  SvgKeyboardAlt,
  SvgKeyboardArrowDown,
  SvgKeyboardArrowLeft,
  SvgKeyboardArrowRight,
  SvgKeyboardArrowUp,
  SvgKeyboardBackspace,
  SvgKeyboardCapslock,
  SvgKeyboardCommandKey,
  SvgKeyboardControlKey,
  SvgKeyboardDoubleArrowDown,
  SvgKeyboardDoubleArrowLeft,
  SvgKeyboardDoubleArrowRight,
  SvgKeyboardDoubleArrowUp,
  SvgKeyboardHide,
  SvgKeyboardOptionKey,
  SvgKeyboardReturn,
  SvgKeyboardTab,
  SvgKeyboardVoice,
  SvgKingBed,
  SvgKitchen,
  SvgKitesurfing,
  SvgLabel,
  SvgLabelImportant,
  SvgLabelOff,
  SvgLan,
  SvgLandscape,
  SvgLandslide,
  SvgLanguage,
  SvgLaptop,
  SvgLaptopChromebook,
  SvgLaptopMac,
  SvgLaptopWindows,
  SvgLastPage,
  SvgLaunch,
  SvgLayers,
  SvgLayersClear,
  SvgLeaderboard,
  SvgLeakAdd,
  SvgLeakRemove,
  SvgLegendToggle,
  SvgLens,
  SvgLensBlur,
  SvgLibraryAdd,
  SvgLibraryAddCheck,
  SvgLibraryBooks,
  SvgLibraryMusic,
  SvgLight,
  SvgLightMode,
  SvgLightbulbCircle,
  SvgLineAxis,
  SvgLineStyle,
  SvgLineWeight,
  SvgLinearScale,
  SvgLink,
  SvgLinkOff,
  SvgLinkedCamera,
  SvgLiquor,
  SvgList,
  SvgListAlt,
  SvgLiveHelp,
  SvgLiveTv,
  SvgLiving,
  SvgLocalActivity,
  SvgLocalAirport,
  SvgLocalAtm,
  SvgLocalBar,
  SvgLocalCafe,
  SvgLocalCarWash,
  SvgLocalConvenienceStore,
  SvgLocalDining,
  SvgLocalDrink,
  SvgLocalFireDepartment,
  SvgLocalFlorist,
  SvgLocalGasStation,
  SvgLocalGroceryStore,
  SvgLocalHospital,
  SvgLocalHotel,
  SvgLocalLaundryService,
  SvgLocalLibrary,
  SvgLocalMall,
  SvgLocalMovies,
  SvgLocalOffer,
  SvgLocalParking,
  SvgLocalPharmacy,
  SvgLocalPhone,
  SvgLocalPizza,
  SvgLocalPlay,
  SvgLocalPolice,
  SvgLocalPostOffice,
  SvgLocalPrintshop,
  SvgLocalSee,
  SvgLocalShipping,
  SvgLocalTaxi,
  SvgLocationCity,
  SvgLocationDisabled,
  SvgLocationOff,
  SvgLocationOn,
  SvgLocationSearching,
  SvgLock,
  SvgLockClock,
  SvgLockOpen,
  SvgLockPerson,
  SvgLockReset,
  SvgLogin,
  SvgLogoDev,
  SvgLogout,
  SvgLooks,
  SvgLooks3,
  SvgLooks4,
  SvgLooks5,
  SvgLooks6,
  SvgLooksOne,
  SvgLooksTwo,
  SvgLoop,
  SvgLoupe,
  SvgLowPriority,
  SvgLoyalty,
  SvgLteMobiledata,
  SvgLtePlusMobiledata,
  SvgLuggage,
  SvgLunchDining,
  SvgLyrics,
  SvgMail,
  SvgMailLock,
  SvgMailOutline,
  SvgMale,
  SvgMan,
  SvgManageAccounts,
  SvgManageHistory,
  SvgManageSearch,
  SvgMap,
  SvgMapsHomeWork,
  SvgMapsUgc,
  SvgMargin,
  SvgMarkAsUnread,
  SvgMarkChatRead,
  SvgMarkChatUnread,
  SvgMarkEmailRead,
  SvgMarkEmailUnread,
  SvgMarkUnreadChatAlt,
  SvgMarkunread,
  SvgMarkunreadMailbox,
  SvgMasks,
  SvgMaximize,
  SvgMediaBluetoothOff,
  SvgMediaBluetoothOn,
  SvgMediation,
  SvgMedicalInformation,
  SvgMedicalServices,
  SvgMedication,
  SvgMedicationLiquid,
  SvgMeetingRoom,
  SvgMemory,
  SvgMenu,
  SvgMenuBook,
  SvgMenuOpen,
  SvgMerge,
  SvgMergeType,
  SvgMessage,
  SvgMicExternalOff,
  SvgMicExternalOn,
  SvgMicOff,
  SvgMicrowave,
  SvgMilitaryTech,
  SvgMinimize,
  SvgMinorCrash,
  SvgMiscellaneousServices,
  SvgMissedVideoCall,
  SvgMms,
  SvgMobileFriendly,
  SvgMobileOff,
  SvgMobileScreenShare,
  SvgMobiledataOff,
  SvgMode,
  SvgModeComment,
  SvgModeEdit,
  SvgModeEditOutline,
  SvgModeFanOff,
  SvgModeNight,
  SvgModeOfTravel,
  SvgModeStandby,
  SvgModelTraining,
  SvgMonetizationOn,
  SvgMoney,
  SvgMoneyOff,
  SvgMoneyOffCsred,
  SvgMonitor,
  SvgMonitorHeart,
  SvgMonitorWeight,
  SvgMonochromePhotos,
  SvgMood,
  SvgMoodBad,
  SvgMoped,
  SvgMore,
  SvgMoreHoriz,
  SvgMoreTime,
  SvgMoreVert,
  SvgMosque,
  SvgMotionPhotosAuto,
  SvgMotionPhotosOff,
  SvgMotionPhotosOn,
  SvgMotionPhotosPause,
  SvgMotionPhotosPaused,
  SvgMouse,
  SvgMoveDown,
  SvgMoveToInbox,
  SvgMoveUp,
  SvgMovie,
  SvgMovieCreation,
  SvgMovieFilter,
  SvgMoving,
  SvgMp,
  SvgMultilineChart,
  SvgMultipleStop,
  SvgMuseum,
  SvgMusicNote,
  SvgMusicOff,
  SvgMusicVideo,
  SvgMyLocation,
  SvgNat,
  SvgNature,
  SvgNaturePeople,
  SvgNavigateBefore,
  SvgNavigateNext,
  SvgNavigation,
  SvgNearMe,
  SvgNearMeDisabled,
  SvgNearbyError,
  SvgNearbyOff,
  SvgNestCamWiredStand,
  SvgNetworkCell,
  SvgNetworkCheck,
  SvgNetworkLocked,
  SvgNetworkPing,
  SvgNetworkWifi,
  SvgNetworkWifi1Bar,
  SvgNetworkWifi2Bar,
  SvgNetworkWifi3Bar,
  SvgNewLabel,
  SvgNewReleases,
  SvgNewspaper,
  SvgNextPlan,
  SvgNextWeek,
  SvgNfc,
  SvgNightShelter,
  SvgNightlife,
  SvgNightlight,
  SvgNightlightRound,
  SvgNightsStay,
  SvgNoAccounts,
  SvgNoAdultContent,
  SvgNoBackpack,
  SvgNoCell,
  SvgNoCrash,
  SvgNoDrinks,
  SvgNoEncryption,
  SvgNoEncryptionGmailerrorred,
  SvgNoFlash,
  SvgNoFood,
  SvgNoLuggage,
  SvgNoMeals,
  SvgNoMeetingRoom,
  SvgNoPhotography,
  SvgNoSim,
  SvgNoStroller,
  SvgNoTransfer,
  SvgNoiseAware,
  SvgNoiseControlOff,
  SvgNordicWalking,
  SvgNorth,
  SvgNorthEast,
  SvgNorthWest,
  SvgNotAccessible,
  SvgNotInterested,
  SvgNotListedLocation,
  SvgNotStarted,
  SvgNoteAdd,
  SvgNoteAlt,
  SvgNotes,
  SvgNotificationAdd,
  SvgNotificationImportant,
  SvgNotifications,
  SvgNotificationsActive,
  SvgNotificationsNone,
  SvgNotificationsOff,
  SvgNotificationsPaused,
  SvgNumbers,
  SvgOfflineBolt,
  SvgOfflinePin,
  SvgOfflineShare,
  SvgOilBarrel,
  SvgOnDeviceTraining,
  SvgOndemandVideo,
  SvgOnlinePrediction,
  SvgOpacity,
  SvgOpenInBrowser,
  SvgOpenInFull,
  SvgOpenInNew,
  SvgOpenInNewOff,
  SvgOpenWith,
  SvgOtherHouses,
  SvgOutbound,
  SvgOutbox,
  SvgOutdoorGrill,
  SvgOutlet,
  SvgOutlinedFlag,
  SvgOutput,
  SvgPadding,
  SvgPages,
  SvgPageview,
  SvgPaid,
  SvgPalette,
  SvgPanTool,
  SvgPanToolAlt,
  SvgPanorama,
  SvgPanoramaFishEye,
  SvgPanoramaHorizontal,
  SvgPanoramaHorizontalSelect,
  SvgPanoramaPhotosphere,
  SvgPanoramaPhotosphereSelect,
  SvgPanoramaVertical,
  SvgPanoramaVerticalSelect,
  SvgPanoramaWideAngle,
  SvgPanoramaWideAngleSelect,
  SvgParagliding,
  SvgPark,
  SvgPartyMode,
  SvgPassword,
  SvgPattern,
  SvgPauseCircle,
  SvgPauseCircleFilled,
  SvgPauseCircleOutline,
  SvgPausePresentation,
  SvgPayment,
  SvgPayments,
  SvgPedalBike,
  SvgPending,
  SvgPendingActions,
  SvgPentagon,
  SvgPeople,
  SvgPeopleAlt,
  SvgPeopleOutline,
  SvgPercent,
  SvgPermCameraMic,
  SvgPermContactCalendar,
  SvgPermDataSetting,
  SvgPermDeviceInformation,
  SvgPermIdentity,
  SvgPermMedia,
  SvgPermPhoneMsg,
  SvgPermScanWifi,
  SvgPerson,
  SvgPersonAdd,
  SvgPersonAddAlt,
  SvgPersonAddAlt1,
  SvgPersonAddDisabled,
  SvgPersonOff,
  SvgPersonOutline,
  SvgPersonPin,
  SvgPersonPinCircle,
  SvgPersonRemove,
  SvgPersonRemoveAlt1,
  SvgPersonSearch,
  SvgPersonalInjury,
  SvgPersonalVideo,
  SvgPestControl,
  SvgPestControlRodent,
  SvgPets,
  SvgPhishing,
  SvgPhone,
  SvgPhoneAndroid,
  SvgPhoneBluetoothSpeaker,
  SvgPhoneCallback,
  SvgPhoneDisabled,
  SvgPhoneEnabled,
  SvgPhoneForwarded,
  SvgPhoneInTalk,
  SvgPhoneIphone,
  SvgPhoneLocked,
  SvgPhoneMissed,
  SvgPhonePaused,
  SvgPhonelink,
  SvgPhonelinkErase,
  SvgPhonelinkLock,
  SvgPhonelinkOff,
  SvgPhonelinkRing,
  SvgPhonelinkSetup,
  SvgPhoto,
  SvgPhotoAlbum,
  SvgPhotoCamera,
  SvgPhotoCameraBack,
  SvgPhotoCameraFront,
  SvgPhotoFilter,
  SvgPhotoLibrary,
  SvgPhotoSizeSelectActual,
  SvgPhotoSizeSelectLarge,
  SvgPhotoSizeSelectSmall,
  SvgPhp,
  SvgPiano,
  SvgPianoOff,
  SvgPictureAsPdf,
  SvgPictureInPicture,
  SvgPictureInPictureAlt,
  SvgPieChart,
  SvgPieChartOutline,
  SvgPin,
  SvgPinDrop,
  SvgPinEnd,
  SvgPinInvoke,
  SvgPinch,
  SvgPivotTableChart,
  SvgPix,
  SvgPlace,
  SvgPlagiarism,
  SvgPlayArrow,
  SvgPlayCircle,
  SvgPlayCircleFilled,
  SvgPlayForWork,
  SvgPlayLesson,
  SvgPlaylistAdd,
  SvgPlaylistAddCheck,
  SvgPlaylistAddCheckCircle,
  SvgPlaylistAddCircle,
  SvgPlaylistPlay,
  SvgPlaylistRemove,
  SvgPlumbing,
  SvgPlusOne,
  SvgPodcasts,
  SvgPointOfSale,
  SvgPolicy,
  SvgPoll,
  SvgPolyline,
  SvgPolymer,
  SvgPool,
  SvgPortableWifiOff,
  SvgPortrait,
  SvgPostAdd,
  SvgPower,
  SvgPowerInput,
  SvgPowerOff,
  SvgPowerSettingsNew,
  SvgPrecisionManufacturing,
  SvgPregnantWoman,
  SvgPresentToAll,
  SvgPreview,
  SvgPriceChange,
  SvgPriceCheck,
  SvgPrint,
  SvgPrintDisabled,
  SvgPriorityHigh,
  SvgPrivacyTip,
  SvgPrivateConnectivity,
  SvgProductionQuantityLimits,
  SvgPropane,
  SvgPropaneTank,
  SvgPsychology,
  SvgPublic,
  SvgPublicOff,
  SvgPublish,
  SvgPublishedWithChanges,
  SvgPunchClock,
  SvgPushPin,
  SvgQrCode,
  SvgQrCode2,
  SvgQrCodeScanner,
  SvgQueryBuilder,
  SvgQueryStats,
  SvgQuestionAnswer,
  SvgQuestionMark,
  SvgQueuePlayNext,
  SvgQuickreply,
  SvgQuiz,
  SvgRMobiledata,
  SvgRadar,
  SvgRadio,
  SvgRadioButtonChecked,
  SvgRadioButtonUnchecked,
  SvgRailwayAlert,
  SvgRamenDining,
  SvgRampLeft,
  SvgRampRight,
  SvgRateReview,
  SvgRawOff,
  SvgRawOn,
  SvgReadMore,
  SvgRealEstateAgent,
  SvgReceipt,
  SvgReceiptLong,
  SvgRecentActors,
  SvgRecommend,
  SvgRecordVoiceOver,
  SvgRectangle,
  SvgRecycling,
  SvgRedeem,
  SvgRedo,
  SvgReduceCapacity,
  SvgRefresh,
  SvgRememberMe,
  SvgRemove,
  SvgRemoveCircle,
  SvgRemoveCircleOutline,
  SvgRemoveDone,
  SvgRemoveFromQueue,
  SvgRemoveModerator,
  SvgRemoveRedEye,
  SvgRemoveRoad,
  SvgRemoveShoppingCart,
  SvgReorder,
  SvgRepeat,
  SvgRepeatOn,
  SvgReplay,
  SvgReplay10,
  SvgReplay30,
  SvgReplay5,
  SvgReplayCircleFilled,
  SvgReply,
  SvgReplyAll,
  SvgReport,
  SvgReportGmailerrorred,
  SvgReportOff,
  SvgReportProblem,
  SvgRequestPage,
  SvgRequestQuote,
  SvgResetTv,
  SvgRestartAlt,
  SvgRestaurant,
  SvgRestaurantMenu,
  SvgRestore,
  SvgRestoreFromTrash,
  SvgRestorePage,
  SvgReviews,
  SvgRiceBowl,
  SvgRingVolume,
  SvgRocket,
  SvgRocketLaunch,
  SvgRollerShades,
  SvgRollerShadesClosed,
  SvgRollerSkating,
  SvgRoofing,
  SvgRoom,
  SvgRoomPreferences,
  SvgRoomService,
  SvgRotate90DegreesCcw,
  SvgRotate90DegreesCw,
  SvgRotateLeft,
  SvgRotateRight,
  SvgRoundaboutLeft,
  SvgRoundaboutRight,
  SvgRoundedCorner,
  SvgRoute,
  SvgRouter,
  SvgRowing,
  SvgRssFeed,
  SvgRsvp,
  SvgRtt,
  SvgRule,
  SvgRuleFolder,
  SvgRunCircle,
  SvgRunningWithErrors,
  SvgRvHookup,
  SvgSafetyCheck,
  SvgSafetyDivider,
  SvgSailing,
  SvgSanitizer,
  SvgSatellite,
  SvgSatelliteAlt,
  SvgSave,
  SvgSaveAlt,
  SvgSaveAs,
  SvgSavedSearch,
  SvgSavings,
  SvgScale,
  SvgScanner,
  SvgScatterPlot,
  SvgSchedule,
  SvgScheduleSend,
  SvgSchema,
  SvgSchool,
  SvgScience,
  SvgScore,
  SvgScoreboard,
  SvgScreenLockLandscape,
  SvgScreenLockPortrait,
  SvgScreenLockRotation,
  SvgScreenRotation,
  SvgScreenRotationAlt,
  SvgScreenSearchDesktop,
  SvgScreenShare,
  SvgScreenshot,
  SvgScreenshotMonitor,
  SvgScubaDiving,
  SvgSd,
  SvgSdCard,
  SvgSdCardAlert,
  SvgSdStorage,
  SvgSearch,
  SvgSearchOff,
  SvgSecurity,
  SvgSecurityUpdate,
  SvgSecurityUpdateGood,
  SvgSecurityUpdateWarning,
  SvgSegment,
  SvgSelectAll,
  SvgSelfImprovement,
  SvgSell,
  SvgSend,
  SvgSendAndArchive,
  SvgSendTimeExtension,
  SvgSendToMobile,
  SvgSensorDoor,
  SvgSensorOccupied,
  SvgSensorWindow,
  SvgSensors,
  SvgSensorsOff,
  SvgSentimentDissatisfied,
  SvgSentimentNeutral,
  SvgSentimentSatisfied,
  SvgSentimentSatisfiedAlt,
  SvgSentimentVeryDissatisfied,
  SvgSentimentVerySatisfied,
  SvgSetMeal,
  SvgSettings,
  SvgSettingsAccessibility,
  SvgSettingsApplications,
  SvgSettingsBackupRestore,
  SvgSettingsBluetooth,
  SvgSettingsBrightness,
  SvgSettingsCell,
  SvgSettingsEthernet,
  SvgSettingsInputAntenna,
  SvgSettingsInputComponent,
  SvgSettingsInputComposite,
  SvgSettingsInputHdmi,
  SvgSettingsInputSvideo,
  SvgSettingsOverscan,
  SvgSettingsPhone,
  SvgSettingsPower,
  SvgSettingsRemote,
  SvgSettingsSuggest,
  SvgSettingsSystemDaydream,
  SvgSettingsVoice,
  SvgSevereCold,
  SvgShare,
  SvgShareLocation,
  SvgShield,
  SvgShieldMoon,
  SvgShop,
  SvgShop2,
  SvgShopTwo,
  SvgShoppingBag,
  SvgShoppingBasket,
  SvgShoppingCart,
  SvgShoppingCartCheckout,
  SvgShortText,
  SvgShortcut,
  SvgShowChart,
  SvgShower,
  SvgShutterSpeed,
  SvgSick,
  SvgSignLanguage,
  SvgSignalCellular0Bar,
  SvgSignalCellular4Bar,
  SvgSignalCellularAlt,
  SvgSignalCellularAlt1Bar,
  SvgSignalCellularAlt2Bar,
  SvgSignalCellularConnectedNoInternet0Bar,
  SvgSignalCellularConnectedNoInternet4Bar,
  SvgSignalCellularNoSim,
  SvgSignalCellularNodata,
  SvgSignalCellularNull,
  SvgSignalCellularOff,
  SvgSignalWifi0Bar,
  SvgSignalWifi4Bar,
  SvgSignalWifi4BarLock,
  SvgSignalWifiBad,
  SvgSignalWifiConnectedNoInternet4,
  SvgSignalWifiOff,
  SvgSignalWifiStatusbar4Bar,
  SvgSignalWifiStatusbarConnectedNoInternet4,
  SvgSignalWifiStatusbarNull,
  SvgSignpost,
  SvgSimCard,
  SvgSimCardAlert,
  SvgSimCardDownload,
  SvgSingleBed,
  SvgSip,
  SvgSkateboarding,
  SvgSkipNext,
  SvgSkipPrevious,
  SvgSledding,
  SvgSlideshow,
  SvgSlowMotionVideo,
  SvgSmartButton,
  SvgSmartDisplay,
  SvgSmartScreen,
  SvgSmartToy,
  SvgSmartphone,
  SvgSmokeFree,
  SvgSmokingRooms,
  SvgSms,
  SvgSmsFailed,
  SvgSnippetFolder,
  SvgSnooze,
  SvgSnowboarding,
  SvgSnowmobile,
  SvgSnowshoeing,
  SvgSoap,
  SvgSocialDistance,
  SvgSolarPower,
  SvgSort,
  SvgSortByAlpha,
  SvgSos,
  SvgSoupKitchen,
  SvgSource,
  SvgSouth,
  SvgSouthAmerica,
  SvgSouthEast,
  SvgSouthWest,
  SvgSpa,
  SvgSpaceBar,
  SvgSpaceDashboard,
  SvgSpatialAudio,
  SvgSpatialAudioOff,
  SvgSpatialTracking,
  SvgSpeaker,
  SvgSpeakerGroup,
  SvgSpeakerNotes,
  SvgSpeakerNotesOff,
  SvgSpeakerPhone,
  SvgSpeed,
  SvgSpellcheck,
  SvgSplitscreen,
  SvgSpoke,
  SvgSports,
  SvgSportsBar,
  SvgSportsBaseball,
  SvgSportsBasketball,
  SvgSportsCricket,
  SvgSportsEsports,
  SvgSportsFootball,
  SvgSportsGolf,
  SvgSportsGymnastics,
  SvgSportsHandball,
  SvgSportsHockey,
  SvgSportsKabaddi,
  SvgSportsMartialArts,
  SvgSportsMma,
  SvgSportsMotorsports,
  SvgSportsRugby,
  SvgSportsScore,
  SvgSportsSoccer,
  SvgSportsTennis,
  SvgSportsVolleyball,
  SvgSquare,
  SvgSquareFoot,
  SvgSsidChart,
  SvgStackedBarChart,
  SvgStackedLineChart,
  SvgStadium,
  SvgStairs,
  SvgStar,
  SvgStarBorder,
  SvgStarBorderPurple500,
  SvgStarHalf,
  SvgStarOutline,
  SvgStarPurple500,
  SvgStarRate,
  SvgStars,
  SvgStart,
  SvgStayCurrentLandscape,
  SvgStayCurrentPortrait,
  SvgStayPrimaryLandscape,
  SvgStayPrimaryPortrait,
  SvgStickyNote2,
  SvgStopScreenShare,
  SvgStorage,
  SvgStore,
  SvgStoreMallDirectory,
  SvgStorefront,
  SvgStorm,
  SvgStraight,
  SvgStraighten,
  SvgStream,
  SvgStreetview,
  SvgStrikethroughS,
  SvgStroller,
  SvgStyle,
  SvgSubdirectoryArrowLeft,
  SvgSubdirectoryArrowRight,
  SvgSubject,
  SvgSubscript,
  SvgSubscriptions,
  SvgSubtitles,
  SvgSubtitlesOff,
  SvgSubway,
  SvgSummarize,
  SvgSuperscript,
  SvgSupervisedUserCircle,
  SvgSupervisorAccount,
  SvgSupport,
  SvgSupportAgent,
  SvgSurfing,
  SvgSurroundSound,
  SvgSwapCalls,
  SvgSwapHoriz,
  SvgSwapHorizontalCircle,
  SvgSwapVert,
  SvgSwapVerticalCircle,
  SvgSwipe,
  SvgSwipeDown,
  SvgSwipeDownAlt,
  SvgSwipeLeft,
  SvgSwipeLeftAlt,
  SvgSwipeRight,
  SvgSwipeRightAlt,
  SvgSwipeUp,
  SvgSwipeUpAlt,
  SvgSwipeVertical,
  SvgSwitchAccessShortcut,
  SvgSwitchAccessShortcutAdd,
  SvgSwitchAccount,
  SvgSwitchCamera,
  SvgSwitchLeft,
  SvgSwitchRight,
  SvgSwitchVideo,
  SvgSynagogue,
  SvgSync,
  SvgSyncAlt,
  SvgSyncDisabled,
  SvgSyncLock,
  SvgSyncProblem,
  SvgSystemSecurityUpdate,
  SvgSystemSecurityUpdateGood,
  SvgSystemSecurityUpdateWarning,
  SvgSystemUpdate,
  SvgSystemUpdateAlt,
  SvgTab,
  SvgTabUnselected,
  SvgTableBar,
  SvgTableChart,
  SvgTableRestaurant,
  SvgTableRows,
  SvgTableView,
  SvgTablet,
  SvgTabletAndroid,
  SvgTabletMac,
  SvgTag,
  SvgTagFaces,
  SvgTakeoutDining,
  SvgTapAndPlay,
  SvgTapas,
  SvgTask,
  SvgTaskAlt,
  SvgTaxiAlert,
  SvgTempleBuddhist,
  SvgTempleHindu,
  SvgTerminal,
  SvgTerrain,
  SvgTextDecrease,
  SvgTextFields,
  SvgTextFormat,
  SvgTextIncrease,
  SvgTextRotateUp,
  SvgTextRotateVertical,
  SvgTextRotationAngledown,
  SvgTextRotationAngleup,
  SvgTextRotationDown,
  SvgTextRotationNone,
  SvgTextSnippet,
  SvgTextsms,
  SvgTexture,
  SvgTheaterComedy,
  SvgTheaters,
  SvgThermostat,
  SvgThermostatAuto,
  SvgThumbDown,
  SvgThumbDownAlt,
  SvgThumbDownOffAlt,
  SvgThumbUp,
  SvgThumbUpAlt,
  SvgThumbUpOffAlt,
  SvgThumbsUpDown,
  SvgThunderstorm,
  SvgTimeToLeave,
  SvgTimelapse,
  SvgTimeline,
  SvgTimer,
  SvgTimer10,
  SvgTimer10Select,
  SvgTimer3,
  SvgTimer3Select,
  SvgTimerOff,
  SvgTipsAndUpdates,
  SvgTireRepair,
  SvgTitle,
  SvgToc,
  SvgToday,
  SvgToggleOff,
  SvgToggleOn,
  SvgToken,
  SvgToll,
  SvgTonality,
  SvgTopic,
  SvgTornado,
  SvgTouchApp,
  SvgTour,
  SvgToys,
  SvgTrackChanges,
  SvgTraffic,
  SvgTrain,
  SvgTram,
  SvgTransferWithinAStation,
  SvgTransform,
  SvgTransgender,
  SvgTransitEnterexit,
  SvgTranslate,
  SvgTravelExplore,
  SvgTrendingDown,
  SvgTrendingFlat,
  SvgTrendingUp,
  SvgTripOrigin,
  SvgTry,
  SvgTsunami,
  SvgTty,
  SvgTune,
  SvgTungsten,
  SvgTurnLeft,
  SvgTurnRight,
  SvgTurnSharpLeft,
  SvgTurnSharpRight,
  SvgTurnSlightLeft,
  SvgTurnSlightRight,
  SvgTurnedIn,
  SvgTurnedInNot,
  SvgTv,
  SvgTvOff,
  SvgTwoWheeler,
  SvgUTurnLeft,
  SvgUTurnRight,
  SvgUmbrella,
  SvgUnarchive,
  SvgUndo,
  SvgUnfoldLess,
  SvgUnfoldMore,
  SvgUnpublished,
  SvgUnsubscribe,
  SvgUpdate,
  SvgUpdateDisabled,
  SvgUpgrade,
  SvgUpload,
  SvgUploadFile,
  SvgUsb,
  SvgUsbOff,
  SvgVaccines,
  SvgVapeFree,
  SvgVapingRooms,
  SvgVerified,
  SvgVerifiedUser,
  SvgVerticalAlignBottom,
  SvgVerticalAlignCenter,
  SvgVerticalAlignTop,
  SvgVerticalDistribute,
  SvgVerticalShades,
  SvgVerticalShadesClosed,
  SvgVerticalSplit,
  SvgVibration,
  SvgVideoCall,
  SvgVideoCameraBack,
  SvgVideoCameraFront,
  SvgVideoFile,
  SvgVideoLabel,
  SvgVideoStable,
  SvgVideocam,
  SvgVideocamOff,
  SvgVideogameAsset,
  SvgVideogameAssetOff,
  SvgViewAgenda,
  SvgViewArray,
  SvgViewCarousel,
  SvgViewColumn,
  SvgViewComfy,
  SvgViewComfyAlt,
  SvgViewCompact,
  SvgViewCompactAlt,
  SvgViewCozy,
  SvgViewDay,
  SvgViewHeadline,
  SvgViewInAr,
  SvgViewKanban,
  SvgViewList,
  SvgViewModule,
  SvgViewQuilt,
  SvgViewSidebar,
  SvgViewStream,
  SvgViewTimeline,
  SvgViewWeek,
  SvgVignette,
  SvgVilla,
  SvgVisibility,
  SvgVisibilityOff,
  SvgVoiceChat,
  SvgVoiceOverOff,
  SvgVoicemail,
  SvgVolcano,
  SvgVolumeDown,
  SvgVolumeMute,
  SvgVolumeOff,
  SvgVolumeUp,
  SvgVolunteerActivism,
  SvgVpnKey,
  SvgVpnKeyOff,
  SvgVpnLock,
  SvgVrpano,
  SvgWallet,
  SvgWallpaper,
  SvgWarehouse,
  SvgWarning,
  SvgWarningAmber,
  SvgWash,
  SvgWatch,
  SvgWatchLater,
  SvgWatchOff,
  SvgWater,
  SvgWaterDamage,
  SvgWaterDrop,
  SvgWaterfallChart,
  SvgWaves,
  SvgWavingHand,
  SvgWbAuto,
  SvgWbCloudy,
  SvgWbIncandescent,
  SvgWbIridescent,
  SvgWbShade,
  SvgWbSunny,
  SvgWbTwilight,
  SvgWc,
  SvgWebAssetOff,
  SvgWebhook,
  SvgWeekend,
  SvgWest,
  SvgWhatsapp,
  SvgWhatshot,
  SvgWheelchairPickup,
  SvgWhereToVote,
  SvgWidgets,
  SvgWidthFull,
  SvgWidthNormal,
  SvgWidthWide,
  SvgWifi,
  SvgWifi1Bar,
  SvgWifi2Bar,
  SvgWifiCalling,
  SvgWifiCalling3,
  SvgWifiChannel,
  SvgWifiFind,
  SvgWifiLock,
  SvgWifiOff,
  SvgWifiPassword,
  SvgWifiProtectedSetup,
  SvgWifiTethering,
  SvgWifiTetheringError,
  SvgWifiTetheringOff,
  SvgWindPower,
  SvgWindow,
  SvgWineBar,
  SvgWoman,
  SvgWork,
  SvgWorkHistory,
  SvgWorkOff,
  SvgWorkOutline,
  SvgWorkspacePremium,
  SvgWorkspaces,
  SvgWrapText,
  SvgWrongLocation,
  SvgWysiwyg,
  SvgYard,
  SvgYoutubeSearchedFor,
  SvgZoomIn,
  SvgZoomInMap,
  SvgZoomOut,
  SvgZoomOutMap,
  _default$4 as Tab,
  _default$3 as TabItem,
  _default as Table,
  ToastManager,
  _default$2 as ToggleButton,
  _default$5 as Tooltip,
  _default$b as Validation,
};
//# sourceMappingURL=index.d.ts.map
