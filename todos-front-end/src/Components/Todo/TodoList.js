import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, onCompleteTodo, onDeleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onClickComplete={onCompleteTodo}
          onClickDelete={onDeleteTodo}
        ></TodoListItem>
      ))}
    </>
  );
};
