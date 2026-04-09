import React, { useState, useMemo, useCallback } from "react";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export default function Todo() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);


  const handleAdd = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleChange = (id: number) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };


  const pendingTasks = useMemo(() => {
    return todo.filter((item) => !item.isCompleted);
  }, [todo]);

 
  const completedTasks = useMemo(() => {
    return todo.filter((item) => item.isCompleted);
  }, [todo]);


  
  
  const handleClear = useCallback(() => {
    setTodo([]);
  }, []);

  return (
    <>
      <label>Enter Todo: </label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

 
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompletedOnly}
            onChange={() => setShowCompletedOnly((prev) => !prev)}
          />
          Show Completed Only
        </label>
      </div>

      <button onClick={handleClear}>Clear All</button>


      <h2>Pending Tasks</h2>
      <ol>
        {pendingTasks.length ? (
          pendingTasks.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.isCompleted
                    ? "line-through"
                    : "none",
                }}
              >
                {item.text}
              </span>

              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleChange(item.id)}
              />
            </li>
          ))
        ) : (
          <p>No pending tasks</p>
        )}
      </ol>

  
      <h2>Completed Tasks</h2>
      <ol>
        {completedTasks.length ? (
          completedTasks.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        ) : (
          <p>No completed tasks</p>
        )}
      </ol>
    </>
  );
}