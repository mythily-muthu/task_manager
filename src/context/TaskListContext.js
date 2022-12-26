
import React, { createContext, useState } from 'react'


export let TaskListContext = createContext()




const TaskListContextProvider = () => {

    let [tasks, setTasks] = useState([
        { task: "prepare afresh", id: 1 },
        { task: "clean the littersand", id: 2 },
        { task: "prep for coding", id: 3 }

    ]);

    return (
        <div>Task List Context </div>
    )
}

export default TaskListContextProvider 