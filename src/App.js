import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="App">
      <h1>React Redux</h1>
      <h4>Counter: {counter}</h4>
      <button className="btn btn-primary mr-3 mt-5" onClick={() => dispatch(increment(6))}>add</button>
      <button className="btn btn-danger mt-5" onClick={() => dispatch(decrement())}>reduce</button>
      <br/>
      <button className="btn btn-warning mt-4" onClick={() => dispatch(signIn())}>Show hidden file</button>
      {islogged? <p className="text-success mt-3">This is a secret message</p>:""}  
    </div>
  );
}

export default App;
