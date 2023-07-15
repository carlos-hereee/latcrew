import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCardAlt } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";

const FAQ = () => {
  const { faq } = useContext(AppContext);
  console.log("faq", faq);
  return (
    <div>
      <HeroCardAlt
        heading={faq.heading}
        hero={{ ...faq.hero, url: loadAsset(faq.hero.url) }}
        body={faq.body}
      />
      <div className="flex-d-column">
        {faq.faq.map((f) => (
          <div className="faq">
            <h2 className="heading">{f.name}</h2>
            <p className="p-stretch">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
