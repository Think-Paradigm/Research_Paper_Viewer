import React, { useState, useEffect } from 'react';
import './popup.css';

function EditPopup({ profile, onClose, onSave }) {
  const [name, setName] = useState(profile.name);
  const [role, setRole] = useState(profile.role);

  const handleSave = () => {
    onSave({ ...profile, name, role });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 style={{marginBottom:'10px'}}>Edit Profile</h2>
        <div class="image-container">
        <img src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944'
         style={{width:'100px',height:'100px', border:'1px solid grey', borderRadius:'50px', marginLeft:'10px', cursor:'pointer'}}/>
        <div class="icon-overlay">
              <i class="fa fa-search"></i>
          </div>
          </div>
        <div style={{marginBottom:'6px'}}>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div style={{marginLeft:'12px'}}>
          <label>Role:</label>
          <input 
            type="text" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
          />
        </div>
        <button className='savee' onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EditPopup;
