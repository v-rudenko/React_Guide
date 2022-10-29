import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile"

function App() {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {/* <Auth /> */}
      {isLoggedIn === false ? <Auth/> : <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
