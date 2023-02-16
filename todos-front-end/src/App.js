import { useEffect, useState } from "react";
import { NewTodo } from "./Components/Todo/NewTodo";
import { TodoList } from "./Components/Todo/TodoList";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const setTodos = async () => {
  //     const response = await axios.get("/todos");
  //     setTodos(response.data);
  //   }, []);
  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get("/todos");
      setTodos(response.data);
    };
    loadTodos();
  }, []);
  const createTodo = (title) => {
    console.log(title);
  };

  const completeTodo = (id) => {
    console.log(id);
  };

  const deleteTodo = (id) => {
    console.log(id);
  };
  return (
    <>
      <h1>My Todos</h1>
      <NewTodo onClickCreate={createTodo}></NewTodo>

      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
      ></TodoList>
    </>
  );
}

export default App;
