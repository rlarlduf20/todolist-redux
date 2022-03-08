import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/actions";
const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const removeButton = (id) => {
    dispatch(removeTodo(id));
  };
  const toggleButton = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <li>
        <button onClick={() => toggleButton(todo.id)}>V</button>
        {todo.isChecked ? `${todo.text}[ok]` : todo.text}
        <button onClick={() => removeButton(todo.id)}>X</button>
      </li>
    </div>
  );
};

export default TodoListItem;
