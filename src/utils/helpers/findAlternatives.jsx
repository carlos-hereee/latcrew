export const findAlternatives = (menu) => {
  const idx = menu.findIndex((m) => m.isPrivate);
  const alt = menu[idx].alternatives.filter((alt) => alt.uid !== menu[idx].active)[0];
  if (alt) menu[idx].active = alt.uid;
  return menu;
};
