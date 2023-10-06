declare module "app-types" {
  export interface ChildProps {
    children: React.ReactNode;
  }
  export interface ReducerActions {
    type: string;
    payload: any;
  }
  export interface SectionProps {
    title: string;
    subtitle?: string;
    details?: string;
    data?: string;
    theme?: string;
    sections?: { [key: string]: string }[];
  }
  export interface MenuProps {
    menuId: string;
    isToggle: boolean;
    isPrivate: boolean;
    active: string;
    theme?: string;
    alternatives: { [key: string]: string }[];
  }
  export interface CalendarProps {
    name: string;
    theme?: string;
    calendarId: string;
    events: { [key: string]: string }[];
  }
}
