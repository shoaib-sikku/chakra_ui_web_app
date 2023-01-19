import { Box, Button, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const formHandle = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
    console.log(form)
  }
  return (
    <>
      <Box
        height={'100vh'}
      >
        <VStack
          h={'100vh'}
          px={['5', '50']}
          py={'20'}
        >
          <Heading>Welcome Back</Heading>
          <form>
            <Input
              type={'email'}
              required
              placeholder='Email..'
              mb={'2'}
              id={'email'}
              value={form.email}
              onChange={(e) => formHandle(e)}
            />
            <Input
              type={'password'}
              required
              placeholder='Password..'
              mb={'2'}
              id={'password'}
              value={form.password}
              onChange={(e) => formHandle(e)}
            />

            <Button
              justifyContent={'flex-end'}
              variant={'link'}
              mb={'2'}
              w={'100%'}
            >
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>

            <Button
              colorScheme={'white'}
              bg={'purple'}
              mb={'2'}
              type={'submit'}
              w={'100%'}
            >
              login
            </Button>

            <Text
              textAlign={'end'}
            >New User <Button
              variant={'link'}
            >
                <Link to={'/signup'}>Sign Up?</Link>
              </Button>
            </Text>
          </form>
        </VStack>
      </Box>
    </>
  )
}

export default Login
