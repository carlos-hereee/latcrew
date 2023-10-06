declare module "app-context" {
  import { ReducerActions } from "app-types";
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    setTheme: (key: string) => void;
  }
  export interface AppStateProps {
    isLoading: boolean;
    appName: string;
    theme: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
  }
  export type AppReducerProps = (state: AppStateProps, action: ReducerActions) => AppStateProps;
}
