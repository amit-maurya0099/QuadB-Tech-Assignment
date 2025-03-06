import React, { useState } from 'react';
import { IoIosRepeat } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskInput = () => {
    const dispatch=useDispatch();
    const [newTask,setNewTask]=useState("");
   const {theme}=useSelector((store)=>store.auth);

  const handleClick=()=>{
    if(newTask.length >=3)
     dispatch(addTask(newTask))
    setNewTask("")
  }

  return (
    <div className={`h-[30%] border-2 border-gray-300 ${theme ==="dark" && "bg-[#2F3630] text-white" }`}
    >
    <input className={`h-[75%]  px-2 outline-none w-full ${theme ==="dark"? "text-white":"text-black"} `} placeholder='Add your task'
      onChange={(e)=>setNewTask(e.target.value)} 
      value={newTask}
    >
    </input>
    <div className='flex justify-between items-center  '>
        <div className='flex gap-4 md:text-2xl text-xl md:px-4 px-1 '>
            <IoIosRepeat />
            <FaRegBell />
            <MdOutlineCalendarToday />

        </div>
        <button className='  px-6 py-1  bg-[#1f7424] text-green-200 mr-2  rounded-lg cursor-pointer' onClick={handleClick}>Add Task</button>
    </div>

</div>
  )
}

export default TaskInput
