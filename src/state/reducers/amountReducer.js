const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "getEmail") {
    return (state = action.payload);
  } else {
    return state;
  }
};

export default reducer;
