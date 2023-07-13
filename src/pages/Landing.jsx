import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCard } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";

const Landing = () => {
  const { app } = useContext(AppContext);

  return (
    <main>
      <HeroCard
        heading={app.heading}
        hero={{ ...app.hero, url: loadAsset(`${app.hero.url}`) }}
        tagline={app.tagline}
        cta={app.cta}
      />
      {/* <p>{app.description}</p> */}
    </main>
  );
};
export default Landing;
