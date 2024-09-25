import "./board.css";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import Emergency from "../emergency/Emergency";
import Media from "../media/Media";
import User from "./user/User";
import { CircularProgress } from "@mui/material";
import { BoardDataContext } from "../../context/Board Data/Context";

const Board = () => {
  const location = useLocation().pathname.split("/")[1];

  const { data, isFetching, dispatch } = useContext(BoardDataContext);

  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const boardBody = () => {
    if (!data?.length) {
      return (
        <tr>
          <td>
            <div>
              {location === "" ? "No emergencies yet." : "No users yet."}
            </div>
          </td>
        </tr>
      );
    }
    if (location === "") {
      return data.map((emer) => (
        <Emergency
          key={emer._id}
          emergency={emer}
          setMedia={setMedia}
          setMediaType={setMediaType}
          dispatch={dispatch}
        />
      ));
    } else {
      return data.map((user) => <User key={user._id} user={user} />);
    }
  };

  return (
    <>
      {media && (
        <Media media={media} mediaType={mediaType} setMedia={setMedia} />
      )}
      <div className="board">
        <table>
          <thead>
            {location === "" ? (
              <tr>
                <th>Type</th>
                <th>Media</th>
                <th>Location</th>
                <th>Progress</th>
                <th>Contact</th>
              </tr>
            ) : (
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>National ID</th>
                <th>Contact</th>
              </tr>
            )}
          </thead>
          <tbody>
            {isFetching ? (
              <tr>
                <td>
                  <CircularProgress style={{ color: "var(--main-color)" }} />
                </td>
              </tr>
            ) : (
              boardBody()
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Board;
