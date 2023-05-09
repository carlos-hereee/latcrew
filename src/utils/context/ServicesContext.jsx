import { createContext, useReducer, useContext, useEffect } from "react";
import shortid from "shortid";
import { reducer } from "../reducers/ServicesReducer";
import { LogContext } from "./LogContext";
import { UserContext } from "./UserContext";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    isUserReq: false,
    cart: [
      // {
      //   cost: 15,
      //   hasHero: false,
      //   hasIcon: false,
      //   hasLink: false,
      //   isAccessory: false,
      //   isBookable: true,
      //   isBooked: true,
      //   isForSale: true,
      //   isBookingRequired: false,
      //   hero: { link: "/lorem", name: "lorem ipsum" },
      //   hyperlink: [{ word: "Maiores", link: "/lorem" }],
      //   bookingErr: "",
      //   length: "20 minutes",
      //   response:
      //     "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
      //   subtitle: "manicure",
      //   title: "classic",
      //   uid: "pe-123-di-456-cu-789-re-0000",
      //   meeting: {
      //     uid: shortid.generate(),
      //     response: "9am - 10am",
      //     isOpen: false,
      //     hasHero: false,
      //     hasLink: false,
      //     date: formatDate(new Date()),
      //     time: {
      //       startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
      //       endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
      //     },
      //     attendees: {},
      //   },
      // },
    ],
    filteredServices: [],
    active: {},
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addMessageToLog } = useContext(LogContext);
  const { updateUserData, user } = useContext(UserContext);

  useEffect(() => {
    if (user.uid) {
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
  const filterServices = async (services, filter) => {
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
        filteredServices: state.filteredServices,
        cart: state.cart,
        active: state.active,
        isUserReq: state.isUserReq,
        total: state.total,
        bookEvent,
        filterServices,
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
