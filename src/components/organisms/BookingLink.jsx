import OpenAppButton from "../atoms/buttons/OpenAppButton";
import ButtonLink from "../atoms/buttons/ButtonLink";

const BookingLink = ({ data }) => {
  return (
    <div className="row">
      <ButtonLink link="booking" />
      <OpenAppButton service={data} />
    </div>
  );
};

export default BookingLink;
