import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { HeroCardAlt } from "nexious-library/@nxs-organism";

const FAQ = () => {
  const { faq } = useContext(AppContext);
  return (
    <div>
      <HeroCardAlt data={faq} />
      <div className="flex-d-column">
        {faq.faq.map((f) => (
          <div className="faq" key={f.uid}>
            <h2 className="heading">{f.title}</h2>
            <p className="p-stretch">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
