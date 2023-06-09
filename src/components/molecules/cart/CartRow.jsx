import CardRow from "../../../../../../personal-bizz/latcrew/src/components/molecules/card/CardRow";
import OpenAppButton from "../../../../../../personal-bizz/latcrew/src/components/atoms/buttons/OpenAppButton";

const CartRow = ({ data, setCancel }) => {
  return (
    <div className="row-wrapper flex-d-column" id={data.uid}>
      <CardRow data={data} setCancel={setCancel} />
      {data.isBookable && <OpenAppButton service={data} />}
    </div>
  );
};

export default CartRow;
