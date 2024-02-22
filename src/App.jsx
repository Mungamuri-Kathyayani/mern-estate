import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import SignUp from './Pages/signup';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './components/Header';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/sign-in" element={<SignIn/>}/>
<Route path="/sign-up" element={<SignUp/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Profile" element={<Profile/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
