import React from "react";
import ToDoTask from "../types/ToDoTaskType";

interface TodoListProps {
  items: ToDoTask[];
  onDeleteTodo: (taskId: string) => void;
}

const ToDoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => onDeleteTodo(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
