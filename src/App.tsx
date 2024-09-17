import { useState } from "react";
import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import ToDoTask from "./types/ToDoTaskType";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDoTask[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        text: text,
      },
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => [...prevTodos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
