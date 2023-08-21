// auth context data
import authState from "../../data/state/authState.json";
// app context data
import app from "../../data/pages/pages.landing.json";
import services from "../../data/pages/pages.services.json";
import testimonials from "../../data/pages/pages.testimonials.json";
import about from "../../data/pages/pages.about.json";
import contact from "../../data/pages/pages.contact.json";
import faq from "../../data/pages/pages.faq.json";
import checkout from "../../data/pages/pages.checkout.json";
import newsletter from "../../data/app//newsletter.json";
import menu from "../../data/app/menu.json";
import socials from "../../data/app/socials.json";
// calendar data
import calendarState from "../../data/state/calendarState.json";
// services data
import servicesState from "../../data/state/servicesState.json";

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

export { authState, appState, calendarState, servicesState };
