import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {useDisclosure} from "@chakra-ui/react";
import {Badge} from "@chakra-ui/react";
import { BiMenuAltLeft } from 'react-icons/bi';


const MobileDrawer = () => {
    const {isOpen,onOpen, onClose } = useDisclosure();
   
  return (
    <Fragment>
    <Button variant={'unstyled'}
    color={'purple.500'}
    colorScheme={'purple'}
    borderRadius={'full'}
    onClick={onOpen}
    zIndex={"overlay"}>
    <BiMenuAltLeft size={"30"} />
  </Button>
    <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} size={'xl'}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader textTransform={'uppercase'} fontSize={'120%'} borderBottom={'2px'}  color={'purple.300'}>Sikke Baaz <i class="ri-hand-coin-line"></i>
      <Badge ml={'8'} colorScheme='red'>Beta</Badge>
      </DrawerHeader>
      <DrawerBody>
        <VStack alignItems={'flex-start'} >
          <Button onClick={onClose} variant={"ghost"} fontWeight={'thin'}  colorScheme='purple'>
            <Link to={'/'}>Home</Link>
          </Button>
          <Button onClick={onClose} variant={"ghost"} fontWeight={'thin'} colorScheme='purple'>
            <Link to={'/coins'}>Coins</Link>
          </Button>
          <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
            <Link to={'/exchanges'}>Exchanges</Link>
          </Button>
        </VStack>
        <HStack pos={'absolute'}
          bottom={'10'}
          left={'0'}
          justifyContent={'space-evenly'}
          w={'full'}>
          <Button onClick={onClose} colorScheme='purple'>
            <Link to={'/login'}>Log In</Link>
          </Button>
          <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
        </HStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  </Fragment>
  )
}

export default MobileDrawer