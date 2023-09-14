export const filterUserValues = (user) => {
  const desiredData = ["userId", "username", "email", "langaugeId"];
  const userData = {};
  Object.keys(user).forEach((key) => {
    if (desiredData.includes(key)) userData[key] = user[key];
  });
  return userData;
};
