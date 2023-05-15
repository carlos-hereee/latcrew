import { useContext } from "react";
import CardRow from "../card/CardRow";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import OpenAppButton from "../../atoms/buttons/OpenAppButton";

const CartRow = ({ data, setCancel }) => {
  const { setActive } = useContext(ServicesContext);

  const handleClick = (d, isCancel) => {
    isCancel ? setCancel(d) : setActive(d);
  };
  return (
    <div className="row-wrapper" id={data.uid}>
      <CardRow data={data} click={handleClick} />
      {data.isBookable && <OpenAppButton service={data} />}
    </div>
  );
};

export default CartRow;
