export const FetchingStart = () => ({
  type: "FETCHING_START",
});

export const FetchingSuccess = (emergencies) => ({
  type: "FETCHING_SUCCESS",
  payload: emergencies,
});

export const FetchingFailure = (error) => ({
  type: "FETCHING_FAILURE",
  payload: error,
});

export const FetchingInfo = (info) => ({
  type: "FETCHING_INFO",
  payload: info,
});
export const ToggleStatus = (id) => ({
  type: "TOGGLE_STATUS",
  payload: id,
});
