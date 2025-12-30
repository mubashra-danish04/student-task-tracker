import React from "react";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import Home from "./components/Home";
import './App.css'
import { BrowserRouter,Routes,Route,Link,NavLink} from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
<nav className="navbar">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/task_list" className="nav-link">Task List</Link>
  <Link to="/create_task" className="nav-link">Create Task</Link>
</nav>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="task_list" element={<TaskList />}></Route>
  <Route path="create_task" element={<CreateTask />}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
