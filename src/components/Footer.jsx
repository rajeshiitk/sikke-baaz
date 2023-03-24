import React from 'react'
import { Input, Button, Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import {AiOutlineSend,  AiFillGithub} from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaQuora } from 'react-icons/fa';
const Footer = () => {
  return (
   <Box
   mt={['20','20']}
   backgroundColor={"blackAlpha.300"}
   minH={'48'}
   px={['2','16']}
   py={['16','8']}
   >
   <Stack direction={['column','row']} h={'full'} alignItems={"center"}>
   <VStack w={'full'} alignItems={['center','flex-start']} >
   <Text fontWeight={'bold'} textTransform={'uppercase'}> About Us</Text>
   <Text textAlign={['center','left']} fontSize={'sm'} letterSpacing={'widest'}>
   We provide realtime analysis of 100+ currrencies across the globe.
   </Text>
   </VStack>

   <VStack
   borderLeft={['none', '0.7px solid']}
   borderRight={['none', '0.7px solid']}
    alignItems={'stretch'} px={'4'} w={'full'}>
   <Text fontWeight={'bold'} pt={'4'} size="md" textTransform={'uppercase'} textAlign={['center', 'center']}>
     Subscribe to get updates
   </Text> 
   <HStack borderBottom={'2px solid'} py="2">
   <Input placeholder='Enter Email here...'
    border={"none"}
    borderRadius="none"
    outline={'none'} 
    focusBorderColor={'transparent'}
    ></Input>
   <Button 
    p={'0'}
    colorScheme={'purple'}
    variant={'ghost'}
    borderRadius={'0 20px 20px 0'}
    >
    <AiOutlineSend size={'20'} />
   </Button>
   </HStack>
 </VStack>

   <VStack w={'full'} alignItems={['center','center']}>
   <Text textTransform={'uppercase'} fontWeight={'bold'}> Connect with  us</Text>
   <HStack>
   <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} style={{ animationDelay: '0.3s' }} >
   <a href='https://www.instagram.com/rajeshiitk/' target="blank"  >< FaInstagram  color='purple' size={'32'}/> </a>
   </Button>
   <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} style={{ animationDelay: '0.5s' }} >
   <a href='https://www.facebook.com/rajesh1iitk'  target="blank"> < FaFacebook  color='purple' size={'32'}/></a>
   </Button>
   <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} style={{ animationDelay: '0.7s' }} >
   <a href='https://github.com/rajeshiitk'   target="blank" >< AiFillGithub  color='purple' size={'32'}/></a>
   </Button>
   <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} _active={{filter:'invert(1)'}} style={{ animationDelay: '0.9s' }} >
   <a href='https://www.quora.com/profile/Rajesh-Choudhary-1160'  target="blank" >< FaQuora color='purple' size={'32'}/></a>
   </Button>
   </HStack>
  
   </VStack>
   </Stack>

   </Box>
  )
}

export default Footer