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
import { deleteApp } from "./helpers/deleteApp";
import { addPage } from "./helpers/addPage";
import { uploadFile } from "./helpers/uploadFile";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appState);
  const { accessToken, language, user, appId } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (language.uid) {
  //     // const payload = language.locale === "es" ? spanishState : englishState;
  //     // updateAppAssets(dispatch, payload);
  //   }
  // }, [language]);

  // console.log("usser", user);
  useEffect(() => {
    // app was found
    if (appId) getLatestAppData(dispatch, appId);
  }, [appId]);

  useEffect(() => {
    // user is login
    if (accessToken) {
      isDev && console.log("token aquired");
      // navigate admin and regular users
      if (user && user.role === "admin") navigate("/admin-dashboard");
      // if (user.role === "admin") navigate("/add-page");
      // else navigate("/dashboard");
      if (state.menu) {
        const { altMenu, idx } = toggleMenuItemLogin(state.menu, accessToken);
        dispatch({ type: "UPDATE_MENU", payload: altMenu });
        // altMenu[idx].active.link && navigate(`/${altMenu[idx].active.link}`);
      }
    }
  }, [accessToken]);

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        isOffline: state.isOffline,
        isComingSoon: state.isComingSoon,
        app: state.app,
        pages: state.pages,
        logo: state.logo,
        pageValues: state.pageValues,
        pageValuesTypes: state.pageValuesTypes,
        pageLabels: state.pageLabels,
        pagePlaceholders: state.pagePlaceholders,
        appValues: state.appValues,
        appValuesTypes: state.appValuesTypes,
        appLabels: state.appLabels,
        appPlaceholders: state.appPlaceholders,
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
        uploadFile: (a) => uploadFile(dispatch, a),
        updateApp: (a) => updateApp(dispatch, a),
        deleteApp: (a) => deleteApp(dispatch, a),
        addPage: (a) => addPage(dispatch, a, appId, getLatestAppData),
      }}>
      {children}
    </AppContext.Provider>
  );
};
