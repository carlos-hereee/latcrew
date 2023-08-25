// app context data
import app from "./pages/pages.landing.json";
import services from "./pages/pages.services.json";
import testimonials from "./pages/pages.testimonials.json";
import about from "./pages/pages.about.json";
import contact from "./pages/pages.contact.json";
import faq from "./pages/pages.faq.json";
import checkout from "./pages/pages.checkout.json";
import newsletter from "./app//newsletter.json";
import menu from "./app/menu.json";
import socials from "./app/socials.json";
// calendar data
import calendarState from "./state/calendarState.json";
// services data
import servicesState from "./state/servicesState.json";

const appState = {
  newsletter,
  isLoading: false,
  faq,
  about,
  checkout,
  contact,
  services,
  testimonials,
  menu,
  app,
  socials,
};

export { appState, calendarState, servicesState };
