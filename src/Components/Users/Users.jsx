import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ nom: "", prenom: "" });
  const [editUser, setEditUser] = useState(null);

  const API_URL = "http://localhost:3001/users";

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (event) => {
    event.preventDefault();
    try {
      await axios.post(API_URL, newUser);
      alert("Utilisateur crée avec succès");
      setUsers([...users, newUser]);
      setNewUser({ nom: "", prenom: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const startEdit = (user) => {
    setEditUser(user);
  };

  const updateUser = async () => {
    try {
      await axios.put(`${API_URL}/${editUser.id}`, editUser);
      setUsers(
        users.map((user) => (user.id === editUser.id ? editUser : user))
      );
      setEditUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Add user</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Nom"
          value={newUser.nom}
          onChange={(event) =>
            setNewUser({ ...newUser, nom: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Prénom"
          value={newUser.prenom}
          onChange={(event) =>
            setNewUser({ ...newUser, prenom: event.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nom} {user.prenom}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => startEdit(user)}>Edit</button>
          </li>
        ))}
      </ul>

      {editUser && (
        <form onSubmit={updateUser}>
          <input
            type="text"
            value={editUser.nom}
            onChange={(event) =>
              setEditUser({ ...editUser, nom: event.target.value })
            }
          />
          <input
            type="text"
            value={editUser.prenom}
            onChange={(event) =>
              setEditUser({ ...editUser, prenom: event.target.value })
            }
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default Users;
