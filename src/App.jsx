import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";


const App = () => {
  return (
    <div>
      <Header />
      <Form />
    </div>
  );
};

export default App;

// const name = "abigail";
// const projectName = "Note Taking App";

// function clickHandler(e) {
//   e.preventDefault();
//   console.log("you clicked me");
// }
// return (
//   <div>
//     <Header name="Note Taking" onClick={clickHandler} />
//     <h1 onClick={clickHandler} className="heading">
//       {projectName.toUpperCase()}
//     </h1>
//     <form action="">
//       <button onClick={clickHandler}>Click Event</button>
//     </form>
//     <footer></footer>
//   </div>
// );
