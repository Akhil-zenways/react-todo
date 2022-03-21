import './App.css';
import React, { useState } from "react";
import Button from './components/FilterButton';
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';

function App() {
  
//   const taskarray= [ 
//    
// ];


  const filters = {
    all: () => true,
    done: task => task.isDone===true,
    pending: task => task.isDone===false
  }
  const [tasks, updateTaskList] = useState([]);
  const [filter, setFilter] = useState('all');

  window.localStorage.setItem("LS", JSON.stringify(tasks));
  const todo = window.localStorage.getItem("LS");
  const taskss=JSON.parse(todo);
  

  function addTask(name,priority) {
    const newTask = { id: taskList.length, name: name, priority:priority, isDone: false };
    
    updateTaskList([...tasks, newTask]);
    //window.localStorage.setItem("LS", JSON.stringify(tasks));
  }
  
  function markTaskDone(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, isDone: !task.isDone}
      }
      return task;
    });
    updateTaskList(updatedTasks);
    
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    updateTaskList(remainingTasks);
  }

  function deleteAll(){
    console.log('task list',taskList)
    console.log('taskss',taskss)
    console.log('tasks',tasks)
    const reset = [];
   // updateTaskList(reset); 
    
    
  }
   
  function filterTasks(value){
    if(value==="all"){
     setFilter('all');
    }
    if(value==="done"){
      setFilter('done');
    }
    if(value==="pending"){
      setFilter('pending');
    }
     }

   
  const taskList =  tasks.filter(filters[filter]).map(task => (
    <List
        id={task.id}
        name={task.name}
        priority={task.priority}
        isDone={task.isDone}
        markTaskDone={markTaskDone}
        key={task.id}
        deleteTask={deleteTask}
      />
    )
  );

  return (
    <div className='body'>
    <div className='container' >
      <Header deleteAll={deleteAll}></Header>

      <Form addTask={addTask}></Form>

      <div >
        <Button
        filterTasks={filterTasks}
        ></Button>
        
        
      </div>
      
      <ul>
        {taskList}
      </ul>

    </div>
    </div>
  );
  
}

export default App;
