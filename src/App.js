import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/Auth/AuthContext";
import { getUser } from "./apiCalls";
import Loading from "./pages/loading/Loading";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let { user, token, error, dispatch } = useContext(AuthContext);
  token = token || localStorage.getItem("token");

  useEffect(() => {
    if (token) getUser(token, dispatch, toast);
  }, [token, dispatch]);

  return (
    <>
      {!user && !error && token ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={user ? <Dashboard /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/users"
            element={user ? <Dashboard /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
        </Routes>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
