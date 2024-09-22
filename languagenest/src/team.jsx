



import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Box,
  Grid,
  IconButton,
  Text,
  VStack,
  Flex,
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
} from '@chakra-ui/react';
import EditPopup from './pup'; // Ensure this component uses props correctly
import Pro from './pro'; // Your add profile component

const Team = () => {
  const [profiles, setProfiles] = useState(
    Array.from({ length: 2 }).map((_, index) => ({
      id: index,
      name: `Person ${index + 1}`,
      role: `(Person Role ${index + 1})`,
    }))
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const { isOpen: isAddProfileOpen, onOpen: onAddProfileOpen, onClose: onAddProfileClose } = useDisclosure();
  const { isOpen: isEditProfileOpen, onOpen: onEditProfileOpen, onClose: onEditProfileClose } = useDisclosure();
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
    onEditProfileOpen(); // Open the modal for editing
    setActiveIndex(null);
  };

  const handleSave = (updatedProfile) => {
    setProfiles(profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
    setEditingProfile(null);
    onEditProfileClose(); // Close the modal after saving
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length }]);
    onAddProfileClose();
  };

  return (
    <Box p={5} backgroundColor="linear-gradient(120deg, rgb(192, 233, 222) 0%, rgb(174, 174, 244) 50%, rgb(241, 180, 241) 100%)">
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {profiles.map((profile, index) => (
          <Box key={profile.id} borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative" backgroundColor="rgb(240, 248, 255)">
            <Menu>
              <MenuButton as={IconButton} style={{marginLeft:'180px',height:'35px'}} icon={<BiDotsVerticalRounded />} onClick={() => handleDotsClick(index)} />
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
        <Flex justifyContent="center" alignItems="center" cursor="pointer" onClick={onAddProfileOpen}>
          <Box borderRadius="80px" backgroundColor="rgb(224, 222, 222)" width="150px" height="150px" display="flex" alignItems="center" justifyContent="center">
            <AiOutlinePlus size={100} className='plus' />
          </Box>
        </Flex>
      </Grid>

      {/* Modal for adding a new profile */}
      <Modal isOpen={isAddProfileOpen} onClose={onAddProfileClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Pro onAddProfile={handleAddProfile} />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal for editing a profile */}
      <Modal isOpen={isEditProfileOpen} onClose={onEditProfileClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {editingProfile && (
              <EditPopup
                profile={editingProfile}
                onClose={() => setEditingProfile(null)}
                onSave={handleSave}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Team;
