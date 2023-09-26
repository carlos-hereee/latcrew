const setChangePassword = (state, action) => {
  return {
    ...state,
    signInError: action.payload,
    emergencyPasswordChangeIsRequired: action.payload ? true : false,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_STRANDED":
      return { ...state, isOffline: action.payload };
    case "UPDATE_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_APP_ID":
      return { ...state, appId: action.payload };
    case "SET_IS_ADMIN":
      return { ...state, isAdmin: action.payload };
    case "SET_PERMSSIONS":
      return { ...state, permissions: action.payload };
    case "SET_OWNED_APPS":
      return { ...state, ownedApps: action.payload };
    case "SIGN_IN_ERROR":
      return { ...state, signInError: action.payload };
    case "FORGOT_PASSWORD_ERROR":
      return { ...state, forgotPasswordError: action.payload };
    case "SET_DUMMY_DATA":
      return { ...state, dummyData: action.payload };
    case "CHANGE_PASSWORD_ERROR":
      return { ...state, changePasswordError: action.payload };
    case "SIGN_UP_ERROR":
      return { ...state, signUpError: action.payload };
    case "SET_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };
    case "SET_USER_DATA":
      return { ...state, user: action.payload };
    case "UPDATE_SHIPPING_DETAILS":
      return { ...state, shippingDetails: action.payload };
    case "SET_CHANGE_PASSWORD":
      return setChangePassword(state, action);
    default:
      return state;
  }
};