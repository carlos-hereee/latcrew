import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCardAlt, CardSection } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";
const Contact = () => {
  const { contact } = useContext(AppContext);
  console.log("contact", contact.contact);
  return (
    <div className="container">
      <HeroCardAlt
        heading={contact.heading}
        hero={{ ...contact.hero, url: loadAsset(contact.hero.url) }}
        body={contact.body}
      />
      <div className="contact-cards">
        {contact.contact.map((c) => (
          <CardSection
            key={c.uid}
            header={{
              title: c.name,
              hasHero: true,
              hero: { ...c.hero, url: loadAsset(c.hero.url) },
            }}
            body={c.body}
          />
        ))}
      </div>
    </div>
  );
};
export default Contact;
