import "./topbar.css";

import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">
            <img src="/assets/logo.png" alt="" />
          </span>
        </Link>
      </div>
      <div className="topbarRight">
        {/* <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for something..."
            className="searchInput"
          />
        </div> */}
        <div className="username">
          <span>Welcome,</span>
          {user.name}
        </div>
        <img src="/assets/noAvatar.png" alt="user_image" />
      </div>
    </div>
  );
};

export default Topbar;
