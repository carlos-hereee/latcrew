import CardRow from "../card/CardRow";

const BagItem = ({ data, setCancel }) => {
  return (
    <div className="bag-item">
      <CardRow data={data} setCancel={setCancel} />
    </div>
  );
};

export default BagItem;
