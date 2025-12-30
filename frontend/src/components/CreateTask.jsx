import { useState } from "react";
import { createTask } from "../services/taskService";
import './mystyle.css'
function CreateTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    due_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: task.title,
      description: task.description || undefined,
      status: task.status,
      due_date: task.due_date ? new Date(task.due_date).toISOString() : undefined,
    };
    
    try {
      await createTask(payload);
      alert("Task created successfully!");
      setTask({
        title: "",
        description: "",
        status: "pending",
        due_date: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
    }
  };

  return (
    <div className="create-task-container">
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          name="due_date"
          value={task.due_date}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTask;
