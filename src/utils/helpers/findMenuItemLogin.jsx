export const findMenuItemLogin = (menu) => {
  const idx = menu.findIndex((m) => m.isPrivate);
  const { alternatives, active } = menu[idx];
  return {
    menuItem: alternatives.filter((alt) => alt.uid !== active.uid)[0],
    idx,
  };
};
