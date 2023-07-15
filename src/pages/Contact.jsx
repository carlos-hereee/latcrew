import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HeroCardAlt, CardSection, Form } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";
const Contact = () => {
  const { contact } = useContext(AppContext);
  const handleSubmit = (e) => {
    console.log("e", e);
  };
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
      <p className="p-stretch text-center">
        For immediate assistance, use our convenient contact form below. We look
        forward to hearing from you!
      </p>
      <div className="w-100">
        <Form
          values={{ name: "", email: "", message: "" }}
          submit={handleSubmit}
          stretchInput
        />
      </div>
    </div>
  );
};
export default Contact;
