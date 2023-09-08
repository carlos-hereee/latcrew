import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { Socials } from "nexious-library/@nxs-molecules";
import AppInProgress from "../components/AppInProgress ";

const Landing = () => {
  const { landing, media, app } = useContext(AppContext);
  // console.log("app, landing, media", app);
  if (!app) return <AppInProgress />;
  return (
    <div className="container">
      {landing && (
        <div className="flex-d-column">
          <HeroCard data={landing} />
          <p className="p-stretch">{landing.body}</p>
        </div>
      )}
      {media && media.socials && (
        <Socials socials={media.socials} heading={media.title} />
      )}
      {landing?.features && (
        <div className="feature-card-container m-tb">
          {landing.features.map((af) => (
            <FeatureCard key={af.uid} data={af} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Landing;
