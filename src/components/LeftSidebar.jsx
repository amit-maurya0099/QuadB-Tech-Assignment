import React from 'react'
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FcPlanner } from "react-icons/fc";
import { MdAssignmentAdd } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import chart from "../assets/chart.png"
import { useSelector } from 'react-redux';

const LeftSidebar = () => {
  const {theme}=useSelector((store)=>store.auth)
  
  return (
    <div className={`w-full h-full overflow-auto ${theme ==="dark" ? "bg-[#232323] text-white" :"bg-[#EEF6EF]"}   `}>
        <div className='flex items-center justify-center'>
        <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg" alt="/" className='rounded-full   size-20 md:size-32 absolute top-[10%]'>
        </img>
        </div>
        <div className={`h-[85%] mt-[25%] ${theme ==="dark" ? "bg-[#2C2C2C] text-white" :"bg-[#EEF6EF]"} pr-6 pl-3  flex flex-col gap-2`}>
            <h1 className='text-center pt-20 font-semibold text-lg'>Hey, ABCD</h1>
            <div className={` rounded-xl pl-4 ${theme==="dark" ? "bg-[#232323]":"bg-white"}`}>
               <ul className='flex flex-col gap-1 font-medium'>
                <li className='flex gap-4 items-center'><LuNotepadText/>All Tasks</li>
                <li className='flex gap-4 items-center'><MdOutlineCalendarToday/>Today</li>
                <li className='flex gap-4 items-center'><CiStar/>Important</li>
                <li className='flex gap-4 items-center'><FcPlanner/>Planned</li>
                <li className='flex gap-4 items-center'> <MdAssignmentAdd/>Assigned to me</li>
               </ul>
            </div>
            <div className={`  py-4 px-2 rounded-xl ${theme ==="dark" ? "bg-[#232323] text-white" :"bg-white"}`}>
            <h1 className='flex gap-4 items-center font-medium'><IoAddOutline className='text-4xl '/>Add List</h1>
        
            </div>
            <div className={`font-medium px-4 rounded-xl ${theme ==="dark" ? "bg-[#232323] text-white" :"bg-white"}`}>
                <h1>Today's Tasks</h1>
                <h2>21</h2>
                <div className='flex justify-center'><img src={chart} alt="/" className='size-32'></img></div> 
            </div>
        </div>
      
    </div>
  )
}

export default LeftSidebar;
