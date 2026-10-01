import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Task = (props) => {


return (
  <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
<p className="title">{props.title}</p>
<p>Due: {props.deadline}</p>
<p className="description">{props.description}</p>
        <p>{props.id}</p>
        <p className="priority"
           style={{
              backgroundColor: 
              props.priority === "Low" ? 'green'
              : props.priority === "Medium" ? 'orange'
             : 'red'
           }}>
    
        {props.priority}
</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>


</div>

   )
}

export default Task;