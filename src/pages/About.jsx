import React from 'react';
import {
  Box,
  Text,
  Stack,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import BackHome from '../components/BackHome';
import styled from 'styled-components';

function About() {
  const API_URL = 'https://github.com/D3vd/Meme_Api';
  const GITHUB_URL = 'https://github.com/benthecoder/VoteMemes';
  return (
    <styledDiv>
      <Box textAlign="center" fontSize="xl" as="kbd">
        <Stack spacing={10}>
          <Text fontSize="5xl" fontWeight="bold" color="tomato">
            About
          </Text>
          <Text fontSize="xl" color="gray.200" noOfLines={2} mx={10}>
            To answer the most important question of all, what's the best
            programming meme?
          </Text>
          <Text color="teal.200" noOfLines={2}>
            Tech Stack: Firebase, React, ChakraUI,{' '}
            <Link href={API_URL} isExternal>
              <Text as="u">Meme API</Text>
            </Link>
          </Text>
          <List spacing={2}>
            <Text color="blue.200" noOfLines={2}>
              Team:
            </Text>
            <ListItem>
              <Link href="https://www.linkedin.com/in/benedictneo/" isExternal>
                <ListIcon as={FaLinkedin} color="blue.200" />
              </Link>
              Benedict Neo
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/andy-foo-guo-zhen-791a58174/"
                isExternal
              >
                <ListIcon as={FaLinkedin} color="blue.200" />
              </Link>
              Andy Foo
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/vincent-zi-hong-lee-3bb2b4212/"
                isExternal
              >
                <ListIcon as={FaLinkedin} color="blue.200" />
              </Link>
              Vincent Lee
            </ListItem>
          </List>
          <Text color="orange.400" noOfLines={2}>
            Check out our{' '}
            <Link href={GITHUB_URL} isExternal>
              <Text as="u">Github Repo</Text>
            </Link>
          </Text>
        </Stack>
      </Box>
      <BackHome className="backHome" />
    </styledDiv>
  );
}

const styledDiv = styled.div``;
export default About;
