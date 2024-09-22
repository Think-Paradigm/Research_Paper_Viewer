import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Input,
  Image,
  Text,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function Pup({ profile, onClose, onSave }) {
  const [name, setName] = useState(profile.name);
  const [role, setRole] = useState(profile.role);
  const [image, setImage] = useState(profile.image || ''); // State for the image URL
  const fileInputRef = useRef(null); // Ref for the file input element
  const toast = useToast();

  const handleSave = () => {
    onSave({ ...profile, name, role, image }); // Pass the image URL when saving
    toast({ title: "Profile saved.", status: "success", duration: 3000, isClosable: true });
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <Box className="popup-overlay">
      <Box
        bg="white"
        p={5}
        borderRadius="md"
        boxShadow="md"
        width="400px"
      >
        <Text fontSize="lg" mb={4}>Edit Profile</Text>
        <Box
          onClick={handleImageClick}
          position="relative"
          display="inline-block"
          mb={4}
        >
          <Image
            src={image || 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944'}
            boxSize="100px"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="full"
            cursor="pointer"
          />
          <IconButton
            aria-label="Edit Image"
            icon={<FaSearch />}
            style={{backgroundColor:'navy',color:'white'}}
            size="sm"
            position="absolute"
            top={0}
            right={0}
            m={1}
            borderRadius="full"
          />
          <Input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} // Hide the file input
            onChange={handleFileChange} // Handle file input changes
          />
        </Box>
        <Box mb={3}>
          <Text mb={1}>Name:</Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mb={3}>
          <Text mb={1}>Role:</Text>
          <Input
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Box>
        <Button style={{backgroundColor:'navy',color:'white'}} mr={2} onClick={handleSave}>Save</Button>
        <Button variant="outline" onClick={onClose}>Close</Button>
      </Box>
    </Box>
  );
}

export default Pup;
