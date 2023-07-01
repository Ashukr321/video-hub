import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50% , -50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <>
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading
              bgColor={'blackAlpha.900'}
              color={'white'}
              {...headingOptions}
            >
              Watch the Future
            </Heading>
          </Box>
          <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading
              bgColor={'whiteAlpha.900'}
              color={'black'}
              {...headingOptions}
            >
              Watch the Gamming
            </Heading>
          </Box>

          <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading
              bgColor={'blackAlpha.600'}
              color={'white'}
              {...headingOptions}
            >
              Watch the Future
            </Heading>
          </Box>

          <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading
              bgColor={'blackAlpha.600'}
              color={'white'}
              {...headingOptions}
            >
              Watch the Future
            </Heading>
          </Box>

          <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading
              bgColor={'blackAlpha.600'}
              color={'white'}
              {...headingOptions}
            >
              Night Light is Cool
            </Heading>
          </Box>
        </Carousel>

        <Container maxW={'container.xl'} h={'100vh'}  p={16}>
          <Heading
            textTransform={'uppercase'}
            w={'fit-content'}
            py={2}
            borderBottom={'2px solid'}
            m="auto"
          >
            Services
          </Heading>

          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img5}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
              p={['4','16']}
              textAlign={'center'}
            />
            <Text letterSpacing={'widest'} lineHeight={'7'} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              quod alias atque officiis praesentium animi magni reiciendis
              optio, ipsam quibusdam natus maiores a quae sequi quam laboriosam,
              dignissimos ullam qui! Animi consequuntur asperiores enim quos
              dolorum rerum natus
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
