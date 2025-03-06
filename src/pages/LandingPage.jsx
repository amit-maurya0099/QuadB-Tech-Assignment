import React, { useState } from 'react'
import LeftSideBar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Task from '../components/Task'
import { useSelector } from 'react-redux'


const LandingPage = () => {
    const {showLeftSideBar,showRightSideBar,theme}=useSelector((store)=>store.auth)
    
  return (
    <div className='h-[95%] w-full flex '>
      {showLeftSideBar &&  <div className='md:w-[25%] not-md:absolute not-md:w-full h-full'>
           <LeftSideBar/>
        </div>}
       <div className={`w-full ${theme ==="dark" && "bg-[#232323] text-white" }  `}>
            <h1 className='pl-10 font-semibold text-green-600'>To do</h1>
          <Task/>
        </div>    
        {showRightSideBar && <div className='md:w-[25%] not-md:absolute not-md:w-full '>
            <RightSidebar/>
            </div>  }
    </div>
  )
}

export default LandingPage
