import Icons from "../../molecules/icons/Icons";

const ButtonCancel = ({ data, click }) => (
  <button type="button" className="btn-cancel" onClick={() => click(data, true)}>
    <Icons name="x" />
  </button>
);
export default ButtonCancel;
