import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, Card } from "nexious-library";
import { Socials } from "nexious-library";
import { AuthContext } from "../utils/context/auth/AuthContext";
import AppInProgress from "@app/components/app/AppInProgress";
import UserPlayground from "./UserPlayground";

const Landing = () => {
  const { landing, media, app } = useContext(AppContext);
  const { user, accessToken } = useContext(AuthContext);

  // no app no login - everything's okay tho, app is under construction
  if (!app) return <AppInProgress />;
  // if login in but no app is been created
  if (!app && accessToken) return <UserPlayground />;
  return (
    <div className="container">
      {landing && (
        <div className="flex-d-column">
          <HeroCard data={landing} />
          <p className="text-max">{landing.body}</p>
        </div>
      )}
      {media && media.socials && <Socials socials={media.socials} heading={media.title} />}
      {landing?.features && (
        <div className="feature-card-container m-tb">
          {landing.features.map((af) => (
            <Card key={af.uid} data={af} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Landing;
