import React, { useState } from "react";
import "../style.css";

function ToDoItem(props) {
  let { item, completeItem, removeItem } = props;
  return (
    <div className="row space-between flex1 listName">
      <div className="row">
        <span className={item.isCompleted === true ? "crossText" : ""}>
          {item.value}
        </span>
      </div>

      <div className="row">
        <button
          className="compete"
          disabled={item.isCompleted === true}
          onClick={(e) => completeItem(e, item.id)}
        >
          Mark as Completed
        </button>
        <button
          className="delete"
          disabled={item.isDeleted === true}
          onClick={(e) => removeItem(e, item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
