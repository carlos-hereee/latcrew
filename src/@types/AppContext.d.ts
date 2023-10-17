declare module "app-context" {
  import { CalendarProps, MenuProps, SectionProps } from "app-types";
  import { FormValueProps } from "app-forms";
  // only app props
  export interface AppProps {
    appName: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    landing: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter: SectionProps;
    media: SectionProps;
    logo: { [key: string]: string };
    menu: MenuProps[];
    calendar: CalendarProps;
  }
  // app context schema
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    welcomeMessage: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    landing: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter: SectionProps;
    media: SectionProps;
    menu: MenuProps[];
    logo: { [key: string]: string };
    calendar: CalendarProps;
    setTheme: (key: string) => void;
    deleteApp: (appId: string) => void;
    updateAppData: (key: FormValueProps) => void;
  }
  export interface AppStateProps {
    isLoading: boolean;
    appName: string;
    welcomeMessage: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    landing: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter: SectionProps;
    media: SectionProps;
    logo: { [key: string]: string };
    menu: MenuProps[];
    calendar: CalendarProps;
  }
}
