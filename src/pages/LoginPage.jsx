import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('')
    const [usernameError , setUsernameError] = useState('')
    const [passwordError , setPasswordError] = useState('')
    const navigate = useNavigate()

    const hangleLogin = () => {
        if (!username) {
            setUsernameError('username is required')
        }
        else{
            setUsernameError('')
        }

        if (!password) {
            setPasswordError('Password is required')
        } else {
            setPasswordError('')
        }

        if (username === 'user' && password === 'password') {
            navigate('/')
        } else {
            setError('Invalid username and password')
        }
    }


  return (
    <>
        <Box p={4} maxW={"md"} mx={'auto'} mt={"10%"}>
            <VStack spacing={4}>
                <Heading>Login</Heading>
                {
                    error && <Box color={'red.500'}>{error}</Box>
                }
                <form>
                <FormControl isInvalid={usernameError}>
                    <FormLabel>UserName</FormLabel>
                    <Input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    {
                        usernameError && <FormErrorMessage>{usernameError}</FormErrorMessage>
                    }
                </FormControl>
                <FormControl isInvalid={passwordError}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {
                        passwordError && <FormErrorMessage>{passwordError}</FormErrorMessage>
                    }
                </FormControl>
                <Button colorScheme='blue' onClick={hangleLogin}>Login</Button>
            </form>
            </VStack>
        </Box>
    </>
  )
}

export default LoginPage