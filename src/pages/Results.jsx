import React from 'react';
import { Text, Box, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BackHome from '../components/BackHome';

function Results() {
  return (
    <>
      <Box textAlign="center" as="kbd">
        <Text fontSize="5xl" fontWeight="extrabold" mt={4}>
          Top Programming Meme
        </Text>
        <Text fontSize="md" color="gray.200" noOfLines={2} mt={4}>
          Here are the top 3 memes hackers voted for
        </Text>
      </Box>
      <BackHome />
    </>
  );
}

export default Results;
