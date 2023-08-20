import shortid from "shortid";
import { lorem20, lorem10, serviceSection } from "./variables";
import { formatDate, formatTime } from "../utils/moment";

export const app = {
  events: {
    title: "Book Appointments",
    subtitle: "",
    hasHero: false,
    isNav: false,
    hasIcon: false,
    sections: [
      {
        date: formatDate(new Date()),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(11, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        date: formatDate(new Date().setDate(new Date().getDate() + 1)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        date: formatDate(new Date().setDate(new Date().getDate() + 2)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        date: formatDate(new Date().setDate(new Date().getDate() + 3)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        date: formatDate(new Date().setDate(new Date().getDate() + 4)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        date: formatDate(new Date().setDate(new Date().getDate() + 5)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
    ],
  },
  services: {
    sections: [150, 200, 250].map((n) => serviceSection(n)),
  },
  socials: [
    {
      isEmpty: true,
      name: "instagram",
      link: "https://www.instagram.com//",
      uid: shortid.generate(),
    },
    {
      isEmpty: true,
      name: "twitter",
      link: "https://www.twitter.com//",
      uid: shortid.generate(),
    },
    {
      isEmpty: true,
      name: "facebook",
      link: "https://www.twitter.com//",
      uid: shortid.generate(),
    },
  ],
  checkout: {
    title: "Check out",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
    booked: { title: "Bag Summary" },
  },

  contact: {
    title: "Contact us",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
  },
  about: {
    title: "Welcome to Lat Crew",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hasSection: false,
    description: lorem10,
    hero: { link: "", name: "main-hero" },
    details: [lorem20, lorem10],
  },
  schedule: {
    title: "Bussiness Hours",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
    hours: [
      { day: "Monday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Tuesday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Wednesday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Thursday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Friday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Saturday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Sunday", hours: "Closed", key: shortid.generate() },
    ],
  },
  menu: [
    {
      name: "spanish",
      icon: "flag",
      isToggle: true,
      isAlt: true,
      uid: shortid.generate(),
      ping: 0,
      alt: "english",
    },
    {
      name: "services",
      icon: "services",
      uid: shortid.generate(),
      ping: 0,
      isAlt: false,
    },
    {
      name: "testimonials",
      icon: "testimonials",
      uid: shortid.generate(),
      ping: 0,
      isAlt: false,
    },
    {
      name: "about",
      icon: "about",
      uid: shortid.generate(),
      ping: 0,
      isAlt: false,
    },
    {
      name: "contact",
      icon: "contact",
      uid: shortid.generate(),
      ping: 0,
      isAlt: false,
    },
    {
      name: "FAQ",
      icon: "FAQ",
      uid: shortid.generate(),
      ping: 0,
      isAlt: true,
      isPrivate: true,
    },
    {
      name: "login",
      icon: "login",
      uid: shortid.generate(),
      isAlt: true,
      alt: "register",
    },
  ],
};
export const isDev = import.meta.env.VITE_NODE_ENV === "development";
