export const updateUserData = (dispatch, data) => {
  dispatch({ type: "IS_LOADING", payload: true });
  dispatch({ type: "SET_USER_DATA", payload: data });
};
