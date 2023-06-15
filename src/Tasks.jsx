import './style.css';
import React from 'react';

export default function Tasks({ task, taskCompleted, taskDeleted, index }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <button onClick={() => taskCompleted(index)}>Completed</button>
      <button onClick={() => taskDeleted(index)}> Delete</button>
    </div>
  );
}
