// import { useAuth } from "./context/auth-user";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import Panel from "./components/Panel";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/panel">Panel</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <PrivateRoute path="/panel">
          <Panel />
        </PrivateRoute>
        <Route to='./login'>
          <Login/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
