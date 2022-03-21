import './App.css';
import React, { useState } from "react";
import Button from './components/FilterButton';
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';

function App() {
  
  const taskarray= [ { id: "0", name: "learn basic react", priority:"medium", isDone: true },
  { id: "1", name: "make a todo app using react", priority:"high", isDone: false },
  { id: "2", name: "learn advanced concepts", priority:"medium", isDone: false }];
  
  const filters = {
    all: () => true,
    done: task => task.isDone===true,
    pending: task => task.isDone===false
  }
  const [tasks, updateTaskList] = useState(taskarray);
  const [filter, setFilter] = useState('all');

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

  //const LS = JSON.stringify(taskList);
  localStorage.setItem("array", taskList);

  function addTask(name,priority) {
    const newTask = { id: taskList.length, name: name, priority:priority, isDone: false };
    updateTaskList([...tasks, newTask]);
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
    const reset = [];
    updateTaskList(reset); 
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

  // const todos = localStorage.getItem("array");
  // const taskList2 =  todos.filter(filters[filter]).map(task => (
  //   <List
  //       id={task.id}
  //       name={task.name}
  //       priority={task.priority}
  //       isDone={task.isDone}
  //       markTaskDone={markTaskDone}
  //       key={task.id}
  //       deleteTask={deleteTask}
  //     />
  //   )
  // );

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
