import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Button from '../../common/Button'
import HowToPlayModal from '../../common/@Modal/HowToPlayModal'
const HomePageBox = () => {
  // if(typeof window === 'undefined') return;
  return (
    <Flex height={'2xl'} flexDirection={'column'}>
      <Box margin={'auto'} boxSize={'32'} bg={'red.200'}>
        <Image src="/img/dice.png" />
      </Box>
      <Text
        margin={'auto'}
        textAlign={'center'}
        borderRadius={'13px'}
        color={'black.100'}
        textStyle={'btnSm'}
        fontWeight={'extrabold'}
        fontSize={'5xl'}
        my={'0'}
      >
        YACHT !
      </Text>
      <Box width={'28'} height={'0'} margin={'auto'}>
        <NextLink href={'/game'}>
          {/* <Link> */}
          <Button
            w={'100px'}
            h={'50px'}
            px={'8px'}
            bgColor={'yellow.400'}
            borderRadius={'13px'}
            color={'black.100'}
            textStyle={'btnSm'}
            fontWeight={'extrabold'}
            text={'Start'}
            margin={'auto'}
            cursor={'pointer'}
            textDecoration={'none'}
          />
          {/* </Link> */}
        </NextLink>
      </Box>
      <Box>
        <HowToPlayModal />
      </Box>
    </Flex>
  )
}

export default HomePageBox
