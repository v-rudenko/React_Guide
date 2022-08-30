import React, { useState } from "react";
// import logo from './logo.svg';
import Form from "./components/Form";
import UsersList from "./components/UsersList";

import styles from "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const AddUserHandler = (user) => {
    console.log(`Додано користувача ${user.name} ${user.age}`);
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    console.log(users);
  };
  return (
    <div className="App">
      <Form AddUser={AddUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
