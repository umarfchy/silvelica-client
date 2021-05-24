import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

//components
import Home from "./components/Home/Home/Home";
import LoginFirebase from "./components/LoginFirebase/LoginFirebase";

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
          <PrivateRoute path="/success">
            <h3>Purchase Success!!!</h3>
          </PrivateRoute>
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
