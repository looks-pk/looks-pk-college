import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav2 from './components/Nav2';
import OurStore from './pages/OurStore';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Store' element={<OurStore/>}/>
      <Route path='Nav2' element={<Nav2/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
