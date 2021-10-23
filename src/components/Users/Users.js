import React, { useEffect, useState } from "react";
import AddUser from "../AddUser/AddUser";
import User from "../User/User";

const Users = () => {
  const containerStyle = {
    backgroundColor: "goldenrod",
    color: "white",
    padding: "10px",
    margin: "10px",
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUserFromParent = (newUser) => {
    console.log("handling add user from parent");
    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const addedUser = data;
        const newUsers = [...users, addedUser];
        setUsers(newUsers);
      });
  };

  return (
    <div style={containerStyle}>
      <AddUser handleAddUserFromParent={handleAddUserFromParent} />
      <h2>Total Users: {users.length}</h2>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
