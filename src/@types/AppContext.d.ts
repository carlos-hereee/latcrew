declare module "app-context" {
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    theme?: string;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    setTheme: (key: string) => void;
  }
}
