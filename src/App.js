// this is the root component

import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at Church",
      day: "feb 6th at 12:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Grocery shoppint",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
  ]);

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
      <Header />
      <AddTask />
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
