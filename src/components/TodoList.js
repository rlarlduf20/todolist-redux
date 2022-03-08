import React from "react";
import { useSelector } from "react-redux";

import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  console.log(todos);
  return (
    <div>
      {todos &&
        todos.map((todo, index) => <TodoListItem key={index} todo={todo} />)}
    </div>
  );
};

export default TodoList;
