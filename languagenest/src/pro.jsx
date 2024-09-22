import React, { useState, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import {
  Box,
  Input,
  Button,
  FormLabel,
  VStack,
} from '@chakra-ui/react';

const Pro = ({ onAddProfile }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = { name, role, image };
    onAddProfile(newProfile);
    setImage(null);
    setName('');
    setRole('');
  };

  return (
    <Box textAlign="center" p={5}>
      <Box
        as="div"
        width="150px"
        height="150px"
        borderRadius="full"
        backgroundColor="#f0f0f0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        onClick={handleImageClick}
        mb={4}
      >
        {!image && <FaUser size={80} />}
      </Box>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <FormLabel>Name:</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormLabel>Role:</FormLabel>
        <Input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <Button type='submit' style={{backgroundColor:'navy',color:'white'}}>Save</Button>
      </VStack>
    </Box>
  );
};

export default Pro;
