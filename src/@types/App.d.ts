declare module "app-types" {
  export interface ChildProps {
    children: React.ReactNode;
  }
  export interface ReducerActions {
    type: string;
    payload: any;
  }
}
