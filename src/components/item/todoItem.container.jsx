import TodoItem from "./todoItem.component";

const TodoItemContainer = ({items}) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoItemContainer;
