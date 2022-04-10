// Creates a checkbox and info for a task
import React from "react";

function Task(props) {
  return (
    <div className="Task">
      <input type="checkbox">
      <label>props.description</label>
    </div>
  );
}

export default Task;