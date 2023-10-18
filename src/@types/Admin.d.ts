declare module "app-admin" {
  import { FormProps, FormValueProps } from "app-forms";
  export interface AdminStateProps {
    isLoading: boolean;
    appNameForm: FormProps;
    pagesForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
    heroForm: FormProps;
    ctaForm: FormProps;
    landingPageFormOrder: string[];
    sectionEntryOrganizer: {
      name: string;
      form: FormProps;
      canMultiply: boolean;
      skipIfFalse: string;
    }[];
  }
  export interface AdminSchema {
    isLoading: boolean;
    appNameForm: FormProps;
    pagesForm: FormProps;
    sectionForm: FormProps;
    landingPageForm: FormProps;
    heroForm: FormProps;
    ctaForm: FormProps;
    landingPageFormOrder: string[];
    sectionEntryOrganizer: {
      name: string;
      form: FormProps;
      canMultiply: boolean;
      skipIfFalse: string;
    }[];
    buildApp: (values: FormValueProps) => void;
    editApp: (values: FormValueProps, appId: string) => void;
    editAppName: (values: FormValueProps, appId: string) => void;
    editLandingPage: (values: FormValueProps, appId: string) => void;
  }
}
