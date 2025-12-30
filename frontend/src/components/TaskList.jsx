import React, { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.id} - {task.title} - {task.status} - {task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
