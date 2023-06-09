import Icons from "./icons/Icons";

const NotificationCount = ({ count }) => {
  return (
    <>
      {count <= 9 && count > 0 && (
        <span className="ping">{<Icons name={count} />}</span>
      )}
      {count > 9 && (
        <span className="ping">
          {count
            .toString()
            .split("")
            .map((n) => (
              <Icons name={n} key={n} />
            ))}
        </span>
      )}
    </>
  );
};

export default NotificationCount;
