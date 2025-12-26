import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>our Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button
        onClick={() => {
          if (!text.trim()) return;
          setTodos([...todos, text]);
          setText("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
