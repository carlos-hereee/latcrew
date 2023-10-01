declare module "app-context" {
  import { FormProps } from "app-forms";
  export interface AppSchema {
    // auth schema
    isLoading: boolean;
    appName: string;
    buildAppForm: FormProps;
    pageForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
  }
}
