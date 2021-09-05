// this is the root component


import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appoinment',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Church',
        day: 'feb 6th at 12:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Grocery shoppint',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    }
])


  return (
    <div className="container">
      <Header /> 
      <Tasks tasks = {tasks}/>
    </div>
  );
}

/*
? the title there is a prop type, can be used to pass info from the root component  to the component  for that element



 * if i wanted to use class based components, it is import the react module first 
class App extends React.Component{ //? so your app has access to all the methods in the component class
  render(){
    return <h1>Hello from React</h1>
  }
}
*/
export default App;
