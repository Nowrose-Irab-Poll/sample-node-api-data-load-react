import React from "react";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    backgroundColor: "#33B277",
    margin: "10px",
    padding: "10px",
  };

  return (
    <div>
      <li style={userStyle}>
        <h4>
          {id}. {name}
        </h4>
        <p>{email}</p>
        <p>{phone}</p>
      </li>
    </div>
  );
};

export default User;
