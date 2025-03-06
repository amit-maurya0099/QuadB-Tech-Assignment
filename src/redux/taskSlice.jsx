
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: 'tasks',
  initialState:{
    tasks:JSON.parse(localStorage.getItem("tasks")) || [],
  },
  reducers: {
    addTask: (state, action) => {
      const prevTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const newTask={id:uuidv4(),text:action.payload}
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks',JSON.stringify(updatedTasks));
      state.tasks=JSON.parse(localStorage.getItem("tasks"))
      
    },
    deleteTask: (state, action) => {
      const prevTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = prevTasks.filter((task) => task.id !== action.payload);
    
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      state.tasks=JSON.parse(localStorage.getItem("tasks"))
      
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
