import React, { useState } from "react";
// import logo from './logo.svg';
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import Error from "./components/Error";

import styles from "./App.module.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const [showError, setShowError] = useState(false);

  const [error, setError] = useState({});

  const showErrorHandler = (error) => {
    // setMessage("Будь ласка вкажіть ім'я та вік (не порожні значення)");
    setError({
      type: error.type,
      text: error.text,
    });
    setShowError(true);
  };
  const hideErrorHandler = (event) => {
    setShowError(false);
  };

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
      <Error
        errorDisplayed={showError}
        onHideError={hideErrorHandler}
        error_type={error.type}
        error_text={error.text}
      />
    </div>
  );
};

export default App;
