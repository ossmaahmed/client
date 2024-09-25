import "./sidebar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Dashboard, PeopleAlt } from "@mui/icons-material";
import { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../../context/Auth/AuthContext";

const Sidebar = () => {
  const location = useLocation().pathname.split("/")[1];
  const [logout, setLogout] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogout(true);

    const timoutID = setTimeout(() => {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
      setLogout(false);
    }, 1000);

    return () => clearTimeout(timoutID);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={"/"}>
            <li className={`sidebarItem ${location !== "users" && "active"}`}>
              <Dashboard className="sidebarIcon" />
              <span className="sidebarListItemText">DASHBOARD</span>
            </li>
          </Link>
          <Link to={"/users"}>
            <li className={`sidebarItem ${location === "users" && "active"}`}>
              <PeopleAlt className="sidebarIcon" />
              <span className="sidebarListItemText">USERS</span>
            </li>
          </Link>
        </ul>
        <div className="logout" onClick={handleLogout}>
          {logout ? (
            <CircularProgress size={"28px"} style={{ color: "white" }} />
          ) : (
            "Logout"
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
