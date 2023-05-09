import Buttons from "../buttons/Buttons";

const NavButton = ({ data, click }) => (
  <li key={data.uid} className="nav-link">
    <Buttons
      name={data.isAlt ? data.alt : data.name}
      notification={data.notification}
      handleClick={click}
    />
  </li>
);
export default NavButton;
