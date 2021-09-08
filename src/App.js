// this is the root component

import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask]= useState(false)

  const [tasks, setTasks] = useState([
    
  ]);

  UseEffect( () => {
    const getTask  = async () => {
      const tasksFromSever = await fetchTasks()
      setTasks(tasksFromSever)
    }
    getTasks()
  }, [])

  // fetch task

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/task')
    const data = await response.json()

    return data
  }


  //  Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  Toggle remiinder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
    // console.log(id);
  };

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      { showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
}

/*
? the title there is a component prop, can be used to pass info from the root component  to the component  for that element

 * if i wanted to use class based components, it is import the react module first 
class App extends React.Component{ //? so your app has access to all the methods in the component class
  render(){
    return <h1>Hello from React</h1>
  }
}
*/
export default App;
