const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: null,
        token: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        token: null,
        isFetching: false,
        error: action.payload,
      };
    case "GET_USER_START":
      return {
        user: null,
        token: action.payload,
        isFetching: true,
        error: false,
      };
    case "GET_USER_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isFetching: false,
        error: false,
      };
    case "GET_USER_FAILURE":
      return {
        user: null,
        token: null,
        isFetching: false,
        error: action.payload,
      };
    case "LOGOUT":
      localStorage.setItem("token", null);
      return {
        user: null,
        token: null,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
