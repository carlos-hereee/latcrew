import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import Logo from "../components/atoms/assets/Logo";
import BurgerButton from "../components/molecules/navigation/BugerButton";
import NavBar from "../components/organisms/navigation/NavBar";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const { cart, booked } = useContext(ServicesContext);
  const { menu, burger, toggleMenu, updateBurger, updateMenu } =
    useContext(AppContext);

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    const endAnimation = () => setClose(true);
    // TODO: close navigation is clicks outside container
    // const onClick = (event) => {
    //   // console.log("navRef.current", navRef.current);
    //   if (navRef.current && !navRef.current.contains(event.target)) {
    //     setClose(true);
    //   }
    // };
    document.addEventListener("animationend", endAnimation, true);
    // document.addEventListener("mousedown", onClick, true);
    return () => document.removeEventListener("animationend", endAnimation, true);
    // document.removeEventListener("mousedown", onClick, true);
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      const menuPayload = {
        accessory: cart.filter((c) => c.isAccessory).length,
        booking: cart.filter((c) => c.isBookable).length,
        checkout: booked.length,
      };
      const burgerPayload = {
        name: isActive ? "x" : "burger",
        notification: cart.length,
      };
      updateBurger(burger, burgerPayload);
      updateMenu(menu, menuPayload);
    } else {
      const payload = {
        accessory: 0,
        services: 0,
        booking: 0,
        checkout: booked.length,
      };
      updateBurger(burger, payload);
      updateMenu(menu, payload);
    }
  }, [JSON.stringify(cart), isActive]);

  const click = () => {
    setActive(!isActive);
  };
  return (
    <header>
      <Logo />
      <nav className="primary-navigation">
        <NavBar show={{ isActive, isClose }} toggle={toggleMenu} click={click} />
      </nav>
      <nav className="mobile-navigation">
        <BurgerButton isBurger={isActive} click={click} />
        <NavBar show={{ isActive, isClose }} toggle={toggleMenu} click={click} />
      </nav>
    </header>
  );
};
export default Header;
