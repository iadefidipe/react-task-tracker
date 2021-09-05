
// the data we use in an app should major be in our state, to achive that in react we use a hook called useState. imported from react directly
// import { useState } from "react";

import Task from "./Task";



const Tasks = ({tasks}) => {
    
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} />
            ))}
        </>
    )
}

// we dont want our task data to be in our task component, bcus we will be reusing it. we can create a global state in the root component and pass it down as a property  

export default Tasks;
