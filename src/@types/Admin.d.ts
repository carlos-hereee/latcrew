declare module "app-admin" {
  import { FormProps, FormValueProps } from "app-forms";
  export interface AdminContextProps {
    isLoading: boolean;
    appNameForm: FormProps;
    pagesForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
    heroForm: FormProps;
    buildApp: (values: FormValueProps) => void;
    editApp: (values: FormValueProps) => void;
  }
}
