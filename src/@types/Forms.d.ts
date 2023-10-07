declare module "app-forms" {
  export interface LoginFormProps {
    username: string;
    password: string;
  }
  export type FormProps = {
    heading: string;
    initialValues: { [key: string]: any };
    labels: { [key: string]: string };
    placeholders: { [key: string]: string };
    types: { [key: string]: string };
    fieldHeading: { [key: string]: string };
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
    addEntries?: AddEntryProps[];
    onSubmit?: (key: FormValueProps) => void;
  }
  export type EditAppProps = {
    dispatch: React.Dispatch<any>;
    values: FormValueProps;
    appId: string;
  };
  export interface ReorderFormValueProps {
    values: FormValueProps;
    desiredOrder: string[];
    withEntry?: AddEntryProps[];
  }
}
