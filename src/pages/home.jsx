
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import LandingPage from './LandingPage';

const Home = () => {
 
  return (
    <div className={`h-[95vh] `}>
      <Header />
      <LandingPage />
      
    </div>
  );
};

export default Home;
