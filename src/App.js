import "./App.css";
import Home from "./components/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="appDisplay">
      {/* <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increase value</button>
      <button onClick={() => dispatch(decrement())}>Decrease value</button> */}
      <Home></Home>
    </div>
  );
}

export default App;
