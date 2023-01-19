import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme='purple'
                onClick={onOpen}
                p={'0'}
                h={'10'}
                w={'10'}
                pos={'fixed'}
                left={'4'}
                top={'4'}
                zIndex={'1'}
            >
                <BiMenuAltLeft />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        VIDEO HUB
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button
                                variant={'ghost'}
                                color={'purple'}
                                onClick={onClose}
                            >
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button
                                variant={'ghost'}
                                color={'purple'}
                                onClick={onClose}
                            >
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button
                                variant={'ghost'}
                                color={'purple'}
                                onClick={onClose}
                            >
                                <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>
                            <Button
                                variant={'ghost'}
                                color={'purple'}
                                onClick={onClose}
                            >
                                <Link to={'/upload'}>Upload Videos</Link>
                            </Button>
                        </VStack>
                    </DrawerBody>

                    <HStack
                        pos={'absolute'}
                        bottom={'10'}
                        left={'0'}
                        w={'full'}
                        justifyContent={'space-evenly'}
                    >
                        <Button onClick={onClose} colorScheme={'purple'}>
                            <Link to={'/login'}>Log In</Link>
                        </Button>
                        <Button
                            onClick={onClose}
                            colorScheme={'purple'}
                            variant={'outline'}
                        >
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
