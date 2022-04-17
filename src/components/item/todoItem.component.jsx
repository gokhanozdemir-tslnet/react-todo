import "./todoItem.styles.scss";
import Button from "../button/button.component";
import { useState } from "react";

const TodoItem = ({ item }) => {
  const { description, isDone } = item;
  const [itemsisdone, setIsDone] = useState(isDone);

  console.log(itemsisdone);
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
        <Button customClass="item-button" customValue="delete_forever" />
      </div>
    </div>
  );
};

export default TodoItem;
