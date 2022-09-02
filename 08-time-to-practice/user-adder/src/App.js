import React, { useState } from "react";
// import logo from './logo.svg';
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import Error from "./components/Error";

import styles from "./App.module.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const [showError, setShowError] = useState(false);

  const [message, setMessage] = useState("")

  const showErrorHandler = (errorText) => {
    // setMessage("Будь ласка вкажіть ім'я та вік (не порожні значення)");
    setMessage(errorText);
    setShowError(true);
  }
  const hideErrorHandler = (event) => {
    setShowError(false);
  }

  const AddUserHandler = (user) => {
    console.log(`Додано користувача ${user.name} ${user.age}`);
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    console.log(users);
  };
  return (
    <div className={styles.App}>
      <Form AddUser={AddUserHandler} onShowError={showErrorHandler} />
      <UsersList users={users} />
      <Error errorDisplayed={showError} onHideError={hideErrorHandler} message={message} />
    </div>
  );
};

export default App;
