import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { Socials } from "nexious-library/@nxs-molecules";
const Landing = () => {
  const { app, socials } = useContext(AppContext);

  return (
    <div className="container">
      <div className="flex-d-column">
        {app.uid && (
          <HeroCard
            heading={app.heading}
            hero={app.hero}
            tagline={app.tagline}
            cta={app.cta}
          />
        )}
        <p className="p-stretch">{app.description}</p>
      </div>
      <Socials data={socials} heading="Dont miss a thing! Follow us on our socials" />
      <div className="feature-card-container m-tb">
        {app &&
          app.features &&
          app.features.map((af) => (
            <FeatureCard key={af.uid} feature={af} hero={af.hero} />
          ))}
      </div>
    </div>
  );
};
export default Landing;
