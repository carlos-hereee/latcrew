declare module "auth-context" {
  // imports allowed here
  import { FormProps, LoginFormProps, RegisterFormProps } from "app-forms";
  export interface UserSchema {
    userId: string;
    username: string;
    email?: string;
    nickname?: string;
    languageId?: string;
    phone?: string;
  }
  export interface AuthErrorProps {
    emergencyPasswordChangeIsRequired: boolean;
    signInError: string;
    signUpError: string;
  }
  export interface ReducerMethodProps {
    dispatch: React.Dispatch<any>;
  }
  export interface RefreshTokenReducerProps {
    dispatch: React.Dispatch<any>;
    updateUser: (user: UserSchema) => void;
  }
  export interface UpdateUserReducerProps {
    dispatch: React.Dispatch<any>;
    user: UserSchema;
  }
  export interface AuthStateProps {
    // auth schema
    isLoading: boolean;
    isOffline: boolean;
    isAdmin: boolean;
    emergencyPasswordChangeIsRequired: boolean;
    accessToken: string;
    ownedApps: { appId: string; logo?: { [key: string]: string }; appName: string }[];
    authErrors: AuthErrorProps;
    user: UserSchema;
    dummyData: UserSchema;
    userForm: FormProps;
    loginForm: FormProps;
    signUpForm: FormProps;
    passwordChangeForm: FormProps;
    forgotPasswordForm: FormProps;
  }
  // export interface
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
    forgotPassword: (values: FormProps) => void;
    changePassword: (values: UserSchema) => void;
  }
}
