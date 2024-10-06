import React from 'react'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
   
    const token = localStorage.getItem('token');

    if (!token) {
     
      navigate('/login');
    }else{

      navigate('/');
      
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route  path='/login' element={<Login/>}/>
     <Route path='/Player/:id' element={<Player />}/>
     </Routes>
    </div>
  )
}

export default App
