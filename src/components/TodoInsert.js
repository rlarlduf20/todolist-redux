import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = (text) => {
    dispatch(addTodo(text));
    setValue("");
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={() => onClick(value)}>ADD</button>
    </div>
  );
};

export default TodoInsert;
