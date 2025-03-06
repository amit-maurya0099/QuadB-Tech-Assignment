
import {  setShowLeftSideBar, setShowRightSideBar, setTheme } from '../redux/authSlice';
import { IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiSquaresFourLight } from "react-icons/pi";
import { MdNightsStay } from "react-icons/md";
import Logo from "../assets/logo.png"
import darkLogo from "../assets/darkLogo.png"
import { useDispatch, useSelector } from 'react-redux';
import { WiDaySunny } from "react-icons/wi";
const Header = () => {
  const dispatch=useDispatch();
   const {theme}=useSelector((store)=>store.auth);
  
  return (
    <header className={`w-full h-[10%] px-6 flex justify-between sticky top-0 ${theme ==="dark"? "bg-[#232323] text-white":"bg-white text-black"} `}>
      <div className='flex gap-2 h-full items-center py-1'>
        <IoMenuOutline className='text-4xl cursor-pointer' onClick={()=>dispatch(setShowLeftSideBar())}/>
      {theme ==="light" &&  <img src={Logo} alt="/" className='object-cover md:h-10 h-8  '></img>}
       {theme ==="dark" && <img src={darkLogo} alt="/" className='object-cover md:h-10 h-8'></img>}
      </div>
      <div className='md:text-3xl text-2xl flex items-center  gap-4 py-1'>
        <CiSearch />
        <PiSquaresFourLight className='cursor-pointer' onClick={()=>dispatch(setShowRightSideBar(true))}/>
       { (theme ==="light") && <MdNightsStay onClick={()=>dispatch(setTheme("dark"))}/>}
        {(theme==="dark") && <WiDaySunny onClick={()=>dispatch(setTheme("light"))}/>}

      </div>

    </header>
  );
};

export default Header;
