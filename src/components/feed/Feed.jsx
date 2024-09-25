/* eslint-disable react-hooks/exhaustive-deps */
import "./feed.css";
import { useLocation } from "react-router-dom";
import InfoBox from "../infoBox/InfoBox";
import Board from "../board/Board";
import { useContext, useEffect } from "react";
import { getEmergenciesInfo } from "../../apiCalls";
import { AuthContext } from "../../context/Auth/AuthContext";
import { getEmergencies, getUsers } from "../../apiCalls";
import { toast } from "react-toastify";
import { BoardDataContext } from "../../context/Board Data/Context";

const Feed = () => {
  const location = useLocation().pathname.split("/")[1];
  const { token } = useContext(AuthContext);
  const { dispatch, info } = useContext(BoardDataContext);

  const getBoard = () => {
    if (location === "") {
      getEmergencies(token, dispatch, toast);
    } else if (location === "users") {
      getUsers(token, dispatch, toast);
    }
  };

  useEffect(() => {
    getBoard();
    getEmergenciesInfo(token, dispatch, toast);
    const intervalID = setInterval(() => {
      getBoard();
      getEmergenciesInfo(token, dispatch, toast);
    }, 60 * 1000);

    return () => clearInterval(intervalID);
  }, [location]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="i-name">
          {location === "users" ? "USERS" : "DASHBOARD"}
        </div>
        <div className="values">
          <InfoBox
            name={"total escalation"}
            number={info.totalEmergencies || 0}
          />
          <InfoBox
            name={"resolved  escalation"}
            number={info.resolvedEmergencies || 0}
          />
          <InfoBox name={"total users"} number={info.users || 0} />
        </div>
        <Board />
      </div>
    </div>
  );
};

export default Feed;
