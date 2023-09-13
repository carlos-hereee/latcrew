const WelcomeMessage = (props) => {
  const { user, message } = props;
  return (
    <div className="banner">
      <h2 className="heading">
        {message} {user?.nickname ? user.nickname : user.username}
      </h2>
    </div>
  );
};
export default WelcomeMessage;
