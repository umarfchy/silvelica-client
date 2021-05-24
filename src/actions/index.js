export const increment = nr => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//user login action
export const userLogin = currentUser => {
  return {
    type: "USER_LOGIN",
    payload: currentUser,
  };
};
