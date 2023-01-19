import { Box, Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
const Upload = () => {
  return (
    <>
      <Box
        h={'100vh'}
      >
        <VStack color={'purple.500'} h={'100vh'} justifyContent={'center'}>
          <AiOutlineCloudUpload size={'10vmax'} />
          <form>
            <HStack>
              <Input
                type={'file'}
                required
                p={'1'}
              />
              <Button type='submit'>Upload</Button>
            </HStack>

          </form>
        </VStack>
      </Box>
    </>
  )
}

export default Upload
