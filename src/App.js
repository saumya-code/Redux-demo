import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <input type="button" value={isLogged?"Sign Out":"Sign In"} onClick={() => dispatch(login())}></input>
      {isLogged && <h3>Now Signed In ! Welcome !</h3>}
    </div>
  );
}

export default App;
