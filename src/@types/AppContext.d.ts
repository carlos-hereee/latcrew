declare module "app-context" {
  import { MenuProps, ReducerActions, SectionProps } from "app-types";
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    landing: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter: SectionProps;
    media: SectionProps;
    menu: MenuProps;
    calendar: { [key: string]: string }[];
    setTheme: (key: string) => void;
  }
  export interface AppStateProps {
    isLoading: boolean;
    appName: string;
    theme: string;
    landing: any;
    appId: string;
    ownerId: string;
    adminIds: string[];
    newsletter: { [key: string]: string };
    media: { [key: string]: string }[];
    menu: { [key: string]: string }[];
    calendar: { [key: string]: string }[];
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
  }
  export type AppReducerProps = (state: AppStateProps, action: ReducerActions) => AppStateProps;
}
