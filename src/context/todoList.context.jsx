import { createContext, useState } from "react";

export const TodoListContext = createContext({
  setfTodoList: () => null,
  todoList: [],
});

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const value = { todoList, setTodoList };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};
