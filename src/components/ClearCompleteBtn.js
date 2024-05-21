import React from "react";

export default function ClearCompleteBtn({ clearCompletedTodo }) {
  return (
    <div>
      <button className="button" onClick={clearCompletedTodo}>
        Clear completed
      </button>
    </div>
  );
}
