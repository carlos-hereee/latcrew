import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";
import { Socials } from "nexious-library/@nxs-molecules";
const Landing = () => {
  const { app, socials } = useContext(AppContext);
  return (
    <main className="flex-d-column">
      <div className="flex-d-column">
        <HeroCard
          heading={app.heading}
          hero={{ ...app.hero, url: loadAsset(`${app.hero.url}`) }}
          tagline={app.tagline}
          cta={app.cta}
        />
        <p className="p-stretch">{app.description}</p>
      </div>
      <Socials
        data={socials}
        heading="Dont miss a thing! Follow us on our socials"
      />
      <div className="feature-card-container">
        {app.features.map((af) => (
          <FeatureCard
            key={af.uid}
            feature={af}
            hero={{ ...af.hero, url: loadAsset(af.hero.url) }}
          />
        ))}
      </div>
    </main>
  );
};
export default Landing;
