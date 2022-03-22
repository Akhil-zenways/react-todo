import "./App.css";
import React, { useState } from "react";
import Button from "./components/FilterButton";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import LsService from "./service/LsService";

function App() {
  //   const taskarray= [
  //
  // ];

  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(name, priority) {
    const newTask = {
      id: Date.now(),
      name: name,
      priority: priority,
      isDone: false,
    };
    setTask([newTask, ...tasks]);
    LsService.setLS([newTask, ...lsTasks]);
  }

  function markTaskDone(id) {
    const updatedTasks = lsTasks.map((task) => {
      if (id === task.id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTask(updatedTasks);
    //window.localStorage.setItem("LS", JSON.stringify(updatedTasks));
    LsService.setLS(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = lsTasks.filter((task) => id !== task.id);
    setTask(remainingTasks);
    // window.localStorage.setItem("LS", JSON.stringify(remainingTasks));
    LsService.setLS(remainingTasks);
  }

  function deleteAll() {
    const resetTasks = [];
    setTask(resetTasks);
    //window.localStorage.setItem("LS", JSON.stringify(resetTasks));
    LsService.setLS(resetTasks);
  }

  // const lsString = window.localStorage.getItem("LS");
  // const lsTasks = JSON.parse(lsString);

  const lsTasks = LsService.getLS();

  const filters = {
    all: () => true,
    done: (task) => task.isDone === true,
    pending: (task) => task.isDone === false,
  };

  const filteredTasks = lsTasks.filter(filters[filter]);

  function filterTasks(value) {
    setFilter(value);
  }

  const taskList = filteredTasks.map((task) => (
    <List
      id={task.id}
      name={task.name}
      priority={task.priority}
      isDone={task.isDone}
      markTaskDone={markTaskDone}
      key={task.id}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="body">
      <div className="container">
        <Header deleteAll={deleteAll}></Header>

        <Form addTask={addTask}></Form>

        <div>
          <Button filterTasks={filterTasks}></Button>
        </div>

        <ul>{taskList}</ul>
      </div>
    </div>
  );
}

export default App;
