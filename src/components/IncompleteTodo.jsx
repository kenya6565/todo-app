import React, { useState } from "react";

const TodoItem = (props) => {
  const {
    todo,
    index,
    onClickComplete,
    onClickDelete,
    onClickEdit,
    handleSubmit,
    editText,
    onEdit,
  } = props;
  return (
    <div className="list-row">
      <li>{todo}</li>
      <div>
        <input value={editText} onChange={onEdit} />
        <button onClick={handleSubmit(index)}>更新</button>
      </div>
      <button onClick={() => onClickEdit(index)}>編集</button>
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
    handleSubmit,
    editText,
    onEdit,
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
              handleSubmit={handleSubmit}
              editText={editText}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
    </div>
  );
};
