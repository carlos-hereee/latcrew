import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { app } = useContext(AppContext);
  return (
    <footer className="footer">
      <small>
        {app.name} © {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
