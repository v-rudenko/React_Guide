import logo from '../assets/investment-calculator-logo.png';
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
        <img src={logo} alt="logo" />
        <h1>Розрахувати Інвестиції</h1>
      </header>
  )
}
export default Header