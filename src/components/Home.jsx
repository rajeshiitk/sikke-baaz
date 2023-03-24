import { Box, Image, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import main from '../assets/main.svg';
const Home = () => {
  return (
    <Fragment>
    <Box    
    bgColor={'blackAlpha.200'} 
    w={'full'}
    h={['65vh','85vh']}>

    <motion.div 
    style={{
      height :  '100%'

    }}
    animate={{
      translateY:'15px',
    }}

    transition={{
      duration :2,
      repeat : Infinity,
      repeatType : 'reverse'
    }}
    
    >
    <Image w={'full'} h={'full'} objectFit={'contain'} src={main}  />

    </motion.div>
    <Text   bgColor={'blackAlpha.200'}   textTransform={'uppercase'} fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'}>Sikke-Baaz</Text>
    </Box>
    </Fragment>
  )
}

export default Home