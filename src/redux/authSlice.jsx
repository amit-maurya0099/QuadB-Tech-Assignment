import { createSlice } from '@reduxjs/toolkit';



const authSlice = createSlice({
  name: 'auth',
 initialState:{
  isAuthenticated:localStorage.getItem("token")?true:false,
  showLeftSideBar:true,
  showRightSideBar:false,
  theme:"light"
 },
  reducers: {
    login: (state) => {
      localStorage.setItem("token","user_authenticated");
      state.isAuthenticated=false;

    },
    logout: (state) => {
      localStorage.setItem("token","");
      state.isAuthenticated = false;
    },
    setShowLeftSideBar:(state,action)=>{
      state.showLeftSideBar=!state.showLeftSideBar;
    },
    setShowRightSideBar:(state,action)=>{
      state.showRightSideBar=action.payload;
    },
    setTheme:(state,action)=>{
      state.theme=action.payload;
    }
  },
});

export const { login, logout,setShowLeftSideBar,setShowRightSideBar,setTheme } = authSlice.actions;
export default authSlice.reducer;
