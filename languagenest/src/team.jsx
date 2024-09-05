import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import './team.css';
import EditPopup from './pup';
import Pro from './pro';
// Import the Popup component
// Define the Team component
const Team = () => {

  const [profiles, setProfiles] = useState(
    Array.from({ length: 12 }).map((_, index) => ({
      id: index,  // Unique identifier for each profile
      name: `Person ${index + 1}`,
      role: `(Person Role ${index + 1})`
    }))
  );
 
  const [activeIndex, setActiveIndex] = useState(null);
  const [editingProfile, setEditingProfile] = useState(null); // State to hold the profile being edited
  const [showProPopup, setShowProPopup] = useState(false);


  const handleDotsClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
    setActiveIndex(null); // Close the options menu after deletion
  };

  const handleEdit = (index) => {
    setEditingProfile(profiles[index]); // Set the profile to be edited
    setActiveIndex(null); // Close the options menu
  };

  const handleSave = (updatedProfile) => {
    setProfiles(profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
    setEditingProfile(null); // Close the popup after saving
  };
 

  const options = (
    <div className="options-menu">
      <div onClick={() => handleEdit(activeIndex)}>Edit</div>
      <div onClick={() => handleDelete(profiles[activeIndex].id)}>Delete</div>
    </div>
  );

  return (
    <div>
      <div className='grd'>
        {profiles.map((profile, index) => (
          <div className='cont' key={profile.id}>
            <button className='dot' onClick={() => handleDotsClick(index)}>
              <BiDotsVerticalRounded />
            </button>
            
            {activeIndex === index && options}
            <img
              className='pro'
              src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944'
              alt="profile"
            />
            <h2 className='name'>{profile.name}</h2>
            <h3 className='role'>{profile.role}</h3>
          </div>
        ))}
          <div className='add' style={{ cursor:'pointer' }} onClick={() => setShowProPopup(true)}>
            <div>
              <AiOutlinePlus size={100} className='plus'/>
            </div>
         </div>

      </div>
      {/* Render the EditPopup only when a profile is being edited */}
      {editingProfile && (
        <EditPopup
          profile={editingProfile}
          onClose={() => setEditingProfile(null)}
          onSave={handleSave}
        />
      )}
      {showProPopup && (
  <div className="popup-overlay">
   
      <Pro />
      <button className='clss' onClick={() => setShowProPopup(false)}>Close</button>
    
  </div>
)}

    </div>
  );
};

// Export the Team component
export default Team;
