import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const LoginPage = () => {
  return (
    <>
        <Box>
            <form>
                <FormControl>
                    <FormLabel>UserName</FormLabel>
                    <Input type='text' value=""/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' value=""/>
                </FormControl>
                <Button>Login</Button>
            </form>
        </Box>
    </>
  )
}

export default LoginPage