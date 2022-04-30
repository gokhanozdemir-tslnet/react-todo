import { createContext, useState } from "react";

export const TodoListContext = createContext({
  setTodoList: () => null,
  todoList: [],
});

export const TodoListContextProvider = ({ children }) => {
  const { todoList, setTodoList } = useState([]);
  const value = { todoList, setTodoList };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};
