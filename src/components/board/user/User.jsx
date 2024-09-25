import React from "react";

const User = ({ user }) => {
  return (
    <tr>
      <td>
        <h5>{user.name}</h5>
      </td>
      <td>
        <h5
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${user.latitude},${user.longitude}`,
              "_blank"
            )
          }
        >
          <p>{`${user.longitude} long`}</p>
          <p>{` ${user.latitude} lat`}</p>
        </h5>
      </td>
      <td>
        <h5>{user.nationalID}</h5>
      </td>
      <td>
        <div>
          <h5>{user.phone}</h5>
        </div>
      </td>
    </tr>
  );
};

export default User;
