import { createContext, useReducer } from "react";
import BoardDataReducer from "./Reducer";

const INITIAL_STATE = {
  data: [],
  info: {},
  isFetching: false,
  error: false,
};

export const BoardDataContext = createContext(INITIAL_STATE);

export const BoardDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BoardDataReducer, INITIAL_STATE);

  return (
    <BoardDataContext.Provider
      value={{
        data: state.data,
        info: state.info,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </BoardDataContext.Provider>
  );
};
