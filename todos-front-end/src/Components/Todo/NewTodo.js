import { useState } from "react";

export const NewTodo = ({ onClickCreate }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></input>

      <button
        onClick={() => {
          onClickCreate(inputValue);
          setInputValue("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
