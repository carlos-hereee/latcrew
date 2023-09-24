import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { Socials } from "nexious-library/@nxs-molecules";
import { AuthContext } from "../utils/context/auth/AuthContext";

const Landing = () => {
  const { landing, media } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  // console.log("app, landing, media", app);
  // console.log("user, landing, media", user);

  return (
    <div className="container">
      {landing && (
        <div className="flex-d-column">
          <HeroCard data={landing} />
          <p className="text-max">{landing.body}</p>
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
