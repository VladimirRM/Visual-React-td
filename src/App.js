import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "randomcolor";
import Draggable from "react-draggable";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        item,
        color: randomColor({
          luminocity: "light",
        }),
        defaultPos: {
          x: 500,
          y: -500,
        },
      };
      setItems((items) => [...items, newItem]);
    } else {
      alert("Enter Something...");
      setItem("");
    }
  };

  const deleteNode =(id)=>{
    const newArr = [...items].filter((item)=> item.id === id)

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
      {items.map((item, index) => {
        return (
          <Draggable key={index} defaultPosition={item.defaultPos}>
            <div className="todo__item" style={{backgroundColor:item.color}}>
              {`${item}`}
              <button className="delete"
              onClick={()=>deleteNode(item.id)}>X</button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

export default App;
