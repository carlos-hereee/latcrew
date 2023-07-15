import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TextBubble } from "nexious-library/@nxs-atoms";
import { Rating } from "nexious-library/@nxs-molecules";
import { UserCard } from "nexious-library/@nxs-organism";
import { loadAsset } from "../assets/getUrl";

const Testimonials = () => {
  const { testimonials } = useContext(AppContext);
  console.log("testimonials", testimonials);
  return (
    <div className="container">
      <h1 className="heading">{testimonials.title}</h1>
      <p className="p-stretch">{testimonials.body}</p>
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
