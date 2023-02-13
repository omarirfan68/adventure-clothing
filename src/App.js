import React from 'react';
import {  Route,Routes } from 'react-router-dom';
import Home from './components/Homepage.jsx';
import Navigation from './components/Navigation.jsx';
import Signin from './components/Signin.jsx'
import Shop from './SHOP/shop.jsx';
import Checkout from './CHECKOUT/Checkout.jsx';
const App =()=>{
 return (
 <Routes>
  <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop/*' element={<Shop/>}/>
    <Route path='signin' element={<Signin/>}/>
    <Route path='checkout' element={<Checkout/>}/>
  </Route>
 </Routes>
 )
};
export default App;