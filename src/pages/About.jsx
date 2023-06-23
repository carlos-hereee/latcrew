import { useContext } from "react";
import { Heading } from "nexious-library";
import { AppContext } from "../context/AppContext";

const About = () => {
  const { about } = useContext(AppContext);
  return (
    <div className="container">
      <Heading data={about.title} />
      <div className="section-body">
        <p>{about.description}</p>
        {about.details.length > 0 && about.details.map((d) => <p key={d}>{d}</p>)}
      </div>
    </div>
  );
};

export default About;
