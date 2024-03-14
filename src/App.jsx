
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import 'bootstrap/dist/js/bootstrap'//

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import WhatWeDo from './containers/WhatWeDo';
import Career from './containers/Career';
import Contact from './containers/Contact';
import Blog from './containers/Blog';
import NotFound from './containers/NotFound';




function App() {

  return (
    <>

    

    <BrowserRouter>

    <Navbar/>
    
   
   <Routes>
    <Route path='/' element={<WhatWeDo/>}/>
    <Route path='karyera' element={<Career/>}/>
    <Route path='bloqlar' element={<Blog/>}/>
    <Route path='bizimleelaqe' element={<Contact/>}/>
    <Route path='*' element={<NotFound/>}/>


   </Routes>
    <Footer/>
    
    </BrowserRouter>
  
    
  

    
    
    

     
    </>
  )
}

export default App
