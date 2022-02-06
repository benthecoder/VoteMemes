import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Text } from '@chakra-ui/react';
import { db } from '../firebase-config';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';

const URL = 'https://meme-api.herokuapp.com/gimme/ProgrammerHumor/2';

function Home() {
  const [memes, setMemes] = useState([]);
  const [click, setClick] = useState(true);
  const [memeDB, setMemeDB] = useState([]);
  const [url, setUrl] = useState('');
  const [ID, setID] = useState(0);
  const [count, setCount] = useState(0);

  const memeCollectionRef = collection(db, 'memes');

  const getMemes = async (memeID, url) => {
    axios
      .get(URL)
      .then(res => {
        console.log(res.data.memes);
        setMemes(res.data.memes);
        if (!click) {
          setID(memeID);
          setUrl(url);
          addDoc(memeCollectionRef, {
            Url: url,
            Id: ID,
            Count: count + 1,
          });
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

  useEffect(() => {
    const getMemes = async () => {
      const data = await getDocs(memeCollectionRef);
      setMemeDB(data.docs.map(doc => ({ ...doc.data(), ID: doc.ID })));
    };

    getMemes();
  }, []);

  return (
    <>
      <Box textAlign="center" fontSize="xl" as="kbd">
        <StyledDiv>
          {/* {memeDB.map(meme => {
            return (
              <div>
                <h1>URL : {meme.Url}</h1>
                <h1>ID : {meme.Id}</h1>
                <h1>Count: {meme.Count}</h1>
              </div>
            );
          })} */}
          <Text
            mt={7}
            bgGradient="linear(to-r, #f2709c, #ff9472)"
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
                      onClick={() => getMemes(meme.ups, meme.url)}
                      colorScheme={'teal'}
                      size="lg"
                      color="white"
                      leftIcon={<FaCheckCircle />}
                      bgGradient="linear(to-r, teal.500, green.500)"
                      _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
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
    width: 450px;
    height: 450px;
  }
`;

export default Home;
