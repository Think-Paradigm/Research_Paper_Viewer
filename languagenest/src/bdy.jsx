

import React, { useState } from 'react';
import { Box, Heading, UnorderedList, ListItem, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Pro from './pro'; // Ensure you import your Pro component

const Body = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
  const [newBodyName, setNewBodyName] = useState(''); // State for new body name
  const [bodies, setBodies] = useState([]); // State to manage list of bodies

  const handleNavigation = (bodyName) => {
    navigate(`/student-body/${encodeURIComponent(bodyName)}`); // Use body name in the route
  };

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => {
    setIsOpen(false);
    setNewBodyName(''); // Clear the input when closing
  };

  const handleAddBody = () => {
    if (newBodyName.trim() === '') {
      alert('Please enter a valid name for the body.');
      return;
    }
    setBodies((prev) => [...prev, newBodyName]); // Add new body to the list
    handleCloseModal(); // Close modal after adding body
  };

  return (
    <Box style={{ border: '1px solid grey', width: '300px', marginLeft: '200px', paddingLeft: '40px', borderRadius: '15px' }} p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Teams
      </Heading>
      <UnorderedList spacing={3}>
        {bodies.map((body, index) => (
          <ListItem key={index} onClick={() => handleNavigation(body)} cursor="pointer">
            {body}
          </ListItem>
        ))}
      </UnorderedList>

      <Button mt={4} style={{ backgroundColor: 'navy', color: 'white' }} onClick={handleOpenModal}>
        Create a Team
      </Button>

      {/* Modal for creating a new body */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="new-body-name">Team Name</FormLabel>
              <Input
                id="new-body-name"
                placeholder="Enter team name"
                value={newBodyName}
                onChange={(e) => setNewBodyName(e.target.value)}
              />
              <Button mt={4} colorScheme="blue" onClick={handleAddBody}>
                Add Team
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Body;
