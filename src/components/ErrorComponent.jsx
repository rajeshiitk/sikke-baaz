import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      borderRadius={'8'}
      status='error'
      w={['80%', '80%']}
      position={'fixed'} bottom={'4'}
      left={'50%'}
      transform={"translateX(-50%)"}>
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default ErrorComponent