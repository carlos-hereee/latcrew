import { useContext } from "react";
import { ServicesContext } from "../utils/context/services/ServicesContext";
import { AppContext } from "../utils/context/app/AppContext";
import { useNavigate } from "react-router-dom";

const FeatureItems = (props) => {
  const { services } = useContext(AppContext);
  const { setActive } = useContext(ServicesContext);
  const navigate = useNavigate();

  const handleClick = (data) => {
    setActive(data);
    navigate("/booking");
  };
  return (
    <div className="container">
      <h2 className="heading">Book a package now!</h2>
      {services.services.map((service) => (
        <CartRow data={service} key={service.uid} click={() => handleClick(service)} />
      ))}
    </div>
  );
};
export default FeatureItems;
