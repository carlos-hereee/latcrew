const AddToCart = ({ data, click }) => {
  return (
    <>
      <strong className="ribbon">${data.cost}</strong>
      <button type="button" className="btn btn-main" onClick={click}>
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
