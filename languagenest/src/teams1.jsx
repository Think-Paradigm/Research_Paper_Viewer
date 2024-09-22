// // import React, { useState } from 'react';
// // import { BiDotsVerticalRounded } from 'react-icons/bi';
// // import { AiOutlinePlus } from 'react-icons/ai';
// // import './team.css';
// // import EditPopup from './pup';
// // import Pro from './pro';
// // // Import the Popup component
// // // Define the Team component
// // const Team = () => {

// //   const [profiles, setProfiles] = useState(
// //     Array.from({ length: 12 }).map((_, index) => ({
// //       id: index,  // Unique identifier for each profile
// //       name: `Person ${index + 1}`,
// //       role: `(Person Role ${index + 1})`
// //     }))
// //   );
 
// //   const [activeIndex, setActiveIndex] = useState(null);
// //   const [editingProfile, setEditingProfile] = useState(null); // State to hold the profile being edited
// //   const [showProPopup, setShowProPopup] = useState(false);


// //   const handleDotsClick = (index) => {
// //     setActiveIndex(index === activeIndex ? null : index);
// //   };

// //   const handleDelete = (id) => {
// //     setProfiles(profiles.filter(profile => profile.id !== id));
// //     setActiveIndex(null); // Close the options menu after deletion
// //   };

// //   const handleEdit = (index) => {
// //     setEditingProfile(profiles[index]); // Set the profile to be edited
// //     setActiveIndex(null); // Close the options menu
// //   };

// //   const handleSave = (updatedProfile) => {
// //     setProfiles(profiles.map(profile =>
// //       profile.id === updatedProfile.id ? updatedProfile : profile
// //     ));
// //     setEditingProfile(null); // Close the popup after saving
// //   };
 

// //   const options = (
// //     <div className="options-menu">
// //       <div onClick={() => handleEdit(activeIndex)}>Edit</div>
// //       <div onClick={() => handleDelete(profiles[activeIndex].id)}>Delete</div>
// //     </div>
// //   );

// //   return (
// //     <div>
// //       <div className='grd'>
// //         {profiles.map((profile, index) => (
// //           <div className='cont' key={profile.id}>
// //             <button className='dot' onClick={() => handleDotsClick(index)}>
// //               <BiDotsVerticalRounded />
// //             </button>
            
// //             {activeIndex === index && options}
// //             <img
// //               className='pro'
// //               src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944'
// //               alt="profile"
// //             />
// //             <h2 className='name'>{profile.name}</h2>
// //             <h3 className='role'>{profile.role}</h3>
// //           </div>
// //         ))}
// //           <div className='add' style={{ cursor:'pointer' }} onClick={() => setShowProPopup(true)}>
// //             <div>
// //               <AiOutlinePlus size={100} className='plus'/>
// //             </div>
// //          </div>

// //       </div>
// //       {/* Render the EditPopup only when a profile is being edited */}
// //       {editingProfile && (
// //         <EditPopup
// //           profile={editingProfile}
// //           onClose={() => setEditingProfile(null)}
// //           onSave={handleSave}
// //         />
// //       )}
// //       {showProPopup && (
// //   <div className="popup-overlay">
   
// //       <Pro />
// //       <button className='clss' onClick={() => setShowProPopup(false)}>Close</button>
    
// //   </div>
// // )}
// //     </div>
// //   );
// // };

// // // Export the Team component
// // export default Team;



// import React, { useState } from 'react';
// import { BiDotsVerticalRounded } from 'react-icons/bi';
// import { AiOutlinePlus } from 'react-icons/ai';
// import './team.css';
// import EditPopup from './pup';
// import Pro from './pro';

// const Team = () => {
//   const [profiles, setProfiles] = useState(
//     Array.from({ length: 12 }).map((_, index) => ({
//       id: index,
//       name: `Person ${index + 1}`,
//       role: `(Person Role ${index + 1})`
//     }))
//   );

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [editingProfile, setEditingProfile] = useState(null);
//   const [showProPopup, setShowProPopup] = useState(false);

//   const handleDotsClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const handleDelete = (id) => {
//     setProfiles(profiles.filter(profile => profile.id !== id));
//     setActiveIndex(null);
//   };

//   const handleEdit = (index) => {
//     setEditingProfile(profiles[index]);
//     setActiveIndex(null);
//   };

