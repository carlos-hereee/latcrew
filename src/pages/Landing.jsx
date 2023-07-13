import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";

const Landing = () => {
  const { app } = useContext(AppContext);

  return (
    <main>
      <div>
        <HeroCard
          heading={app.heading}
          hero={{ ...app.hero, url: loadAsset(`${app.hero.url}`) }}
          tagline={app.tagline}
          cta={app.cta}
        />
        <p className="p-stretch">{app.description}</p>
      </div>
      <div className="flex-j-between">
        {app.features.map((af) => (
          <FeatureCard
            feature={af}
            hero={{ ...af.hero, url: loadAsset(af.hero.url) }}
          />
        ))}
      </div>
    </main>
  );
};
export default Landing;
