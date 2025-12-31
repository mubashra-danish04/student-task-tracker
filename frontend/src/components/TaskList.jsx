import React, { useEffect, useState } from "react";
import { getTasks,deleteTask, sortTask } from "../services/taskService";
import { useNavigate } from "react-router-dom";
import './mystyle.css'
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [appliedStatus, setAppliedStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks()
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update_task/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const applyFilter = () => {
    setAppliedStatus(statusFilter);
    setIsOpen(false);
  };

  const filteredTasks = tasks.filter(
    t => !appliedStatus || t.status === appliedStatus
  );

  function sortData(){
     sortTask()
     .then(res => setTasks(res.data))
     .catch(err => console.log(err));
  
  }

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={() => setIsOpen(true)}>Filter</button>
      <button onClick={() => sortData()}>Sorttt</button> 

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.id} --- {task.title} --- {task.status} --- {task.description}
            <button onClick={() => handleUpdate(task.id)}>Update</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>        
          </li>
        ))}
      </ul>

      {isOpen && (
        <div className="box">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <button onClick={applyFilter}>Apply Filter</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}


export default TaskList;   