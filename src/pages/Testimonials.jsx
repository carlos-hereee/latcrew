import { useContext, useState } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { TextBubble } from "nexious-library/@nxs-atoms";
import { Rating } from "nexious-library/@nxs-molecules";
import { UserCard, Form } from "nexious-library/@nxs-organism";
import { AuthContext } from "../utils/context/auth/AuthContext";

const Testimonials = () => {
  const { testimonials } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const [inputRating, setInputRating] = useState(0);
  const handleSubmit = (e) => {
    // console.log("handleSubmit", e);
  };
  return (
    <div className="container">
      <h1 className="heading">{testimonials.title}</h1>
      <p className="p-stretch">{testimonials.body}</p>
      <div className="m-tb flex-g w-100">
        {user && <UserCard user={user} hideLabels />}
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
          <div className="flex-g w-100 m-tb" key={t.uid}>
            <UserCard user={t.user} hideLabels />
            <div className="w-100 review-container">
              <Rating star={t.rating} />
              <TextBubble data={t} />
            </div>
          </div>
        ))}
    </div>
  );
};
export default Testimonials;
