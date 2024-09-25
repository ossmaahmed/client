import "./media.css";

import { Close } from "@mui/icons-material";

const Media = ({ media, mediaType, setMedia }) => {
  return (
    <div className="media-wrapper">
      {mediaType === "audio" ? (
        <audio className="media" controls src={media}></audio>
      ) : mediaType === "video" ? (
        <video className="media" controls src={media}></video>
      ) : (
        <img className="media" src={media} alt="" />
      )}

      <div
        className="close-container"
        onClick={() => {
          setMedia(null);
        }}
      >
        <Close />
      </div>
    </div>
  );
};

export default Media;
