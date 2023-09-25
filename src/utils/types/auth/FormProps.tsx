export type FormProps = {
  initialValues: { [key: string]: any };
  labels: { [key: string]: string };
  placeholders: { [key: string]: string };
};
export type LoginFormProps = {
  username: string;
  password: string;
};
export type RegisterFormProps = {
  username: string;
  password: string;
};
