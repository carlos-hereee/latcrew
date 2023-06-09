import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AppContext } from "../../../utils/context/AppContext";
import Hero from "./Hero";

const Logo = () => {
  const { app } = useContext(AppContext);
  return (
    <Link to="/" className="logo-link">
      {/* <img src={logo} alt="industry brand" className="logo" /> */}
      <Hero data={{ name: app.name, link: logo }} />
      <h2>{app.name}</h2>
    </Link>
  );
};

export default Logo;
