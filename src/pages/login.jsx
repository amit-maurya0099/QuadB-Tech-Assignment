import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleLogin=()=>{
     dispatch(login());
     navigate("/");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <button className="bg-blue-500 text-white px-6 py-2 cursor-pointer" onClick={handleLogin} >
        Login
      </button>
    </div>
  );
};

export default Login;
