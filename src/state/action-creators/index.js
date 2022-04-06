export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const getLoginEmail = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "getEmail",
      payload: amount,
    });
  };
};
export const getLoginRole = (amountRole) => {
  return (dispatch) => {
    dispatch({
      type: "getRole",
      payload: amountRole,
    });
  };
};
