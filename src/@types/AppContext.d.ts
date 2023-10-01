declare module "app-context" {
  import { FormProps } from "app-forms";
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    theme?: string;
    buildAppForm: FormProps;
    pageForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
    themeList: { name: string; value: string; themeId: string; uid?: string }[];
    setTheme: (key: string) => void;
  }
}
