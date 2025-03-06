import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { CiStar } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks?.tasks);
  const dispatch = useDispatch();
  const[priority,setPriority]=useState();
  if(tasks && tasks.length===0){
    return <div className='flex justify-center items-center w-full h-[40%]'>No Task Found </div>
  }

  return (
    <div className=' h-[65%] overflow-y-scroll no-scrollbar mt-6 '>
      {
        tasks?.map((task) => <div key={task?.id} className=' flex justify-between items-center border-b border-gray-300 py-2'>
          <div className='flex gap-2 w-fit'>
            <input type='checkbox'></input>
            <h2>{task?.text}</h2>
          </div>
          <div className='flex gap-4'>
          <CiStar className={`text-2xl cursor-pointer `} />
          <MdDeleteOutline className='text-2xl cursor-pointer' onClick={()=>dispatch(deleteTask(task.id))}/>
          </div>
        </div>)
      }

    </div>
  );
};

export default TaskList;
