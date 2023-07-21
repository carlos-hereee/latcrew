import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCardAlt } from "nexious-library/@nxs-organism";

const FAQ = () => {
  const { faq } = useContext(AppContext);
  return (
    <div>
      <HeroCardAlt heading={faq.heading} hero={faq.hero} body={faq.body} />
      <div className="flex-d-column">
        {faq.faq.map((f) => (
          <div className="faq" key={f.uid}>
            <h2 className="heading">{f.name}</h2>
            <p className="p-stretch">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
