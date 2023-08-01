export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SIGN_IN_ERROR":
      return { ...state, isLoading: false, signInError: action.payload };
    case "SIGN_UP_ERROR":
      return { ...state, isLoading: false, signUpError: action.payload };
    case "SET_ACCESS_TOKEN":
      return { ...state, isLoading: false, accessToken: action.payload };
    case "SET_USER_DATA":
      return { ...state, isLoading: false, user: action.payload };
    case "UPDATE_SHIPPING_DETAILS":
      return { ...state, isLoading: false, shippingDetails: action.payload };
    default:
      return state;
  }
};
