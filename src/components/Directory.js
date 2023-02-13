import React from 'react';

import Directoryitems from './Directoryitems.jsx';
import './Directory.scss'
const categories=[
  {id: 1, title: 'HAT' , imageurl:'https://i.pinimg.com/474x/96/62/56/966256ff4e54b5f8680b786bf5d55812.jpg' ,route:'shop/hats'},
  {id: 2, title: 'SNEAKERS' , imageurl:'https://i.pinimg.com/564x/4c/3c/b0/4c3cb0c071e5a9c5d6da5f9cf512976a.jpg' ,route:'shop/sneakers'},
  {id: 3, title: 'JACKET' , imageurl:'https://i.pinimg.com/564x/08/87/04/0887042d8db76d15dd4bf32d4a04cdc7.jpg' ,route:'shop/jacket'},
  {id: 4, title: 'MENS', imageurl:'https://i.pinimg.com/474x/1b/d4/4e/1bd44eac1a7112396daefa20be4e0462.jpg' ,route:'shop/mens'},
  {id: 5, title: 'WOMEN', imageurl:'https://i.pinimg.com/474x/43/a5/18/43a518fc90057a13fb902631d9fc23a7.jpg' ,route:'shop/women'}
]
const Directory=()=>{
    return(
    <div className='directory-container'>
      {categories.map((category) => (
      <Directoryitems key={category.id} category={category}/>
      
      ))}
    </div>
)}
export default Directory;
