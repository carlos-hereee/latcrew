import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCard } from "nexious-library/@nxs-organism";
// import About from "./About";
const Landing = () => {
  const { app } = useContext(AppContext);
  return (
    <main>
      <HeroCard
        heading={app.heading}
        hero={{ ...app.hero, url: require(`src/assets/${app.hero.url}`) }}
        tagline={app.tagline}
        cta={app.cta}
      />

      {/* <p>{app.description}</p> */}
    </main>
  );
};
export default Landing;
