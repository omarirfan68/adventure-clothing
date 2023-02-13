import {useNavigate} from 'react-router-dom';
import React from 'react';
import './Directoryitems.scss';



const Directoryitems=({category})=>{
    const {title,imageurl , route} = category;
    const navigate= useNavigate()
    const Onnavigatehandler =()=>navigate(route)
    return(
          <div className='category-containers'onClick ={Onnavigatehandler}>
            <div 
             className='background-image'
             style={{
              backgroundImage: `url(${imageurl})`
             }}
             />
              
          <div className='category-body-containers'>
            <h2>{title}</h2>
            <p>SHOP NOW</p>
            
          </div>
        </div>
 )
}  
export default Directoryitems;