import NotificationCount from "../SetNotificationCount";
import Icons from "../icons/Icons";

const Buttons = ({ name, handleClick, notification, size }) => {
  return (
    <button type="button" onClick={handleClick} className={`btn-${name} btn-icons`}>
      <Icons name={name} size={size} />
      <span className="icon-label">{name[0].toUpperCase() + name.substring(1)}</span>
      <NotificationCount count={notification} />
    </button>
  );
};

export default Buttons;
