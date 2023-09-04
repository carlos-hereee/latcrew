import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./AppReducer";
import { updateMenu } from "./helpers/updateMenu";
import { newsletter } from "./helpers/newsletter";
import { selectPaymentType } from "./helpers/selectPaymentType";
import { readyCheckout } from "./helpers/readyCheckout";
import { seeDetails } from "./helpers/seeDetails";
import { resetSelect } from "./helpers/resetSelect";
import { updateFilter } from "./helpers/updateFilter";
import { updateAppliedFilter } from "./helpers/updateAppliedFilter";
import { resetFilter } from "./helpers/resetFilter";
import { AuthContext } from "../auth/AuthContext";
import { toggleMenuItemLogin } from "../../helpers/toggleMenuItemLogin";
import { useNavigate } from "react-router-dom";
import { getLatestAppData } from "./helpers/getLatestAppData";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isLoading: true });
  const { accessToken, language } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (language.uid) {
      // const payload = language.locale === "es" ? spanishState : englishState;
      // updateAppAssets(dispatch, payload);
    }
  }, [language]);

  useEffect(() => {
    if (state.menu) {
      // console.log("accessToken", accessToken);
      let menu = state.menu;
      const { menuItem, idx } = toggleMenuItemLogin(menu, accessToken);
      menu[idx].active = menuItem;
      dispatch({ type: "UPDATE_MENU", payload: menu });
      navigate(`/${menuItem.link}`);
    }
  }, [state.menu]);

  useEffect(() => {
    // fetch latest app data
    getLatestAppData(dispatch);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        app: state.app,
        calendar: state.calendar,
        media: state.media,
        about: state.about,
        services: state.services,
        menu: state.menu,
        schedule: state.schedule,
        burger: state.burger,
        gallery: state.gallery,
        faq: state.faq,
        checkout: state.checkout,
        contact: state.contact,
        footerNewsletter: state.footerNewsletter,
        landing: state.landing,
        testimonials: state.testimonials,
        paymentMethods: state.paymentMethods,
        selected: state.selected,
        paymentType: state.paymentType,
        disclaimer: state.disclaimer,
        filters: state.filters,
        filtered: state.filtered,
        appliedFilters: state.appliedFilters,
        isFiltered: state.isFiltered,
        filterToggle: state.filterToggle,
        updateBurger: (a) => updateBurger(dispatch, a),
        updateMenu: (a) => updateMenu(dispatch, a),
        newsletter: (a) => newsletter(dispatch, a),
        selectPaymentType: (a) => selectPaymentType(dispatch, a),
        readyCheckout: (a, b, c) => readyCheckout(dispatch, a, b, c),
        seeDetails: (a) => seeDetails(dispatch, a),
        resetSelect: () => resetSelect(dispatch),
        updateFilter: (a, b) => updateFilter(dispatch, a, b),
        updateAppliedFilter: (a, b) => updateAppliedFilter(dispatch, a, b),
        resetFilter: (a) => resetFilter(dispatch, a),
      }}>
      {children}
    </AppContext.Provider>
  );
};
