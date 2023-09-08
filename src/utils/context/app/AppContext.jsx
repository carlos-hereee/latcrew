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
import appState from "../../../data/appState.json";
import { uploadImage } from "./helpers/uploadImage";
import { getFiles } from "./helpers/getFiles";
import { isDev } from "../../helpers/isDev";
import { updateApp } from "./helpers/updateApp";
import { buildApp } from "./helpers/buildApp";
import { deleteApp } from "./helpers/deleteApp";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appState);
  const { accessToken, language, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (language.uid) {
  //     // const payload = language.locale === "es" ? spanishState : englishState;
  //     // updateAppAssets(dispatch, payload);
  //   }
  // }, [language]);

  useEffect(() => {
    // user is login
    if (accessToken) {
      isDev && console.log("token aquired");
      // navigate admin and regular users
      if (user.role === "admin") navigate("/admin-dashboard");
      else navigate("/dashboard");
      if (state.menu) {
        const { altMenu, idx } = toggleMenuItemLogin(state.menu, accessToken);
        dispatch({ type: "UPDATE_MENU", payload: altMenu });
        navigate(`/${altMenu[idx].link}`);
      }
    }
    // avoiding redundant request
    else getLatestAppData(dispatch);
  }, [accessToken]);

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        isOffline: state.isOffline,
        isComingSoon: state.isComingSoon,
        app: state.app,
        logo: state.logo,
        pageValues: state.pageValues,
        pageValuesTypes: state.pageValuesTypes,
        pageLabels: state.pageLabels,
        pagePlaceholders: state.pagePlaceholders,
        calendar: state.calendar,
        uploadFileError: state.uploadFileError,
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
        uploadImage: (a, b) => uploadImage(dispatch, a, b),
        getFiles: (a) => getFiles(dispatch, a),
        updateApp: (a) => updateApp(dispatch, a),
        buildApp: (a) => buildApp(dispatch, a),
        deleteApp: (a) => deleteApp(dispatch, a),
      }}>
      {children}
    </AppContext.Provider>
  );
};
