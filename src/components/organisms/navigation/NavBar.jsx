import { useContext } from "react";
import NavButton from "../../molecules/navigation/NavButton";
import Navlink from "../../molecules/navigation/Navlink";
import { AppContext } from "../../../utils/context/AppContext";

const NavBar = ({ show, toggle, click }) => {
  const { menu } = useContext(AppContext);
  return (
    <ul
      className="navigation"
      data-state={show.isActive ? "open" : show.isClose ? "closing" : "close"}>
      {menu.map((m) =>
        m.isToggle ? (
          <NavButton data={m} key={m.uid} click={() => toggle(menu, m)} />
        ) : (
          <Navlink data={m} key={m.uid} click={() => click(m)} />
        )
      )}
    </ul>
  );
};

export default NavBar;
