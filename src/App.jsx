import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(-1);
  const [editValue, setEditValue] = useState("");
  const handleTodo = () => {
    setTodo((prev) => {
      return [...prev, input];
    });
    setInput("");
  };
  const handleDelete = (index) => {
    setTodo((prev) => {
      return prev.toSpliced(index, 1);
    });
  };
  const handleEdit = () => {
    setTodo((prev) => {
      return prev.with(edit, editValue);
    });
    setEdit(-1);
    setEditValue("");
  };

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
        {todo.map((value, index) => {
          return (
            <div key={index}>
              {edit === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={handleEdit}>Done</button>
                </>
              ) : (
                <>
                  <input type="text" value={value} disabled />
                  <button
                    onClick={() => {
                      console.log(index);
                      setEditValue(value);
                      setEdit(index);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
