// Creates a checkbox and info for a task

function Task(props) {
  return (
    <div className="Task">
      <input type="checkbox">
      <label>props.description</label><br>
    </div>
  );
}

export default Task;