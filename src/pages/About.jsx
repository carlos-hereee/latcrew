import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCard, FeatureCard } from "nexious-library/@nxs-organism";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <div className="container">
      <div className="flex-d-column">
        <HeroCard heading={about.heading} hero={about.hero} />
        <p className="p-stretch">{about.body}</p>
      </div>
      <h2 className="heading">Meet our team</h2>
      <div className="flex-w flex-center">
        {about.team &&
          about.team.map((a) => (
            <FeatureCard
              key={a.uid}
              name="meet-the-team"
              feature={{ heading: a.name, body: a.body }}
              hero={a.user.hero}
            />
          ))}
      </div>
    </div>
  );
};

export default About;
