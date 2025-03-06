import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoIosRepeat } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { logout, setShowRightSideBar } from '../redux/authSlice';


const RightSidebar = () => {
  const {theme}=useSelector((store)=>store.auth)
   
  const dispatch=useDispatch();
  return (
    <div className={`w-full h-full  flex flex-col justify-between ${theme ==="dark"?"bg-[#2C2C2C] text-white":"bg-[#EEF6EF] text-black"} `}>     
    <div>
        <ul className='mt-10 px-4'>
            <li className='text-lg flex gap-4 border-b border-gray-300 py-1'><MdOutlineCheckBoxOutlineBlank className='text-2xl'/>Buy Groceries</li>
            <li className='text-lg flex gap-4 border-b border-gray-300 py-2'><IoAddOutline className='text-2xl'/>Add Step</li>
            <li className='text-lg flex gap-4 border-b border-gray-300 py-2'><FaRegBell className='text-2xl'/>Set Reminder</li>
            <li className='text-lg flex gap-4 border-b border-gray-300 py-2'><MdOutlineCalendarToday className='text-2xl'/>Set Due Date</li>
            <li className='text-lg flex gap-4 border-b border-gray-300 py-2'><IoIosRepeat className='text-2xl'/>Repeat</li>
        </ul>
      <h1 className='px-4'>Add Notes</h1>
      </div>
      <div className='py-3 px-4 w-full  flex justify-between items-center border-t border-gray-300'>
        <IoCloseSharp className='text-2xl cursor-pointer' onClick={()=>dispatch(setShowRightSideBar(false))}/>
         <button className=' text-center text-xl cursor-pointer  text ' onClick={()=>dispatch(logout())}>  Logout</button>
      </div>
    </div>
  )
}

export default RightSidebar
