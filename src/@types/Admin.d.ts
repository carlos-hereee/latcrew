declare module "app-admin" {
  import { ReducerActions } from "app-types";
  import { FormProps, FormValueProps } from "app-forms";
  export interface AdminStateProps {
    isLoading: boolean;
    appNameForm: FormProps;
    pagesForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
    heroForm: FormProps;
    ctaForm: FormProps;
  }
  export interface AdminSchema {
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
    editLandingPage: (values: FormValueProps, appId: string) => void;
  }

  export type AdminReducerProps = (
    state: AdminStateProps,
    action: ReducerActions
  ) => AdminStateProps;
}
