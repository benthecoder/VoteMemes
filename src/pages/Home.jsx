import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Text } from '@chakra-ui/react';
import { db } from '../firebase-config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';

const MEME_API_URL = 'https://meme-api.herokuapp.com/gimme/ProgrammerHumor/2';

function Home() {
  const [memes, setMemes] = useState([]);
  const [click, setClick] = useState(true);

  const grabID = url => {
    const id = url.split('/').at(-1);
    return id;
  };

  const getMemeCount = async ID => {
    const memeRef = doc(db, 'memes', ID);
    const docSnap = await getDoc(memeRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    // console.log('No such document!');
    return 0;
  };

  const setMemeData = async (postLink, url) => {
    const ID = grabID(postLink);
    let docObj = await getMemeCount(ID);
    let count = 0;

    if (docObj === 0) {
      count = 1;
    } else {
      count = docObj.count + 1;
    }

    setDoc(doc(db, 'memes', ID), {
      image_url: url,
      count: count,
    });
  };

  const getMemes = async (postLink, url) => {
    axios
      .get(MEME_API_URL)
      .then(res => {
        setMemes(res.data.memes);
        if (!click) {
          setMemeData(postLink, url);
        }
      })

      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (click) {
      setClick(false);
      getMemes();
    }
  }, []);

  return (
    <>
      <Box textAlign="center" fontSize="xl" as="kbd">
        <StyledDiv>
          <Text
            mt={7}
            bgGradient="linear(to-r, #ECE9E6, #FFFFFF)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Which Programming Meme is Better?
          </Text>
          <div className="container">
            {memes.length > 0 &&
              memes.map(meme => {
                return (
                  <div key={meme.ups}>
                    <motion.img
                      animate={{ opacity: 1, transition: { duration: 1 } }}
                      initial={{ opacity: 0 }}
                      src={meme.url}
                      alt=""
                    />

                    <Button
                      onClick={() => getMemes(meme.postLink, meme.url)}
                      colorScheme={'teal'}
                      size="lg"
                      color="white"
                      leftIcon={<FaCheckCircle />}
                      bgGradient="linear(to-r, #396afc, #2948ff)"
                      _hover={{
                        bgGradient: 'linear(to-r, #11998e, #38ef7d)',
                      }}
                    >
                      Vote
                    </Button>
                  </div>
                );
              })}
          </div>
        </StyledDiv>
      </Box>
      <Footer />
    </>
  );
}

const StyledDiv = styled.div`
  box-sizing: border-box;

  .container {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    min-height: 50vh;
    margin-top: 3rem;
  }

  Button {
    margin-top: 3rem;
  }

  div {
    flex: 1 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 500px;
    height: 450px;
  }

  @media (max-width: 500px) {
    width: 80%;
    margin: auto;
    p {
      font-size: 2rem;
      align: center;
    }

    Button {
      padding: 0px 10px;
      margin-top: 1.5rem;
    }
    .container {
      width: 75%;
      margin-bottom: 7rem;
    }
    img {
      width: calc(350px - 4vw);
      height: calc(380px - 4vh);
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 1.3rem;
      align: center;
    }

    .container {
      margin-top: 1rem;
      margin-bottom: 0rem;
    }
    Button {
      font-size: 14px;
      margin-top: 15px;
    }
  }
`;

export default Home;
