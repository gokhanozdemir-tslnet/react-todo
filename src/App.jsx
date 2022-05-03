import "./App.scss";
import Header from "./components/header/header.component";
import InputText from "./components/input/inputtext.component";
import Button from "./components/button/button.component";
import TodoItem from "./components/item/todoItem.component";
import { useState, useContext } from "react";
import TodoItemContainer from "./components/item/todoItem.container";
import { TodoListContext } from "./context/todoList.context";

function App() {
  const [todo, setTodo] = useState("");

  const { todoList, setTodoList } = useContext(TodoListContext);

  const addHandler = async () => {
    if (todo === "") {
      return;
    }

    const newItemId = todoList.length + 1;

    const item = {
      id: newItemId,
      description: todo,
      isDone: false,
    };
    var newList = [...todoList, item];

    setTodoList(newList);
    setTodo("");
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
        <TodoItemContainer items={todoList} />
      </div>
    </div>
  );
}

export default App;
