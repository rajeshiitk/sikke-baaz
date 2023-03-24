import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} minH={"100vh"} p={['8','16']}>
    
    <form>
    <VStack alignItems={"stretch"} spacing={"8"} m={'auto'} 
    my={'16'} width={['full','96']} >
    <Heading fontSize={['md','3xl']} textAlign={'center'} textTransform={'uppercase'}>Sikke Baaz</Heading>
    <Avatar alignSelf={'center'} boxSize={'32'}/>
    <Input 
    placeholder='Name'
     type={'text'}
      required 
      focusBorderColor={'purple.500'}/>
    <Input 
    placeholder='Email'
     type={'email'}
      required 
      focusBorderColor={'purple.500'}/>
    <Input 
    placeholder='Password'
     type={'password'}
      required 
      focusBorderColor={'purple.500'}/>

      <Button colorScheme={'purple'} type={'submit'} >
      Sign Up
      </Button>

      <Text textAlign={'right'}>
      Already Signed Up?{" "}  
      <Button variant={'link'}  colorScheme={"purple"}>
      <Link to={"/sikke-baaz/login"} >Login In</Link>
      </Button>
       </Text>
      

    </VStack>
    </form>

    </Container>
  )
}

export default Signup;