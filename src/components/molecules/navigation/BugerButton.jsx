import { useContext } from "react";
import Icons from "../icons/Icons";
import SetNotificationCount from "../SetNotificationCount";
import { AppContext } from "../../../utils/context/AppContext";

const BurgerButton = ({ isBurger, click }) => {
  const { burger } = useContext(AppContext);
  // console.log("burger", burger);

  return (
    <button
      type="button"
      onClick={click}
      className={`${isBurger ? "x" : "burger"} btn-icons`}
      aria-controls="primary-navigation"
      aria-expanded={isBurger === "x"}
      aria-label="menu">
      <Icons name={isBurger ? "x" : "burger"} size="2x" />
      <SetNotificationCount count={burger.notification} />
    </button>
  );
};

export default BurgerButton;
