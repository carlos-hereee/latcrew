import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { TextBubble } from "nexious-library/@nxs-atoms";
import { Rating } from "nexious-library/@nxs-molecules";
import { UserCard, Form } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";
import { AuthContext } from "../context/AuthContext";

const Testimonials = () => {
  const { testimonials } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const [inputRating, setInputRating] = useState(0);
  const handleSubmit = (e) => {
    console.log("handleSubmit", e);
  };
  return (
    <div className="container">
      <h1 className="heading">{testimonials.title}</h1>
      <p className="p-stretch">{testimonials.body}</p>
      <div className="testimonial-form-wrapper w-100">
        <UserCard
          user={{ ...user, hero: { url: loadAsset(user.hero.url) } }}
          hideLabels
        />
        <div className="w-100">
          <Rating star={inputRating} click={(e) => setInputRating(e)} />
          <Form
            values={{ message: "" }}
            submit={handleSubmit}
            name="testimonial-form"
            hideLabels
            stretchInput
          />
        </div>
      </div>
      {testimonials.reviews.length > 0 &&
        testimonials.reviews.map((t) => (
          <div className="flex-g" key={t.uid}>
            <UserCard
              user={{
                ...t.user,
                hero: { url: loadAsset(t.user.hero.url) },
              }}
            />
            <div>
              <Rating star={t.rating} />
              <TextBubble data={t} />
            </div>
          </div>
        ))}
    </div>
  );
};
export default Testimonials;
