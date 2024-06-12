//import { useEffect, useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComponent from './components/NavbarComponent';
import Gallery from './components/Gallery';
import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Host from './views/Host';
import NotFound from './views/NotFound';
import RtuPage from './views/rtupage';

function App() {

  return (
    <>
    <BrowserRouter>  
      <NavbarComponent /> 
            {/*<Gallery></Gallery>*/}
              <Routes>
                <Route path="/*" element={<Home></Home>}/>
                <Route path="/home" element={<Home></Home>}/>
                <Route path='/rtupage/:hostname' element={ <RtuPage></RtuPage>}/>
                <Route path="/host/:hostname" element={<Host />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
