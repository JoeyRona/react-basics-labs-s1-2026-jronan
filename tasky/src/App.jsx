import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { useFormState } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material/Typography';
import { Container } from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwashers", deadline: "Today", priority: "Low", done: false},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false},
      { id: 3, title: "Tidy up", deadline: "Today", priority: "High", done: false}
    ]
});

const [ formState, setFormState ] = useState({
        title: "",
        description: "",
        deadline: ""
    });

const doneHandler = (taskIndex) => {
  const tasks = [...taskState.tasks];
  tasks[taskIndex].done = !tasks[taskIndex].done;
  setTaskState({tasks});
  console.log(`$({taskIndex} ${tasks[taskIndex].done}`);
}

const deleteHandler = (taskIndex) => {
  const tasks = [...taskState.tasks];
  tasks.splice(taskIndex, 1);
  setTaskState({tasks});
}

const formChangeHandler = (event) => {
  let form = {...formState};

  switch(event.target.name){
    case "title":
      form.title = event.target.value;
      break;
    case "description":
        form.description = event.target.value;
        break;
    case "deadline":
        form.deadline = event.target.value;
        break;
    default: 
        form = formState;
  }
  setFormState(form);
}

const formSubmitHandler = (event) => {
  event.preventDefault();

  const tasks = [...taskState.tasks];
  const form = [...formState];
  
  form.id = uuidv4();

  tasks.push(form);
  setTaskState({tasks});
}

console.log(formState);

  return (
    <div className="Container">
      <Container components ="main">
        <Typography
          components="h1"
          variant="h2"
          align="centre"
          gutterBottom
          sx={{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'

          }}
          >
            Tasky
          </Typography>
      </Container>


<Container maxWidth="md" component="main">
  <Grid
    container
    spacing={5}
    sx={{
        justifyContent: "center"
        }}
      >
      {taskState.tasks.map((task, index) => (
      <Task
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key={task.id}
        priority={task.priority}
        markDone={() => doneHandler(index)}
        done={task.done}
        deleteTask = {() => deleteHandler(index)}
        
        />
      ))}
      </Grid> 
      </Container>

      <Container
        component="footer"
        sx={{
          borderTop:(theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py:6
        }}
         >
          <Grid container sx={{
            justifyContent: "center"
          }}>
           
          </Grid>

        </Container>

      <AddTaskForm submit={formSubmitHandler} 
                   change={formChangeHandler} 
                   />
    </div>
  );
}

export default App;
