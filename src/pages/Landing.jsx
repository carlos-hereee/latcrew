import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { Socials } from "nexious-library/@nxs-molecules";

const Landing = () => {
  const { landing, media } = useContext(AppContext);
  return (
    <div className="container">
      <div className="flex-d-column">
        <HeroCard data={landing} />
        {landing && <p className="p-stretch">{landing.body}</p>}
      </div>
      <Socials socials={media.socials} heading={media.title} />
      <div className="feature-card-container m-tb">
        {landing?.features &&
          landing.features.map((af) => <FeatureCard key={af.uid} data={af} />)}
      </div>
    </div>
  );
};
export default Landing;
