import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import ButtonCancel from "../../atoms/buttons/ButtonCancel";
import ButtonRow from "../buttons/ButtonRow";

const CardRow = ({ data, setCancel, children }) => {
  const { active, setActive } = useContext(ServicesContext);

  return (
    <div className={`card-row-wrapper ${data.uid === active?.uid ? "active" : ""}`}>
      <ButtonCancel data={data} click={() => setCancel(data)} />
      <ButtonRow data={data} click={() => setActive(data)} />
      {children}
    </div>
  );
};

export default CardRow;
