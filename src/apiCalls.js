import axios from "axios";

export const BASE_URL = "http://localhost:3500";

export const login = async (userCredentials, dispatch, toast) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res?.data?.token });
    localStorage.setItem("token", res?.data?.token);
    toast.success(`Welcome back, please help more people.`);
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.response?.data || error });
    toast.warning("Phone number or password incorrect, please try again.");
  }
};

export const getUser = async (token, dispatch, toast) => {
  dispatch({ type: "GET_USER_START", payload: token });
  try {
    const res = await axios.get(`${BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.data.role === "user") {
      dispatch({
        type: "GET_USER_FAILURE",
        payload: { message: "You are not admin." },
      });
      toast.error("You don't have permission to access this page.");
      return;
    }
    dispatch({
      type: "GET_USER_SUCCESS",
      payload: { user: res?.data, token: token },
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response?.data || error,
    });
  }
};

export const getEmergencies = async (token, dispatch, toast) => {
  dispatch({ type: "FETCHING_START" });
  try {
    const res = await axios.get(`${BASE_URL}/emergency`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: "FETCHING_SUCCESS", payload: res?.data?.data });
  } catch (error) {
    dispatch({
      type: "FETCHING_FAILURE",
      payload: error.response?.data || error,
    });
    toast.error(error.response?.data || error.message);
  }
};

export const getUsers = async (token, dispatch, toast) => {
  dispatch({ type: "FETCHING_START" });
  try {
    const res = await axios.get(`${BASE_URL}/user/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: "FETCHING_SUCCESS", payload: res?.data?.data });
  } catch (error) {
    dispatch({
      type: "FETCHING_FAILURE",
      payload: error.response?.data || error,
    });
    toast.error(error.response?.data?.message || error.message);
  }
};

export const toggleStatus = async (id, token, dispatch, toast) => {
  try {
    await axios.patch(
      `${BASE_URL}/emergency/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};

export const getEmergenciesInfo = async (token, dispatch, toast) => {
  try {
    const res = await axios.get(`${BASE_URL}/emergency/info`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: "FETCHING_INFO", payload: res.data?.data });
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};
