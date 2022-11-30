import React from "react";

interface AutocompleteProps {
  placeholder?: string;
  items?: string[];
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  listItemClicked?: Function;
  showSearchIcon?: boolean;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Autocomplete: {
  (props: AutocompleteProps): JSX.Element;
  defaultProps: {
    onChange: () => void;
    onBlur: () => void;
    onFocus: () => void;
    listItemClicked: () => void;
    showSearchIcon: boolean;
  };
};

interface BadgeProps {
  state?: string;
  fill?: Boolean;
  labelText?: string;
  className?: string;
  style?: React.CSSProperties;
  onClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}
declare const _default$c: React.MemoExoticComponent<{
  (props: BadgeProps): JSX.Element;
  defaultProps: {
    state: string;
    fill: boolean;
    labelText: string;
    className: string;
    style: {};
    onClickHandler: () => void;
  };
}>;

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
  link?: boolean;
  theme?: string;
  size?: string;
  focused?: boolean;
  showProgress?: boolean;
  stroke?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
  name?: string;
  style?: React.CSSProperties;
}
declare const _default$b: React.MemoExoticComponent<{
  (props: ButtonProps): JSX.Element;
  defaultProps: {
    href: null;
    type: string;
    disabled: boolean;
    rounded: boolean;
    theme: string;
    size: string;
    focused: boolean;
    showProgress: boolean;
    stroke: null;
    children: null;
    onClick: null;
    className: null;
    id: null;
    icon: null;
    name: null;
  };
}>;

interface CardProps {
  style?: React.CSSProperties;
  cardTitle?: string;
  className?: string;
  showBorder?: boolean;
  children?: React.ReactNode;
  cardIcon?: string;
  headerStyle?: React.CSSProperties;
}
declare const Card: {
  (props: CardProps): JSX.Element;
  defaultProps: {
    style: {};
    cardTitle: string;
    className: string;
    showBorder: boolean;
    children: null;
    cardIcon: null;
  };
};

interface CheckboxProps {
  disabled?: boolean;
  value?: any;
  name?: string;
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
}
declare const Checkbox: {
  (props: CheckboxProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    value: string;
    name: string;
    checkboxValue: null;
    id: string;
    labelText: string;
    children: null;
    onChange: () => void;
    checkArray: null;
    ref: null;
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
}
declare const _default$a: React.MemoExoticComponent<{
  (props: ChipProps): JSX.Element;
  defaultProps: {
    deletable: boolean;
    disabled: boolean;
    iconStyle: {};
    isRounded: boolean;
    state: string;
    style: {};
  };
}>;

interface ItemProps {
  logo?: string;
  text?: string;
  value: string | number | boolean | Object;
  isGroupLabel?: Boolean;
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
  };
};

interface ValidationProps {
  isValid: boolean;
  isHidden?: boolean;
  validLabel: string;
  invalidLabel: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default$9: React.MemoExoticComponent<{
  (props: ValidationProps): JSX.Element;
  defaultProps: {
    isValid: boolean;
    validLabel: string;
    invalidLabel: string;
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
  search?: Boolean;
  showSearchIcon?: Boolean;
  showTooltip?: Boolean;
  tooltipText?: string;
  tooltipIcon?: React.ReactNode;
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
}
declare const _default$8: React.MemoExoticComponent<{
  (props: InputProps): JSX.Element;
  defaultProps: {
    autoComplete: string;
    type: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    value: string;
    search: boolean;
    showSearchIcon: boolean;
    showTooltip: boolean;
    tooltipText: string;
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
  };
}>;

interface MenuProps {
  id?: string | undefined;
  mode: string;
  inverted: boolean;
  position: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onChangeMenuItem?: (menu: string) => void;
}
declare const _default$7: React.MemoExoticComponent<{
  (props: MenuProps): JSX.Element;
  defaultProps: {
    id: string;
    mode: string;
    inverted: boolean;
    position: string;
  };
}>;

interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
declare const _default$6: React.MemoExoticComponent<{
  (props: MenuItemProps): JSX.Element;
  defaultProps: {
    id: string;
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
declare const _default$5: React.MemoExoticComponent<{
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
}
declare const Radio: {
  (props: RadioProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    labelText: string;
    className: string;
    style: {};
    onChange: () => void;
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
declare const _default$4: React.MemoExoticComponent<{
  (props: StepperProps): JSX.Element;
  defaultProps: {
    items: never[];
    maxActiveIndex: number;
    activeIndex: number;
    isHorizontal: boolean;
    progressStrokeColor: string;
  };
}>;

type Position = "top" | "bottom" | "left" | "right";
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
declare const _default$3: React.MemoExoticComponent<{
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
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default$2: React.MemoExoticComponent<{
  (props: TabProps): JSX.Element;
  defaultProps: {
    id: string;
    activeIndex: number;
    tabItem: never[];
  };
}>;

interface TabItemProps {
  id?: string;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  icon?: React.ReactElement;
  tooltipIcon?: React.ReactNode;
  tooltipIconHoverText?: JSX.Element | React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default$1: React.MemoExoticComponent<{
  (props: TabItemProps): JSX.Element;
  defaultProps: {
    id: string;
    children: JSX.Element;
  };
}>;

interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
}
declare const _default: React.MemoExoticComponent<{
  (props: ToggleButtonProps): JSX.Element;
  defaultProps: {
    value: boolean;
    disabled: boolean;
    size: string;
  };
}>;

interface DialogProps {
  id?: string;
  title?: string;
  DialogIcon?: React.ReactNode;
  theme?: string;
  children?: React.ReactNode;
  positiveButtonLabel?: string | boolean;
  neutralButtonLabel?: string | boolean;
  negativeButtonLabel?: string | boolean;
  onPositiveResponse?: Function;
  onNeutralResponse?: Function;
  onNegativeResponse?: Function;
  isVisible?: boolean;
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
    neutralButtonLabel: string;
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
  type: string;
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

export {
  Autocomplete,
  _default$c as Badge,
  _default$b as Button,
  Card,
  Checkbox,
  _default$a as Chip,
  Dialog,
  Dropdown,
  _default$8 as Input,
  _default$7 as Menu,
  _default$6 as MenuItem,
  _default$5 as Pagination,
  Radio,
  _default$4 as Stepper,
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
  _default$2 as Tab,
  _default$1 as TabItem,
  ToastManager,
  _default as ToggleButton,
  _default$3 as Tooltip,
  _default$9 as Validation,
};
//# sourceMappingURL=index.d.ts.map
