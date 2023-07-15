import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <div className="container">
      <div className="flex-d-column">
        <HeroCard
          heading={about.heading}
          hero={{ ...about.hero, url: loadAsset(`${about.hero.url}`) }}
        />
        <p className="p-stretch">{about.body}</p>
      </div>
      <h2 className="heading">Meet our team</h2>
      <div className="flex-w">
        {about.team &&
          about.team.map((a) => (
            <FeatureCard
              name="meet-the-team"
              feature={{ heading: a.name, body: a.body }}
              hero={{ ...a.user.hero, url: loadAsset(a.user.hero.url) }}
            />
          ))}
      </div>
    </div>
  );
};

export default About;
