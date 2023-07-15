import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCardAlt } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";
const Contact = () => {
  const { contact } = useContext(AppContext);
  console.log("contact", contact);
  return (
    <div className="container">
      <HeroCardAlt
        heading={contact.heading}
        hero={{ ...contact.hero, url: loadAsset(contact.hero.url) }}
        body={contact.body}
      />
    </div>
  );
};
export default Contact;
