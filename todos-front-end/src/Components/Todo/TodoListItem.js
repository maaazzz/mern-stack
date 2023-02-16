export const TodoListItem = ({ todo, onClickComplete, onClickDelete }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      {todo.isCompleted && <p>Completed!</p>}
      <button type="button" onClick={onClickComplete}>
        Mark as completed
      </button>
      <button type="button" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  );
};
