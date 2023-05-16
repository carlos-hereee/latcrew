import ReadMore from "../ReadMore";
import CardHeader from "../card/CardHeader";

const ButtonRow = ({ data, click }) => {
  return (
    <button type="button" className="card-row d-row" onClick={click}>
      <CardHeader data={data} />
      {data.response && <ReadMore data={data.response} />}
    </button>
  );
};
export default ButtonRow;
