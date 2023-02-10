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
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='product' element={<OurStore/>}/>
      <Route path='blogs' element={<Blog/>}/>
      <Route path='blog/:id' element={<SingleBlog/>}/>
      <Route path='Compare-Product' element={<CompareProduct/>}/>
      <Route path='wishlist' element={<WishList/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='forgotpassword' element={<ForgotPassword/>}/>
      <Route path='resset-password' element={<RessetPassword/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='return-policy' element={<ReturnPolicy/>}/>
      <Route path='shipping-policy' element={<ShippingPolicy/>}/>
      <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
      <Route path='product/:id' element={<SingleProduct/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
