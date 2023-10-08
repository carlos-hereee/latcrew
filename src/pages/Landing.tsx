import { useContext } from "react";
import { AppContext } from "@context/app/AppContext";
import { HeroCard, Card } from "nexious-library";
import { Socials } from "nexious-library";
import { SectionProps } from "app-types";

const Landing = () => {
  const { landingPage, media } = useContext(AppContext);

  return (
    <div className="container">
      {landingPage && (
        <div className="flex-d-column">
          <HeroCard data={landingPage} />
          <p className="text-max">{landingPage.body}</p>
        </div>
      )}
      {media && media.sections && media.sections.length > 0 && (
        <Socials socials={media.sections} heading={media.title} />
      )}
      {landingPage?.sections && (
        <div className="feature-card-container m-tb">
          {landingPage.sections.map((af: SectionProps, idx: number) => (
            <Card key={af.uid || idx} data={af} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Landing;
