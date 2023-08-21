import { createContext, useReducer, useContext } from "react";
import shortid from "shortid";
import { LogContext } from "./LogContext";
import { AuthContext } from "./AuthContext";
import { reducer } from "../reducer/ServicesReducer";
import services from "../../data/pages/pages.services.json";
import user from "../../data/app/user.json";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    isUserReq: true,
    cart: [],
    bookable: [],
    booked: [],
    filtered: [],
    active: services.services[0],
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addMessageToLog } = useContext(LogContext);
  const { updateUserData } = useContext(AuthContext);

  const addToCart = (cart, item) => {
    cart.push(item);
    dispatch({ type: "UPDATE_CART", payload: cart });
  };

  const removeFromCart = (cart, item) => {
    const payload = cart.filter((c) => c.uid !== item.uid);
    if (item.isBookable) {
      const bookable = cart.filter((c) => c.isBookable);
      const removable = bookable.filter((b) => b.uid !== item.uid);
      dispatch({ type: "UPDATE_BOOKABLE", payload: removable });
    }
    dispatch({ type: "UPDATE_CART", payload });
  };
  const addToBooked = (booked, user, meeting, active) => {
    booked.push({ user, meeting, service: active, uid: shortid.generate() });
    dispatch({ type: "UPDATE_BOOKED", payload: booked });
  };

  const filter = async (services, filter) => {
    dispatch({ type: "IS_LOADING", payload: true });
    if (filter === "all") {
      return dispatch({ type: "LOAD_SERVICES", payload: services });
    }
    const data = services.filter((s) => s.subtitle === filter);
    dispatch({ type: "UPDATE_SERVICES", payload: data });
  };
  const setActive = (active) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_ACTIVE", payload: active });
  };
  const setIsUserReq = (data) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "SET_IS_USER_REQ", payload: data });
  };
  const bookEvent = (eventData, cart, idx) => {
    // add  booked
    const data = {
      ...cart[idx],
      isBookingRequired: false,
      isBooked: true,
      bookingErr: "",
      meeting: eventData.meeting,
    };
    console.log(data);
    dispatch({ type: "BOOK_REQUIRED", payload: { idx, data } });
    // add user data to user if not exists
    if (!user.uid) updateUserData({ ...eventData.values, uid: shortid.generate() });
    // notify success
    addMessageToLog({
      uid: eventData.meeting.uid,
      success: true,
      data: {
        isLink: true,
        isNav: true,
        link: "/checkout",
        word: "checkout",
        message: "Successfully booked event, would you like to proceed to checkout?",
      },
    });
  };
  const bookingRequired = (idx, payload) => {
    // const idx =
    const data = {
      ...payload,
      isBookingRequired: true,
      bookingErr: "Please book a time before proceeding",
    };
    dispatch({ type: "BOOK_REQUIRED", payload: { idx, data } });
  };
  const onQuantityChange = (quantity, item) => {
    const data = { ...item, count: quantity };
    dispatch({ type: "UPDATE_ITEM_QUANTITY", payload: data });
  };
  const setTotal = (total) => {
    dispatch({ type: "SET_TOTAL", payload: total });
  };
  return (
    <ServicesContext.Provider
      value={{
        isLoading: state.isLoading,
        isFiltered: state.isFiltered,
        filtered: state.filtered,
        cart: state.cart,
        active: state.active,
        isUserReq: state.isUserReq,
        total: state.total,
        bookable: state.bookable,
        booked: state.booked,
        bookEvent,
        filter,
        addToCart,
        addToBooked,
        removeFromCart,
        setActive,
        bookingRequired,
        onQuantityChange,
        setIsUserReq,
        setTotal,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
