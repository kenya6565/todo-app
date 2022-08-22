import React, { useState } from "react";

const TodoItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");

  const { todo, index, onClickComplete, onClickDelete, onClickUpdate } = props;
  return editMode ? (
    <div className="list-row">
      <div>
        <input
          value={editText}
          onChange={(event) => {
            setEditText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onClickUpdate(index, editText);
            setEditMode(false);
          }}
        >
          更新
        </button>
      </div>
      <button
        onClick={() => {
          setEditMode(false);
        }}
      >
        キャンセル
      </button>
    </div>
  ) : (
    <div className="list-row">
      <li>{todo}</li>
      <button
        onClick={() => {
          setEditMode(true);
          setEditText(todo);
        }}
      >
        編集
      </button>
      <button onClick={() => onClickComplete(index)}>完了</button>
      {/* 何番目の削除ボタンが押されたか分かるようにindexを渡す。
                  関数に引数を渡す場合はアロー関数で定義する必要がある。(今回の場合だと
                  ボタン押さずしてonClickDeleteが発火してしまう) */}
      <button onClick={() => onClickDelete(index)}>削除</button>
    </div>
  );
};

export const IncompleteTodo = (props) => {
  const {
    incompleteTodos,
    onClickComplete,
    onClickDelete,
    onClickEdit,
    onEdit,
    onClickUpdate,
  } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              onClickComplete={onClickComplete}
              onClickDelete={onClickDelete}
              onClickEdit={onClickEdit}
              onEdit={onEdit}
              onClickUpdate={onClickUpdate}
            />
          );
        })}
      </ul>
    </div>
  );
};
