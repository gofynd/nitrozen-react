export declare const menuItems: (
  | {
      label: string;
      heading: boolean;
      divider: boolean;
      disabled?: undefined;
      selected?: undefined;
      linkConfig?: undefined;
    }
  | {
      label: string;
      disabled: boolean;
      heading: boolean;
      divider: boolean;
      selected?: undefined;
      linkConfig?: undefined;
    }
  | {
      label: string;
      heading: boolean;
      divider: boolean;
      selected: boolean;
      disabled?: undefined;
      linkConfig?: undefined;
    }
  | {
      label: string;
      selected: boolean;
      linkConfig: {
        href: string;
        target: string;
      };
      heading?: undefined;
      divider?: undefined;
      disabled?: undefined;
    }
  | {
      label: string;
      selected: boolean;
      disabled: boolean;
      linkConfig: {
        href: string;
        target: string;
      };
      heading?: undefined;
      divider?: undefined;
    }
)[];
