import "./App.scss";
import Header from "./components/header/header.component";
import InputText from "./components/input/inputtext.component";
import Button from "./components/button/button.component";
import TodoItem from "./components/item/todoItem.component";
import { useState } from "react";

const items = [
  {
    id: 1,
    description: "sdfsdfsdfsdfsdfsdfsdf",
    isDone: false,
  },
  {
    id: 2,
    description: "sdfsdfsdfsdfsdfsdfsdf",
    isDone: true,
  },
];

function App() {
  const [list, setList] = useState([]); // default
  const [todo, setTodo] = useState("");

  const addHandler = async () => {
    if (todo != "") {
      const i= list.len
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
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <div>
          <InputText val={todo} onChange={textChangeHandler}  />
          <Button type="button" customValue="add" onClick={addHandler} />
          <div>
            {list.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
