import React from "react";
import styles from "./Form.module.css";
import User from "./User";

const UsersList = (props) => {
  let users = [];
  console.log(props.users);
  props.users.map((user) => {
    users.push(<User name={user.name} age={user.age} />);
  })
  if (users.length > 0){
    return (
      <div className={styles.form_wrapper}>
        <div className={styles.form}>
          {users}
        </div>
      </div>
    );
  }
};

export default UsersList;
