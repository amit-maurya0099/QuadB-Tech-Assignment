import React from 'react'
import TaskInput from './TaskInput'
import TaskList from "./TaskList"


const Task = () => {
    return (
        <div className=' w-full h-[95%] px-10  '>
          <TaskInput/>
          <TaskList />

        </div>
    )
}

export default Task
