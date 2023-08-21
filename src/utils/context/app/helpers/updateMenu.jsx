export const updateMenu = (dispatch, menu, payload) => {
  const menuPayload = menu.map((m) => {
    return { ...m, notification: payload[m.name] || 0 };
  });
  dispatch({ type: "UPDATE_MENU", payload: menuPayload });
};
