import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Button from "../Button"

const MainGameBoard = ({ playBtn, showDice, keepBtn, keepDice, removeKeep, player, endTurn, countPlay, selectMyScore, resultDice, nowPlayer }: any) => {
  return (
    <Box width={'xl'} bg={'green.500'}>
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
        {nowPlayer ? '1' : '2'} Player Turn
      </Text>
      <Text
        margin={'auto'}
        textAlign={'center'}
        borderRadius={'13px'}
        color={'black.100'}
        textStyle={'btnSm'}
        fontWeight={'extrabold'}
        fontSize={'2xl'}
        my={'0'}
      >
        {countPlay} / 3
      </Text>
      {!selectMyScore ?
        <>
          <Flex justifyContent={'space-around'}>
            <Button
              bg={'yellow.400'}
              width={'30%'}
              h={'16'}
              borderRadius={'xl'}
              text="RUN"
              onClick={playBtn}
            />
            {
              countPlay > 0 ?
                <Button
                  bg={'red.400'}
                  width={'30%'}
                  h={'16'}
                  borderRadius={'xl'}
                  text="END"
                  onClick={endTurn}
                />
                :
                null
            }

          </Flex>
          <Box>
            {
              showDice.length && showDice.reduce((a: number, b: number) => a + b) !== 0 ?
                <Flex my={'20'} w={'100%'} h={'24'} justifyContent={'space-around'}>
                  {showDice.sort((a: number, b: number) => a - b).map((v: number, i: number) => {
                    return <Image cursor={'pointer'} key={v + Math.random()} onClick={() => keepBtn(i)} w={'20'} src={`img/${v}.png`} />
                  })}
                </Flex>
                : <Box my={'20'} h={'24'}></Box>
            }
            {
              keepDice.length && keepDice.reduce((a: number, b: number) => a + b) !== 0 ?
              <Flex w={'100%'} h={'24'} justifyContent={'space-around'}>
              {keepDice.sort((a:number,b:number) => a-b).map((v: number, i: number) => {
                return <Image cursor={'pointer'} key={v + Math.random()} onClick={() => removeKeep(i)} w={'20'} src={`img/${v}.png`} />
              })}
            </Flex> : <Box h={'24'}></Box>
            }

          </Box>
        </>
        :
        <Flex w={'100%'} h={'24'} justifyContent={'center'}>
          {resultDice.sort((a:number,b:number) => a-b).map((v: number, i: number) => {
            return <Image key={v + Math.random()} onClick={() => keepBtn(i)} w={'20'} src={`img/${v}.png`} />
          })}
        </Flex>
      }
    </Box>
  )
}

export default MainGameBoard