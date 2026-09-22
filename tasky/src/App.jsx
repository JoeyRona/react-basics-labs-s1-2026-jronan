import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {
  const [ taskState, setTaskState ] = useState({
    task: [
      { id: 1, title: "Dishes", description: "Empty dishwashers", deadline: "Today"},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow"},
      { id: 3, title: "Tidy up", deadline: "Today" }
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
        />
      ))}
    </div>
  );
}

export default App;
