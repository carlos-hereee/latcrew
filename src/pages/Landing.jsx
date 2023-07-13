import { useContext } from "react";
import { AppContext } from "../context/AppContext";

// import About from "./About";
const Landing = () => {
  const { app } = useContext(AppContext);
  return (
    <main>
      <h2 className="heading">{app.name}</h2>
    </main>
  );
};
export default Landing;
