declare module "app-context" {
  import { CalendarProps, HeroProps, MenuProps, ReducerActions, SectionProps } from "app-types";
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    landingPage: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter?: SectionProps;
    media?: SectionProps;
    menu?: MenuProps[];
    logo?: HeroProps;
    calendar?: CalendarProps;
    setTheme: (key: string) => void;
  }
  export interface AppStateProps {
    isLoading: boolean;
    appName: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    landingPage: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter?: SectionProps;
    media?: SectionProps;
    logo?: HeroProps;
    menu?: MenuProps[];
    calendar?: CalendarProps;
  }
  export type AppReducerProps = (state: AppStateProps, action: ReducerActions) => AppStateProps;
}
