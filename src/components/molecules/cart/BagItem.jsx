import ButtonLink from "../../atoms/buttons/ButtonLink";
import OpenAppButton from "../../atoms/buttons/OpenAppButton";
import CardRow from "../card/CardRow";

const BagItem = ({ data, setCancel }) => {
  return (
    <div className="bag-item" id={data.uid}>
      <CardRow data={data} setCancel={setCancel} />
      {data.isBookable && (
        <div className="bag-btns">
          <ButtonLink link="booking" />
          <OpenAppButton service={data} />
        </div>
      )}
    </div>
  );
};

export default BagItem;
