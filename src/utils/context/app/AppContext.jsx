import { createContext, useReducer } from "react";
import { reducer } from "../log/LogReducer";
import { appState } from "../initialData";
import { updateMenu } from "./helpers/updateMenu";
import { newsletter } from "./helpers/newsletter";
import { selectPaymentType } from "./helpers/selectPaymentType";
import { readyCheckout } from "./helpers/readyCheckout";
import { seeDetails } from "./helpers/seeDetails";
import { resetSelect } from "./helpers/resetSelect";
import { updateFilter } from "./helpers/updateFilter";
import { updateAppliedFilter } from "./helpers/updateAppliedFilter";
import { resetFilter } from "./helpers/resetFilter";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appState);

  // useEffect(() => {
  //   if (accessToken) {
  //     getAllAssets(accessToken);
  //   }
  // }, [accessToken]);

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        socials: state.socials,
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
        app: state.app,
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
        updateMenu: (a, b) => updateMenu(dispatch, a, b),
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
