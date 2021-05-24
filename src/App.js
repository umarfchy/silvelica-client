import "./App.css";
import Home from "./components/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginFirebase from "./components/LoginFirebase/LoginFirebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="appDisplay">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LoginFirebase></LoginFirebase>
          </Route>
          <Route path="/*">
            <div>
              <h1>Nothing was found</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
