import "./todoItem.styles.scss";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import { TodoListContext } from "../../context/todoList.context";

const TodoItem = ({ item }) => {
  const { description, isDone, id } = item;
  const [itemsisdone, setIsDone] = useState(isDone);

  const { todoList, setTodoList } = useContext(TodoListContext);

  const deleteHandler = (event) => {
    var newList = todoList.filter((i) => i.id !== item.id);

    setTodoList(newList);
  };

  return (
    <div>
      <div className="todo-item ">
        <input
          type="checkbox"
          defaultChecked={itemsisdone}
          onChange={() => setIsDone(!itemsisdone)}
        ></input>
        <span
          className={`todo-item-description ${
            itemsisdone ? "  textline-through" : ""
          }`}
        >
          {description}
        </span>
        <Button
          customClass="item-button"
          onClick={deleteHandler}
          customValue="delete_forever"
        />
      </div>
    </div>
  );
};

export default TodoItem;
