import './Tasks.css';
import { useState } from 'react';

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const made = event => {
      event.currentTarget.classList.toggle('madeTask');
    };
  function create(){
    const newTask = prompt('Enter Task')
      setTasks([...tasks, newTask]);
    }
  
  
  console.log(tasks);
    return (
        <>
        <button onClick={create}>Create task</button>
        <ul>{tasks.map(task =>(
          <li><button onClick={made} >{task}</button></li>
        ))}</ul>
        </>
    )
}