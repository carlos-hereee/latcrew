import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Heading from "../components/atoms/texts/Heading";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <div className="container">
      <Heading data={about} />
      <div className="section-body">
        <p>{about.description}</p>
        {about.details.length > 0 && about.details.map((d) => <p key={d}>{d}</p>)}
      </div>
    </div>
  );
};

export default About;
