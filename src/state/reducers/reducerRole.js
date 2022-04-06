const reducerRole = (state = 0, action) => {
  if (action.type === "getRole") {
    return (state = action.payload);
  } else {
    return state;
  }
};
export default reducerRole;
