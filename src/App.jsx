import "./App.scss";
import Header from "./components/header/header.component";
import InputText from "./components/input/inputtext.component";
import Button from "./components/button/button.component";
import TodoItem from "./components/item/todoItem.component";
import { useState, useContext } from "react";
import TodoItemContainer from "./components/item/todoItem.container";

function App() {
  const [list, setList] = useState([]); //creating usestate for todolist
  const [todo, setTodo] = useState(""); //creating usestate for todo item

  const addHandler = async () => {
    if (todo != "") {
      const i = list.len;
      const item = {
        id: 1,
        description: todo,
        isDone: false,
      };
      var lst = [...list, item];

      setList(lst);
      setTodo("");
    }
  };

  const textChangeHandler = async (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <InputText val={todo} onChange={textChangeHandler} />
        <Button type="button" customValue="add" onClick={addHandler} />
        <TodoItemContainer items={list} />
      </div>
    </div>
  );
}

export default App;

//todo aplication training
//performance
