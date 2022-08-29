import React from 'react' 
import styles from './Form.module.css'

const Form = () => {


  return (
    <div className={styles.form_wrapper}>
      <form action="">
        <div className={styles.form}>
          <label>Ім'я користувача</label>
          <input type="text" />
          <label>Вік (років)</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Form;