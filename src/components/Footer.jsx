import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

function Footer() {
  return (
    <StyledNav>
      <Link to="/about">
        <Text as="kbd" fontSize="xl" fontWeight="bold">
          About
        </Text>
      </Link>
      <div>{' - '}</div>
      <Link to="/results">
        <Text as="kbd" fontSize="xl" fontWeight="bold">
          Results
        </Text>
      </Link>
    </StyledNav>
  );
}

export default Footer;

const StyledNav = styled.nav`
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  div {
    margin-left: 1.8rem;
    margin-right: 1.8rem;
  }
`;
