import React, { useState } from "react";

const initialState = { task: "" };

const TasksForm = () => {
  const [taskValue, setTaskValue] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setTaskValue({ [name]: value });
  };

  return (
    <div>
      sdfgsdfgdfgdfgfd
      <form>
        <label>
          <input
            type="text"
            name="task"
            value={taskValue.task}
            onChange={onHandleChange}
          />
          {/* <button type="submit" onClick={onHandleSubmit}>
            Add task
          </button> */}
        </label>
      </form>
    </div>
  );
};

export default TasksForm;
