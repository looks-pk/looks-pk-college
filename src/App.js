import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import RessetPassword from './pages/RessetPassword';
import SingleBlog from './pages/SingleBlog';

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
      <Route path='blogs' element={<Blog/>}/>
      <Route path='blog/:id' element={<SingleBlog/>}/>
      <Route path='Compare-Product' element={<CompareProduct/>}/>
      <Route path='wishlist' element={<WishList/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='forgotpassword' element={<ForgotPassword/>}/>
      <Route path='resset-password' element={<RessetPassword/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
