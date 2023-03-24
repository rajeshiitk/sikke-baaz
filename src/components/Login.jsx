import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={['8','16']}>
    
    <form>
    <VStack alignItems={"stretch"} spacing={"8"} m={'auto'} 
    my={'16'} width={['full','96']} >
    <Heading fontSize={['md','3xl']} textTransform={'uppercase'}>Welcome Back !</Heading>
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

      <Button variant={'link'} alignSelf={"flex-end"}>
      <Link to={"sikke-baaz/forgot-password"} > Forgot Password</Link>
      </Button>

      <Button colorScheme={'purple'} type={'submit'} >
      Log In
      </Button>

      <Text textAlign={'right'}>
      New User?{" "}  
      <Button variant={'link'}  colorScheme={"purple"}>
      <Link to={"sikke-baaz/signup"} >Sign Up</Link>
      </Button>
       </Text>
      

    </VStack>
    </form>

    </Container>
  )
}

export default Login