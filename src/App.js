//Build a To-Do list app using React The app should allow users to add new tasks, mark them as complete, and delete them. Use React state to manage the list of tasks and their completion status. Use React props to pass data between components.

import React, { useState, useEffect } from 'react';
import './style.css';
import Tasks from './Tasks.jsx';

export default function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      alert('Please Add Task');
    } else {
      const newTask = {
        name: taskInput,
        completed: false,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
    setTaskInput('');
  };

  const taskCompleted = (index) => {
    const updatedData = [...tasks];
    updatedData[index].completed = true;
    setTasks(updatedData);
    localStorage.setItem('tasks', JSON.stringify(updatedData));
  };

  const taskDeleted = (index) => {
    const updatedData = [...tasks];
    updatedData.splice(index, 1);
    setTasks(updatedData);
    localStorage.setItem('tasks', JSON.stringify(updatedData));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter your task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Tasks
            key={index}
            index={index}
            task={task}
            taskCompleted={taskCompleted}
            taskDeleted={taskDeleted}
          />
        ))}
      </div>
    </div>
  );
}
