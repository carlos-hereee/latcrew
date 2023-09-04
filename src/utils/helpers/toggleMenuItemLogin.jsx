export const toggleMenuItemLogin = (menu, accessToken) => {
  const idx = menu.findIndex((m) => m.isPrivate);
  const { alternatives, active } = menu[idx];

  const alt = alternatives.filter((alt) => alt.uid !== active.uid)[0];

  // console.log("active", active);
  // console.log("alt", alt);
  // if (accessToken) {
  //   return { menuItem: alt };
  // }
  return {
    menuItem: alt,
    idx,
  };
};
