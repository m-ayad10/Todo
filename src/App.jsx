import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const handleTodo = () => {
    setTodo((prev) => {
      return [...prev, input];
    });
    setInput('')
  };
  const handleDelete=(index)=>{
    setTodo((prev)=>{
      return prev.toSpliced(index,1)
    })
  }
  return (
    <>
      <h1>Todo</h1>
      <div className="todo_container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleTodo}>Add</button>
        <br />
        {
          todo.map((value,index)=>{
            return(
              <div key={index}>
                <input type="text" value={value} disabled />
                <button onClick={()=>handleDelete(index)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
