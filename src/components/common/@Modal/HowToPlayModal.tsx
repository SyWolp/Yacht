import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalOverlay,
  Text,
  Flex,
} from '@chakra-ui/react'

import React, { useState } from 'react'

const HowToPlayModal = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const [slideIndex, setSlideIndex] = useState(1)

  return (
    <>
      <Flex>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
          w={'100px'}
          h={'50px'}
          px={'8px'}
          bgColor={'yellow.400'}
          borderRadius={'13px'}
          color={'black.100'}
          textStyle={'btnSm'}
          fontWeight={'extrabold'}
          margin={'auto'}
          cursor={'pointer'}
          textDecoration={'none'}
        >
          How To Play
        </Button>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent
          mt={'auto'}
          mb={{ base: '0px', md: 'auto' }}
          pt={{ base: '25px', lg: '30px' }}
          px={{ base: '20px', md: '25px', lg: '30px' }}
          pb={{ base: '30px', md: '25px', lg: '30px' }}
          borderTopRadius={'20px'}
          borderBottomRadius={{ base: '0px', md: '20px' }}
          maxW={'auto'}
          w={{ base: '100%', md: '730px', lg: '740px' }}
          h={'800px'}
        >
          <ModalHeader>어캐하누?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>How To Play</Text>
            <Button>ㅁ </Button>
            <Button>ㅁ </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default HowToPlayModal