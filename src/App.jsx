import "./App.scss";
import Header from "./components/header/header.component";
import InputText from "./components/input/inputtext.component";
import Button from "./components/button/button.component";
import TodoItem from "./components/item/todoItem.component";
import { useState, useContext } from "react";
import TodoItemContainer from "./components/item/todoItem.container";
import { TodoListContext } from "./context/todoList.context";

function App() {
  // const [list, setList] = useState([]); //creating usestate for todolist
  const [todo, setTodo] = useState(""); //creating usestate for todo item

  const { todoList, setTodoList } = useContext(TodoListContext);

  const addHandler = async () => {
    if (todo != "") {
      const i = todoList.len;
      const item = {
        id: 1,
        description: todo,
        isDone: false,
      };
      var lst = [...todoList, item];

      // setList(lst);
      setTodoList(lst);
      console.log(todoList);

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
        <TodoItemContainer items={todoList} />
      </div>
    </div>
  );
}

export default App;

//todo aplication training
//performance
