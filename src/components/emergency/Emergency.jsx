import React, { useContext } from "react";

import { toggleStatus } from "../../apiCalls";
import { AuthContext } from "../../context/Auth/AuthContext";
import { toast } from "react-toastify";

const Emergency = ({ emergency, setMedia, setMediaType, dispatch }) => {
  const { token } = useContext(AuthContext);

  return (
    <tr key={emergency._id}>
      <td>
        <h5>{emergency.title?.toUpperCase()}</h5>
      </td>
      <td
        className="media-data"
        onClick={() => {
          setMedia(emergency.media);
          setMediaType(emergency.mediaType);
        }}
      >
        <div>
          <h5>{emergency.mediaType?.toUpperCase()}</h5>
        </div>
      </td>
      <td>
        <h5
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${emergency.latitude},${emergency.longitude}`,
              "_blank"
            )
          }
        >
          <p>{`${emergency.longitude} long`}</p>
          <p>{` ${emergency.latitude} lat`}</p>
        </h5>
      </td>
      <td>
        <span
          className={emergency.resolved ? "no-help" : "need-help"}
          onClick={() => toggleStatus(emergency._id, token, dispatch, toast)}
        >
          {emergency.resolved ? "Resolved" : "Unresolved"}
        </span>
      </td>
      <td>
        <div>
          <h5>{emergency.phone}</h5>
        </div>
      </td>
    </tr>
  );
};

export default Emergency;
