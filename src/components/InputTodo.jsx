import React from "react";
import { IncompleteTodo } from "./IncompleteTodo";
import { createNewArray } from "/src/App";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* 入力欄に文字を入れられるようにするためにonChangeを使用する */}
      <input
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
