import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'}


const TaskList = () => {

    let { tasks } = useContext(TaskListContext)

    return <div>
        <ul className='list'>
            {tasks.map((task) => {
                return
            })}
        </ul>
    </div>

}

export default TaskList