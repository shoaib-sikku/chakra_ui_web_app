import React, { useState } from 'react'
import { Box, Button, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
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
                    <Heading>VIDEO HUB</Heading>
                    <Avatar src='https://bit.ly/broken-link' alignSelf={'center'} boxSize={'32'} />
                    <form>
                        <Input
                            type={'text'}
                            required
                            placeholder='Name..'
                            mb={'2'}
                            id={'name'}
                            value={form.name}
                            onChange={(e) => formHandle(e)}
                        />
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
                            colorScheme={'white'}
                            bg={'purple'}
                            mb={'2'}
                            type={'submit'}
                            w={'100%'}
                        >
                            Sign Up
                        </Button>

                        <Text
                            textAlign={'end'}
                        >Already Signed Up? <Button
                            variant={'link'}
                        >
                                <Link to={'/login'}>Login?</Link>
                            </Button>
                        </Text>
                    </form>
                </VStack>
            </Box>
        </>
    )
}

export default SignUp
