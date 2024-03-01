import React from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";
import DataComponent from "./components/DataComponent";

function App({ props }) {

  return (
    <div>
      <img src={props.img} alt=""  />
    </div>
  );
}

export default App;