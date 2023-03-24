import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current" 
      fontSize={"24"}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      opacity={'0.8'}
      icon={<SwitchIcon color={'#993399'} />}
      {...props}
    />
  );
};


export default ColorModeSwitcher;
