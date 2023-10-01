import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, Card, Header } from "nexious-library";
import { Socials } from "nexious-library";
import { AuthContext } from "../utils/context/auth/AuthContext";
import AppInProgress from "@app/components/app/AppInProgress";
import UserPlayground from "./UserPlayground";
import { useLocation } from "react-router-dom";
import { axiosAuth } from "@app/utils/axios/axiosAuth";

const AppData = () => {
  // const { landing, media, app } = useContext(AppContext);
  // const { user, accessToken } = useContext(AuthContext);
  const queryParams = useLocation();
  const [app, setApp] = useState<{ [key: string]: any }>({});
  // const appName = queryParams
  useEffect(() => {
    const getAppWithName = async (appName: string) => {
      const { data } = await axiosAuth.get(`/app/${appName}`);
      setApp(data);
    };
    if (queryParams.search) {
      const appName = queryParams.search.split("=")[1];
      getAppWithName(appName);
    }
  }, [queryParams.search]);
  console.log("app", app);
  const toggleMenu = (e) => {
    console.log("toggleMenu", e);
  };
  return (
    <div className="container">
      {app.menu && (
        <Header menu={app.menu} logo={app.logo} updateMenu={toggleMenu} language={app.languageId} />
      )}
      {app.landing && (
        <div className="flex-d-column">
          <HeroCard data={app.landing} />
          <p className="text-max">{app.landing.body}</p>
        </div>
      )}
      {app.media && app.media.socials?.length > 0 && (
        <Socials socials={app.media.socials} heading={app.media.title} />
      )}
      {app.landing?.features && (
        <div className="feature-card-container m-tb">
          {app.landing.features.map((af) => (
            <Card key={af.uid} data={af} />
          ))}
        </div>
      )}
    </div>
  );
};
export default AppData;
