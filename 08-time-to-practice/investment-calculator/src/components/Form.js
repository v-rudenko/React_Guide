import classes from "./Form.module.css"

const Form = ({ onSubmit, onReset }) => {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.input_group}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input name="current-savings" type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input name="yearly-contribution" type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input name="expected-return" type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input name="duration" type="number" id="duration" />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={onReset} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
