import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import {randomColor} from 'randomcolor'
import Draggable from "react-draggable";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


const newItem = ()=>{
if (item.trim() !== ''){
  const newItem ={
    id: uuidv4(),
    item:item,
    color: randomColor({
      luminocity:'light',
    }),
    defaultPos:{
      x: -100,
      y: -100
    }

  }
}
else{
  alert("Enter Something...")
}
}


  return (
    <div className="App">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Enter something"
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="enter" onClick={newItem}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default App;
