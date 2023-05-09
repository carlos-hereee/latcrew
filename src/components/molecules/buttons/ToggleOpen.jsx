const ToggleOpen = ({ data, click }) => {
  return (
    <button type="button" className="btn btn-main" onClick={click}>
      {data}
    </button>
  );
};
export default ToggleOpen;
