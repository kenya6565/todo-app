import "./styles.css";
import React, { useEffect, useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export default function createNewArray(mustElement, ...optionElement) {
  return optionElement ? [...mustElement, ...optionElement] : [mustElement];
}

export const App = () => {
  // todoText入力した文字をincompleteTodosの配列の中に入るようにする
  const [todoText, setTodoText] = useState("");
  const [editText, setEditTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //入力欄に文字を入れられるようにするための関数(stateを随時更新していくことでできている)
  // eventはinputのonChangeの内容に変更があった場合(誰かが入力欄に値を入れたら)にその値が入ってくる
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onEditTodoText = (event) => setEditTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // 初期の未完了のTODO + 入力したTODOを結合して新たな配列として作成
    const newTodos = createNewArray(incompleteTodos, todoText);

    // stateを変更(未完了のtodoに追加される)
    setIncompleteTodos(newTodos);

    //入力欄に入力値が残ったままなので消す
    setTodoText("");
  };

  const onClickDelete = (index) => {
    //incompletetodosのコピーを作成
    // 現状のincompleteTodosに影響を与えないためにコピーを作成してそれに対して色々していく
    const newTodos = createNewArray(incompleteTodos);

    // newTodosから指定番目の要素を1つ削除
    newTodos.splice(index, 1);

    // 最後にstateを作成したnewTodosで更新
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    //incompletetodosのコピーを作成
    const newIncompleteTodos = createNewArray(incompleteTodos);

    // newTodosから削除ボタンを押した要素を1つ削除
    newIncompleteTodos.splice(index, 1);

    //完了リストに完了ボタンを押された要素を取得
    const newCompleteTodos = createNewArray(
      completeTodos,
      incompleteTodos[index]
    );
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = createNewArray(completeTodos);

    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = createNewArray(
      incompleteTodos,
      completeTodos[index]
    );

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickEdit = (index) => {
    alert();
  };

  const countIncompleteTodos = () => {
    return incompleteTodos.length >= 5;
  };

  const handleSubmit = (index) => {};

  const onClickUpdate = (index, newTodoText) => {
    const newIncompleteTodos = createNewArray(completeTodos);
    // index番目の要素をnewTodotextで上書き
    newIncompleteTodos.splice(index, 1, newTodoText);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        // ここはreturnの結果が欲しいからここで関数実行する?
        disabled={countIncompleteTodos()}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです。</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        handleSubmit={handleSubmit}
        onChange={onChangeTodoText}
        editText={editText}
        onEdit={onEditTodoText}
        onClickUpdate={onClickUpdate}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
