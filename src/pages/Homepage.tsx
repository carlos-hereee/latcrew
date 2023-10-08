import { AuthContext } from "@app/utils/context/auth/AuthContext";
import { useContext } from "react";
import UserPlayground from "./UserPlayground";
import Auth from "./Auth";

const Homepage: React.FC = () => {
  const { accessToken } = useContext(AuthContext);
  if (accessToken) return <UserPlayground />;
  return <Auth />;
};
export default Homepage;
