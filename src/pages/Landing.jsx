import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { Socials } from "nexious-library/@nxs-molecules";
const Landing = () => {
  const { landing, media } = useContext(AppContext);

  return (
    <div className="container">
      <div className="flex-d-column">
        {landing && (
          <HeroCard
            heading={landing.heading}
            hero={landing.hero}
            tagline={landing.tagline}
            cta={landing.cta}
          />
        )}
        {landing && <p className="p-stretch">{landing.body}</p>}
      </div>
      <Socials socials={media.socials} heading={media.title} />
      <div className="feature-card-container m-tb">
        {landing &&
          landing.features &&
          landing.features.map((af) => (
            <FeatureCard key={af.uid} feature={af} hero={af.hero} />
          ))}
      </div>
    </div>
  );
};
export default Landing;
