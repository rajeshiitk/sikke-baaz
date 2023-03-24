import { Box, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from '../ColorModeSwitcher';
import MobileDrawer from './MobileDrawer';


const Header = () => {

  return (
    <HStack  pos={'sticky'} w={'100%'} top={'0'} p={'2'} shadow={'base'} bgColor={'teal.300'}  justifyContent={'space-between'} zIndex={'overlay'}>
      <Box display={['flex', 'none']}>
        <MobileDrawer />
      </Box>

      <HStack display={['none', 'flex']}>
        <Button color='white' fontSize={'25'} _hover={{ color: "purple.500" }} variant={'unstyled'} px={'2'}>
          <Link to="/sikke-baaz"  >Home</Link>
        </Button>
        <Button color='white' fontSize={'25'} _hover={{ color: "purple.500" }} variant={'unstyled'} px={'2'}>
          <Link  to="/sikke-baaz/coins">Coins</Link>
        </Button>
        <Button color='white' fontSize={'25'} 
          _hover={{ color: "purple.500" }}
          variant={'unstyled'} px={'2'}>
          <Link to="/sikke-baaz/exchanges">Exchanges</Link>
        </Button>
      </HStack>
      <HStack>
        <HStack display={['none','flex']}
          justifyContent={'space-evenly'}
          w={'full'}>
          <Button colorScheme='purple'>
            <Link to={'/sikke-baaz/login'}>Log In</Link>
          </Button>
          <Button variant={'outline'} color={'purple.600'} colorScheme='purple'>
            <Link to={'/sikke-baaz/signup'}>Sign Up</Link>
          </Button>
         

        </HStack>
        <ColorModeSwitcher />
      </HStack>
    </HStack>


  )
}

export default Header