//   const handleSave = (updatedProfile) => {
//     setProfiles(profiles.map(profile =>
//       profile.id === updatedProfile.id ? updatedProfile : profile
//     ));
//     setEditingProfile(null);
//   };

//   const handleAddProfile = (newProfile) => {
//     setProfiles([...profiles, { ...newProfile, id: profiles.length }]);
//     setShowProPopup(false);
//   };

//   const options = (
//     <div className="options-menu">
//       <div onClick={() => handleEdit(activeIndex)}>Edit</div>
//       <div onClick={() => handleDelete(profiles[activeIndex].id)}>Delete</div>
//     </div>
//   );

//   return (
//     <div>
//       <div className='grd'>
//         {profiles.map((profile, index) => (
//           <div className='cont' key={profile.id}>
//             <button className='dot' onClick={() => handleDotsClick(index)}>
//               <BiDotsVerticalRounded />
//             </button>
            
//             {activeIndex === index && options}
//             <img
//               className='pro'
//               src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944'
//               alt="profile"
//             />
//             <h2 className='name'>{profile.name}</h2>
//             <h3 className='role'>{profile.role}</h3>
//           </div>
//         ))}
//         <div className='add' style={{ cursor: 'pointer' }} onClick={() => setShowProPopup(true)}>
//           <div>
//           <AiOutlinePlus size={100} className='plus' />
//           </div>
//         </div>
//       </div>

//       {editingProfile && (
//         <EditPopup
//           profile={editingProfile}
//           onClose={() => setEditingProfile(null)}
//           onSave={handleSave}
//         />
//       )}
      
//       {showProPopup && (
//         <div className="popup-overlay">
//           <Pro onAddProfile={handleAddProfile} />
//           <button className='clss' onClick={() => setShowProPopup(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Team;


import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { AnimatePresence } from 'framer-motion';

import {
  Box,
  Button,
  Grid,
  IconButton,
  Text,
  VStack,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react';
import EditPopup from './pup';
import Pro from './pro';

const Team1 = () => {
  const [profiles, setProfiles] = useState(
    Array.from({ length: 2 }).map((_, index) => ({
      id: index,
      name: `Person ${index + 1}`,
      role: `(Person Role ${index + 1})`
    }))
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingProfile, setEditingProfile] = useState(null);

  const handleDotsClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
    setActiveIndex(null);
  };

  const handleEdit = (index) => {
    setEditingProfile(profiles[index]);
    setActiveIndex(null);
  };

  const handleSave = (updatedProfile) => {
    setProfiles(profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
    setEditingProfile(null);
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length }]);
    onClose();
  };

  return (
    <Box p={5} backgroundColor="linear-gradient(120deg, rgb(192, 233, 222) 0%, rgb(174, 174, 244) 50%, rgb(241, 180, 241) 100%)">
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {profiles.map((profile, index) => (
          <Box key={profile.id} borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative" backgroundColor="rgb(240, 248, 255)">
            <Menu>
              <MenuButton as={IconButton} style={{marginLeft:'180px'}} icon={<BiDotsVerticalRounded />} onClick={() => handleDotsClick(index)} />
              <MenuList>
                <MenuItem onClick={() => handleEdit(index)}>Edit</MenuItem>
                <MenuItem onClick={() => handleDelete(profile.id)}>Delete</MenuItem>
              </MenuList>
            </Menu>
            <Image
              src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944'
              alt="profile"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              m="auto"
              mt={3}
            />
            <VStack spacing={2} p={3} textAlign="center">
              <Text fontSize="lg" fontWeight="bold">{profile.name}</Text>
              <Text color="gray.600">{profile.role}</Text>
            </VStack>
          </Box>
        ))}
        <Flex justifyContent="center" alignItems="center" cursor="pointer" onClick={onOpen}>
          <Box borderRadius="80px" backgroundColor="rgb(224, 222, 222)" width="150px" height="150px" display="flex" alignItems="center" justifyContent="center">
            <AiOutlinePlus size={100} className='plus' />
          </Box>
        </Flex>
      </Grid>

      {editingProfile && (
        <EditPopup
          profile={editingProfile}
          onClose={() => setEditingProfile(null)}
          onSave={handleSave}
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Pro onAddProfile={handleAddProfile} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Team1;
