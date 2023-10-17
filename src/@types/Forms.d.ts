declare module "app-forms" {
  export interface LoginFormProps {
    username: string;
    password: string;
  }
  export type FormProps = {
    heading: string;
    initialValues: { [key: string]: any };
    labels: { [key: string]: string | undefined };
    placeholders: { [key: string]: string | undefined };
    types: { [key: string]: string | undefined };
    fieldHeading: { [key: string]: string | undefined };
    additionLabel?: string;
    removalLabel?: string;
    canMultiply?: boolean;
  };

  export type RegisterFormProps = {
    username: string;
    password: string;
  };
  export type FormValueProps = {
    [key: string]: any;
  };
  export interface AddEntryProps {
    name: string;
    form: FormProps;
    canMultiply?: boolean;
    skipIfFalse?: string;
  }
  export interface InitPaginateFormProps {
    values: FormValueProps;
    form: FormProps;
    formName: string;
    withFileUpload?: boolean;
    addEntries?: AddEntryProps[];
    onSubmit?: (key: FormValueProps) => void;
  }
  export type UpdateAppProps = {
    dispatch: React.Dispatch<any>;
    values: FormValueProps;
  };
  export type EditAppProps = {
    dispatch: React.Dispatch<any>;
    values: FormValueProps;
    appId: string;
    updateAppData: (key: FormValueProps) => void;
  };
  export interface ReorderFormValueProps {
    values: FormValueProps;
    desiredOrder: string[];
    withEntry?: AddEntryProps[];
  }
}
