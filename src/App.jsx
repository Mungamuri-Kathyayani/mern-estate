import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import signup from './Pages/signup';
import About from './Pages/About';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/sign-in" element={<signIn/>}/>
<Route path="/sign-up" element={<signUp/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Profile" element={<Profile/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
