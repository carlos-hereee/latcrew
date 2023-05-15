const RemoveFromCart = ({ data, click }) => {
  return (
    <>
      <strong className="ribbon">${data.cost}</strong>
      <button type="button" className="btn btn-main" onClick={click}>
        Remove from cart
      </button>
    </>
  );
};

export default RemoveFromCart;
