import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './useteam.css';

function Useteam() {
    const [pop, setpop] = useState(false);
    
    // Sample data for team members
    const teamMembers = [
        { name: 'Alice Johnson', role: 'Developer', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Bob Smith', role: 'Designer', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Charlie Brown', role: 'Product Manager', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Daisy Miller', role: 'QA Engineer', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Eve Davis', role: 'Marketing', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Frank White', role: 'Sales', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Grace Lee', role: 'HR', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Henry King', role: 'Support', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Ivy Adams', role: 'Content Writer', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
        { name: 'Jackie Chan', role: 'Sys Admin', image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg' },
    ];

    return (
        <div>
            <div className='grd'>
                {teamMembers.map((member, index) => (
                    <div className='cont' key={index}>
                        <img className='pro' src={member.image} alt={member.name} />
                        <h2 className='name'>{member.name}</h2>
                        <h3 className='role'>({member.role})</h3>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', color: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '150px' }} className='btm'>
                <h2>Follow Us On:</h2>
                <FaInstagram style={{ cursor: 'pointer' }} size={30} />
                <FaFacebook style={{ cursor: 'pointer' }} size={30} />
                <FaYoutube style={{ cursor: 'pointer' }} size={30} />
            </div>
        </div>
    );
}

export default Useteam;
