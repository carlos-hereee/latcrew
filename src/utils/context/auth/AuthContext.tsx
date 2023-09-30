// eslint-disable-next-line no-unused-vars
import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./AuthReducer";
import authState from "../../../data/authState.json";
import { signIn } from "./helpers/signIn";
import { register } from "./helpers/register";
import { logOut } from "./helpers/logout";
import { updateUserData } from "./helpers/updateUserData";
import { setShipping } from "./helpers/setShipping";
import { getUserData } from "./helpers/getUserData";
import { changePassword } from "./helpers/changePassword";
import { getAccessToken } from "./helpers/getAccessToken";
import { updateLanguage } from "../app/helpers/updateLanguage";
import { forgotPassword } from "./helpers/forgotPassword";
import { fetchUser } from "./helpers/fetchUser";
import { buildApp } from "./helpers/buildApp";
import { AuthSchema } from "../../types/auth/";
import { AppProps } from "app-types";

export const AuthContext = createContext<AuthSchema>({} as AuthSchema);

export const AuthState = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, authState);
  useEffect(() => {
    getAccessToken(dispatch);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        isOffline: state.isOffline,
        isAdmin: state.isAdmin,
        authErrors: state.authErrors,
        accessToken: state.accessToken,
        user: state.user,
        dummyData: state.dummyData,
        userForm: state.userForm,
        loginForm: state.loginForm,
        signUpForm: state.signUpForm,
        passwordChangeForm: state.passwordChangeForm,
        forgotPasswordForm: state.forgotPasswordForm,
        emergencyPasswordChangeIsRequired: state.emergencyPasswordChangeIsRequired,
        // language: state.language,
        // menu: state.menu,
        // permissions: state.permissions,
        // ownedApps: state.ownedApps,
        // isAdmin: state.isAdmin,
        signIn: (e) => signIn(dispatch, e),
        register: (e) => register(dispatch, e),
        logout: () => logOut(dispatch),
        updateUser: (e) => updateUserData(dispatch, e),
        // setShipping: (e) => setShipping(dispatch, e),
        // getUserData: () => getUserData(dispatch),
        fetchUser: (a) => fetchUser(dispatch, a),
        changePassword: (e) => changePassword(dispatch, e),
        // updateLanguage: (a) => updateLanguage(dispatch, a),
        // forgotPassword: (a) => forgotPassword(dispatch, a),
        buildApp: (a) => buildApp(dispatch, a),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
