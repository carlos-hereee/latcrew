import { createContext, useReducer, useContext, useEffect } from "react";
import shortid from "shortid";
import { LogContext } from "./LogContext";
import { reducer } from "../reducer/ServicesReducer";
import { AuthContext } from "./AuthContext";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    isUserReq: true,
    cart: [
      {
        cost: 53,
        count: 1,
        hasHero: false,
        hasIcon: false,
        hasLink: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        isAccessory: false,
        isBookable: true,
        isForSale: true,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias reprehenderit. Voluptates fugit tenetur itaque minus sed, assumenda delectus accusantium!",
        subtitle: "Dolor sit",
        title: "Lorem Ipsum",
        uid: "24pJ0yCJo31",
      },
    ],
    filtered: [],
    active: {},
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addMessageToLog } = useContext(LogContext);
  const { updateUserData, user } = useContext(AuthContext);

  useEffect(() => {
    if (user.uid) {
      console.log("user", user);
      setIsUserReq(false);
    }
  }, [user]);

  const addToCart = (service) => {
    dispatch({ type: "ADD_TO_CART", payload: service });
  };
  const removeFromCart = (service, active) => {
    try {
      // reset active if it matches item
      service.uid === active.uid && setActive({});
      dispatch({ type: "REMOVE_FROM_CART", payload: service });
    } catch (err) {
      const data = err.response.data;
      addMessageToLog(data);
    }
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
        bookEvent,
        filter,
        addToCart,
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
