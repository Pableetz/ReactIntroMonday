import React, { useEffect } from "react";
import "./UsersList.css";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return <p>Chargement des utilisateurs...</p>;
  }

  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index} className="user-container">
            <p>{user.name.first}</p>
            <p>{user.name.last}</p>
            <p>{user.location.country}</p>
            <p>{user.email}</p>
            <img src={user.picture.thumbnail} alt="user" />
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
