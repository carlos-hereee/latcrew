declare module "app-admin" {
  import { FormProps, FormValueProps } from "app-forms";
  export interface AdminContextProps {
    isLoading: boolean;
    appNameForm: FormProps;
    pagesForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
    heroForm: FormProps;
    ctaForm: FormProps;
    buildApp: (values: FormValueProps) => void;
    editApp: (values: FormValueProps, appId: string) => void;
    editAppName: (values: FormValueProps, appId: string) => void;
  }
}
