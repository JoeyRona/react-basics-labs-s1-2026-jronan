import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwashers", deadline: "Today", priority: "Low"},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium"},
      { id: 3, title: "Tidy up", deadline: "Today", priority: "High"}
    ]
});

  return (
    <div className="Container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task) => (
      <Task
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}
        />
      ))}
    </div>
  );
}

export default App;
