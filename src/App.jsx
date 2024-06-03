//import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home'
import NavbarComponent from './components/NavbarComponent';

function App() {

  return (
    <>
      <BrowserRouter>  
        <NavbarComponent></NavbarComponent>   
              <Routes>
                <Route path="/" element={<Home></Home>}/>
              </Routes>
          </BrowserRouter> 
    </>
  )
}

export default App
