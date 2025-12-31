import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask } from "../services/taskService";

function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    due_date: "",
  });

  useEffect(() => {
    getTaskById(id)
      .then((res) => {
        const data = res.data;
        setTask({
          title: data.title,
          description: data.description || "",
          status: data.status,
          due_date: data.due_date
            ? data.due_date.split("T")[0] // convert to YYYY-MM-DD
            : "",
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, task);
      alert("Task updated successfully!");
      navigate("/"); // go back to task list
    } catch (error) {
      console.error(error);
      alert("Failed to update task");
    }
  };

  return (
    <div className="create-task-container">
      <h1>Update Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateTask;
