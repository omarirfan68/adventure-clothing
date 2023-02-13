import React from 'react';
import './Directoryitems.jsx';
import Directory from './Directory';
import { Outlet } from 'react-router-dom';
const Home =()=>{
  


  return (
    <div> 
        <Directory />
        <Outlet/>
    </div>

  );
};
export default Home;