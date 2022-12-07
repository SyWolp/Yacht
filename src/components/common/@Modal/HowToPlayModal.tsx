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
  Box,
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

  const len = DATA_SLIDER.length

  const moveDot = (index: React.SetStateAction<number>) => {
    setSlideIndex(index)
  }

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
          <ModalHeader>How to play?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={'100%'}>
              {DATA_SLIDER.map(({ id, Img }) => {
                return (
                  <Flex
                    key={id}
                    display={slideIndex === id ? '' : 'none'}
                    overflow={'hidden'}
                    w={'100%'}
                  >
                    <img src={Img} alt={'슬라이더'} />
                  </Flex>
                )
              })}
              {console.log(slideIndex)}
            </Box>
          </ModalBody>
          <ModalFooter
            w={'97%'}
            top={'50%'}
            position={'absolute'}
            right={'20px'}
          >
            <Flex w={'100%'} h={'50%'} justifyContent={'space-between'}>
              {SLIDER_BTN.map((item, index) => (
                <Button
                  w={'100%'}
                  onClick={() => moveDot(item.id)}
                  width={'45px'}
                  float={'left'}
                  border-radius={'100px'}
                >
                  <img src={item.Image} alt={'왜 안뜸'} />
                </Button>
              ))}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default HowToPlayModal

const DATA_SLIDER = [
  {
    id: 1,
    Img: '/img/howtoplay1.png',
  },
  {
    id: 2,
    Img: '/img/howtoplay2.png',
  },
  {
    id: 3,
    text: '세번째 슬라이드',
  },
]

const SLIDER_BTN = [
  {
    id: 1,
    Image: '/img/arrow_left_g.png',
  },
  {
    id: 2,
    Image: '/img/arrow_right_g.png',
  },
]
