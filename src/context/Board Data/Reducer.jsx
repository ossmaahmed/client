const BoardDataReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_START":
      return {
        data: null,
        info: state.info,
        isFetching: true,
        error: false,
      };
    case "FETCHING_SUCCESS":
      return {
        data: action.payload,
        info: state.info,
        isFetching: false,
        error: false,
      };
    case "FETCHING_FAILURE":
      return {
        data: null,
        info: state.info,
        isFetching: false,
        error: action.payload,
      };
    case "FETCHING_INFO":
      return {
        data: state.data,
        info: action.payload,
        isFetching: false,
        error: false,
      };
    case "TOGGLE_STATUS":
      return {
        data: state.data.map((emergency) =>
          emergency._id === action.payload
            ? { ...emergency, resolved: !emergency.resolved }
            : emergency
        ),
        info: {
          users: state.info.users,
          totalEmergencies: state.info.totalEmergencies,
          resolvedEmergencies: state.data.find(
            (emergency) => emergency._id === action.payload
          ).resolved
            ? state.info.resolvedEmergencies--
            : state.info.resolvedEmergencies++,
        },
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default BoardDataReducer;
