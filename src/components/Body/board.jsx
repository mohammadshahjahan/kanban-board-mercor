// src/Board.js
import task from "../../task.json";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import task1 from "./task-assests/task1.png";
import task2 from "./task-assests/task2.png";
import task3 from "./task-assests/task3.png";
import task4 from "./task-assests/task4.png";
import task5 from "./task-assests/task5.png";
import task6 from "./task-assests/task6.png";
import task7 from "./task-assests/task7.png";
import gg from "./task-assests/Group 633.png";
import gg2 from "./task-assests/Group 627.png";
import folder from "./task-assests/folder-2.png";

const Board = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulating fetching tasks from an API
    const fetchTasks = async () => {
      setTasks(task);
    };

    fetchTasks();
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder tasks within the same column
      const updatedTasks = Array.from(tasks);
      const [movedTask] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, movedTask);

      setTasks(updatedTasks);
    } else {
      // Move task to a different column
      const updatedTasks = Array.from(tasks);
      const [movedTask] = updatedTasks.splice(source.index, 1);
      movedTask.status = destination.droppableId; // Update the status of the moved task
      updatedTasks.splice(destination.index, 0, movedTask);

      setTasks(updatedTasks);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board">
        <Column status="todo" tasks={tasks} />
        <Column status="in-progress" tasks={tasks} />
        <Column status="done" tasks={tasks} />
      </div>
    </DragDropContext>
  );
};

const Column = ({ status, tasks }) => {
  const columnTasks = tasks.filter((task) => task.status === status);
  function titleHead() {
    if (status === "todo") return "To Do";
    else if (status === "in-progress") return "In Progress";
    else return "Done";
  }
  const th = titleHead();
  return (
    <div className="column">
      <ul className="column-title">
        <li>
          <h2>{th}</h2>
        </li>
      </ul>
      <hr className={`${status}`} />
      <Droppable droppableId={status}>
        {(provided) => (
          <ul
            className="task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columnTasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

const Task = ({ task, index }) => {
  function checker() {
    if (task.description === "task1") return task1;
    else if (task.description === "task2") return task2;
    else if (task.description === "task3") return task3;
    else if (task.description === "task4") return task4;
    else if (task.description === "task5") return task5;
    else if (task.description === "task6") return task6;
    else return task7;
  }

  const imgsrc = checker();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          className="task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{task.title}</h3>
          <img
            src={imgsrc}
            alt="error"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="folder">
            <img src={gg} alt="error" />
            <span>
              <span>
                <img src={gg2} alt="error" />
                {task.comments} Comments
              </span>
              <span>
                <img src={folder} alt="error" />
                {task.likes} Files
              </span>
            </span>
          </p>
        </li>
      )}
    </Draggable>
  );
};

export default Board;
