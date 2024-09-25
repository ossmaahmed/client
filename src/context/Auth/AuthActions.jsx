export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const GetUserStart = (token) => ({
  type: "GET_USER_START",
  payload: token,
});

export const GetUserSuccess = (user, token) => ({
  type: "GET_USER_SUCCESS",
  payload: { user, token },
});

export const GetUserFailure = (error) => ({
  type: "GET_USER_FAILURE",
  payload: error,
});

export const Logout = () => ({
  type: "LOGOUT",
});
