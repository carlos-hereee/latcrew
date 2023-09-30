import { AuthErrorProps } from "./AuthErrorProps";
import { FormProps, LoginFormProps, RegisterFormProps } from "./FormProps";
import { UserSchema } from "./UserSchema";

export type AuthSchema = {
  // auth schema
  isLoading: boolean;
  isOffline: boolean;
  isAdmin: boolean;
  emergencyPasswordChangeIsRequired: boolean;
  accessToken: string;
  authErrors: AuthErrorProps;
  user: UserSchema;
  dummyData: UserSchema;
  userForm: FormProps;
  loginForm: FormProps;
  signUpForm: FormProps;
  passwordChangeForm: FormProps;
  forgotPasswordForm: FormProps;
  // methods
  signIn: (values: LoginFormProps) => void;
  register: (values: RegisterFormProps) => void;
  logout: () => void;
  updateUser: (values: UserSchema) => void;
  fetchUser: (values: UserSchema) => void;
  buildApp: (values: any) => void;
  changePassword: (values: UserSchema) => void;
  // updateLanguage
};
