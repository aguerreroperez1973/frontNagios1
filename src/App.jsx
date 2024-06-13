//import { useEffect, useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComponent from './components/NavbarComponent';
import Home from './views/Home';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Host from './views/Host';
import NotFound from './views/NotFound';
import RtuPage from './views/rtupage';
import NagiosPage from './views/NagiosPage';

function App() {

  return (
    <>
   
        <BrowserRouter>
        <NavbarComponent />
                <Routes>
                  <Route path="/*" element={<Home />} />
                  <Route path="/home" element={<Home />}  exact/>
                  <Route path="/NagiosPage/:hostname" element={ <NagiosPage />}  exact/>
                  <Route path="/RtuPage/:hostname" element={ <RtuPage />}  exact/>
                  <Route path="/host/:hostname" element={<Host />}  exact />
                  <Route path="*" element={<NotFound />} />
                </Routes>
        </BrowserRouter>
   
    </>
  )
}

export default App
