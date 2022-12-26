import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'}


const TaskList = () => {

    let { tasks } = useContext(TaskListContext)

    return (
        <div>TaskList</div>
    )
}

export default TaskList