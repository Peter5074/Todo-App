import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTask = prompt('Edit Task:', tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="What do you have planned?"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-btn" onClick={addTask}>Add task</button>

      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <span>{task}</span>
          <div>
            <button className="edit-btn" onClick={() => editTask(index)}>EDIT</button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>DELETE</button>
          </div>
        </div>
      ))}
    </div>

    
  );
}

export default App;
