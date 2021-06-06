import React, { useState } from "react";
import { toast } from "react-toastify";
import Todo from "./components/ToDoItem";
import "./style.css";

function ToDoForm() {
  const [taskInput, setInput] = useState("");
  const [tasklist, setTaskList] = useState([]);

  React.useEffect(() => {
    const parsedItem = localStorage.getItem("tasklist12");
    if (!parsedItem) {
      return;
    }
    setTaskList(JSON.parse(parsedItem));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput !== "") {
      const taskDetails = [
        {
          id: Math.floor(Math.random() * 1000),
          value: taskInput,
          isCompleted: false,
          isDeleted: false,
        },
      ];
      setTaskList([...tasklist, ...taskDetails]);
      setInput("");
      localStorage.setItem(
        "tasklist12",
        JSON.stringify([...tasklist, ...taskDetails])
      );
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    let tnew = [];
    tnew = tasklist.filter((t) => {
      return t.id !== id;
    });

    setTaskList([...tnew], { isDeleted: true });
    localStorage.setItem("tasklist12", JSON.stringify(tnew));
    toast("Item deleted", { position: toast.POSITION.BOTTOM_LEFT });
  };

  const completeTask = (e, id) => {
    const element = tasklist.findIndex((elem) => elem.id === id);
    const newTaskList = [...tasklist];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
    localStorage.setItem("tasklist12", JSON.stringify(newTaskList));
    toast("Item marked completed");
  };

  return (
    <div className="todo">
      <div>
       <div> <h1>ToDo List</h1></div>
        <br />
        <input
          type="text"
          name="text"
          value={taskInput}
          onChange={(e) => handleChange(e)}
          placeholder="Add task here..."
        />
        <div>
          <button className="addButton" onClick={addTask}>
            ADD TASK
          </button>
        </div>
        {tasklist !== [] ? (
          <>
            {tasklist.map((item) => (
              <Todo
                key={item.id}
                item={item}
                completeItem={completeTask}
                removeItem={deleteTask}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ToDoForm;
