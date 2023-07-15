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
      <UserCard user={user} />
      <div>
        <Rating star={inputRating} />
        <Form
          values={{ message: "" }}
          submit={handleSubmit}
          hideLabels={true}
          name="testimonial-form"
        />
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
