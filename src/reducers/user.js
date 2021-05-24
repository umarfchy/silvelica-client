const defaultState = {
  isSignedIn: false,
  name: "",
  email: "",
  password: "",
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
