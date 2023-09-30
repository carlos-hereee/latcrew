declare module "app-forms" {
  export interface LoginFormProps {
    username: string;
    password: string;
  }
  export type FormProps = {
    initialValues: { [key: string]: any };
    labels: { [key: string]: string };
    placeholders: { [key: string]: string };
  };

  export type RegisterFormProps = {
    username: string;
    password: string;
  };
}
