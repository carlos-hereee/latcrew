declare module "auth-context" {
  // imports allowed here
  import { FormProps, FormValueProps, LoginFormProps, RegisterFormProps } from "app-forms";
  import { AuthErrorProps, UserSchema } from "@app/utils/types/auth";
  export interface ReducerMethodProps {
    dispatch: React.Dispatch<any>;
  }
  export interface AuthSchema {
    // auth schema
    isLoading: boolean;
    isOffline: boolean;
    isAdmin: boolean;
    emergencyPasswordChangeIsRequired: boolean;
    accessToken: string;
    ownedApps: { appId: string; logo?: {}; appName: string }[];
    authErrors: AuthErrorProps;
    user: UserSchema;
    dummyData: UserSchema;
    userForm: FormProps;
    loginForm: FormProps;
    signUpForm: FormProps;
    passwordChangeForm: FormProps;
    forgotPasswordForm: FormProps;
    // methods
    setIsLoading: (values: boolean) => void;
    setStranded: (values: boolean) => void;
    setAccessToken: (values: string) => void;
    login: (values: LoginFormProps) => void;
    register: (values: RegisterFormProps) => void;
    logout: () => void;
    updateUser: (values: UserSchema) => void;
    fetchUser: (values: UserSchema) => void;
    buildApp: (values: FormValueProps) => void;
    forgotPassword: (values: FormProps) => void;
    changePassword: (values: UserSchema) => void;
  }
}
