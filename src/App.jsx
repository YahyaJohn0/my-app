import  {React , useEffect} from 'react';
import Home from './pages/Home/Home';
import {Login} from './pages/Login/Login';
import Player from './pages/Player/Player';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import ProfileSettings from './pages/Home/ProfileSettings';
import { onAuthStateChanged } from 'firebase/auth';
import  {auth}  from './pages/Login/Login';

const App = () => {
  

 const navigate = useNavigate();
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(!user){
        navigate('/login')
      }
    }) 
    
        return ()=> unsubscribe();
  }) 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Player/:id' element={<Player />}/>
        <Route path='/ProfileSettings' element={<ProfileSettings />}/>
      </Routes>
    </div>
  );
}

export default App;
