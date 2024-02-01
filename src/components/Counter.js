import { counterAction } from "../store/counterSlice";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // useDispatch({ type: "increment" });
    dispatch(counterAction.toggle());
  };

  const increment = () => {
    dispatch(counterAction.increment());
  };
  const increase = (num) => {
    dispatch(counterAction.increase(5)); // default arg is {type:someUniquename, payload:5}
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={() => increase(5)}>increment by 5</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>reset</button>
    </main>
  );
};

export default Counter;
