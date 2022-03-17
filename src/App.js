import './App.css';
import React, { useState } from "react";
import Button from './components/FilterButton';
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';

function App() {
  
  const taskarray= [];
  const filters = {
    all: () => true,
    done: task => task.completed===true,
    pending: task => task.completed===false
  }
  const [tasks, updateTaskList] = useState(taskarray);
  const [filter, setFilter] = useState('all');

  
  
 
  

  function addTask(name,priority) {
    const newTask = { id: taskList.length, name: name, priority:priority, completed: false };
    updateTaskList([...tasks, newTask]);
    console.log("a",filter);
  }
  
  function markTaskDone(id) {
    console.log(tasks);
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
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
    console.log("clear");
    const reset = [];
    updateTaskList(reset);
    
  }
  
  
   
  function filterTasks(value){
    //let filteredTasks;
    if(value==="all"){
     //filteredTasks = () => true;
     setFilter('all');
    }
    if(value==="done"){
      //filteredTasks =  true;
      setFilter('done');
    }
    if(value==="pending"){
      //filteredTasks = task => task.completed == false;
      setFilter('pending');
    }
    
    
    
    //setFilter(filteredTasks);
    console.log(filter);
  }


  const taskList =  tasks.filter(filters[filter]).map(task => (
    <List
        id={task.id}
        name={task.name}
        priority={task.priority}
        completed={task.completed}
        markTaskDone={markTaskDone}
        key={task.id}
        deleteTask={deleteTask}
      />
    )
  );
  // localStorage.setItem("todo",taskList);
  // const todo = localStorage.getItem('todo');
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
