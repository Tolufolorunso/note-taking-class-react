import React from "react";
import Header from "./components/header/header";
import "./app.css";
function App() {
  const name = "abigail";
  const projectName = "Note Taking App";
  
  function clickHandler() {
    console.log("you clicked me");
  }
  return (
    <div>
      <Header name="Note Taking" onClick={clickHandler} />
      <h1 onClick={clickHandler} className="heading">
        {projectName.toUpperCase()}
      </h1>
      <form action="">
        <button onClick={clickHandler}>Click Event</button>
      </form>
      <footer></footer>
    </div>
  );
}

export default App;
