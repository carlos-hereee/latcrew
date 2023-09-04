export const toggleMenuItemLogin = (menu, accessToken) => {
  // find auth menu item
  const idx = menu.findIndex((m) => m.isPrivate);
  const { alternatives, active } = menu[idx];
  const alt = alternatives.filter((alt) => alt.uid !== active.uid)[0];

  // access grandted and menu is stuck on login
  if (accessToken && active.link !== "dashboard") {
    // swap memu items
    menu[idx].active = alt;
    menu[idx].link = alt.link;
  }
  // access denied and menu stuck on dashboard
  if (!accessToken && active.link === "dashboard") {
    menu[idx].active = alt;
    menu[idx].link = alt.link;
  }
  return { altMenu: menu, idx };
};
