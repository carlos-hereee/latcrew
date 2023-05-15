const loadServices = (state, action) => {
  return { ...state, isLoading: false, isFiltered: false, services: action.payload };
};
const updateAssets = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    filteredServices: action.payload,
  };
};
const updateActive = (state, action) => {
  return { ...state, isLoading: false, active: action.payload };
};

const removeFromCart = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cart: state.cart.filter((c) => c.uid !== action.payload.uid),
  };
};
const bookEvent = (state, action) => {
  return { ...state, isLoading: false, cart: action.payload };
};
const bookRequired = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cart: state.cart.map((c, idx) =>
      idx === action.payload.idx ? action.payload.data : c
    ),
  };
};
const updateItemQuantity = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cart: state.cart.map((c) => (c.uid === action.payload.uid ? action.payload : c)),
  };
};
const setIsUserReq = (state, action) => {
  return { ...state, isLoading: false, isUserReq: action.payload };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "LOAD_SERVICES":
      return loadServices(state, action);
    case "UPDATE_CART":
      return { ...state, isLoading: false, cart: action.payload };
    case "UPDATE_BOOKABLE":
      return { ...state, isLoading: false, bookable: action.payload };
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
    case "UPDATE_ACTIVE":
      return updateActive(state, action);
    case "UPDATE_SERVICES":
      return updateAssets(state, action);
    case "BOOK_EVENT":
      return bookEvent(state, action);
    case "BOOK_REQUIRED":
      return bookRequired(state, action);
    case "UPDATE_ITEM_QUANTITY":
      return updateItemQuantity(state, action);
    case "SET_IS_USER_REQ":
      return setIsUserReq(state, action);
    case "SET_TOTAL":
      return { ...state, isLoading: false, total: action.payload };
    default:
      return state;
  }
};
