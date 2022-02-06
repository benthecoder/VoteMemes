import React from 'react';
import { Text, Center } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function BackHome() {
  return (
    <Center mt={200} mb={100} as="kbd">
      <Text as="u" color="teal.100" fontSize="xl" fontWeight="extrabold">
        <ArrowBackIcon w={6} h={6} />
        <Link to="/">Back to home</Link>
      </Text>
    </Center>
  );
}

export default BackHome;
