import React from 'react'
import { useState } from 'react';

const User = () => {
    const [count,setcount] = useState(0);
    const [count2] = useState(1);
  return ( 
    <div className='user-card'>
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name: S Aditya</h2>
        <h3>Location: gurgoan</h3>
        <h4>Contact: 5451464</h4>
      
    </div>
  );
}

export default User
