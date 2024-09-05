import React from 'react'
import { FaUser } from 'react-icons/fa';

import './pro.css'
const Pro = () => {
  return (
    <div className='bx'>
        <div className='pic' style={{
      width: '150px',
      height: '150px',
      borderRadius: '75px',
      backgroundColor: '#f0f0f0', // Optional: set a background color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor:'pointer'
    }}>
           <FaUser size={80} /> 
        </div>
        <div className='nme'>
            <label>Name:</label>
            <input/>
        </div>
        <div className='rle'>
            <label>Role:</label>
            <input/>
        </div>
        <button className='svee'>
            Save
        </button>
        
    </div>
  )
}

export default Pro