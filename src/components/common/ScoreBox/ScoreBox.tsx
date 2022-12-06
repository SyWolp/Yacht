import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Input,
  Image,
  Text,
  Flex
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
const Score = ({ selectScore, selectMyScore, player, playerTurn, nowPlayer, resultDice, playerScore, reusltSum }: any) => {
  const [playNumber, setPlayNumber] = useState(1);
  const [scoreValue, setScoreValue] = useState<any>({
    topValue: 0,
    bottomValue: 0,
    totalValue: 0,
  });
  useEffect(() => {
    setPlayNumber(nowPlayer ? 1 : 2);
  },[nowPlayer])
  useEffect(() => {
    if(Object.values(playerScore.top)) {
      const top:any = Object.values(playerScore.top).length ? Object.values(playerScore.top).reduce((a:any,b:any) => parseInt(a)+parseInt(b)) : 0;
      const bottom:any = Object.values(playerScore.bottom).length ? Object.values(playerScore.bottom).reduce((a:any,b:any) => parseInt(a)+parseInt(b)) : 0
      setScoreValue({
        topValue: top,
        bottomValue: bottom,
        totalValue:  parseInt(top) >= 36 ? 30 + parseInt(top) + parseInt(bottom) : parseInt(top) + parseInt(bottom) ,
      });
    }
  },[playerScore])


  return (
    <Box width={'lg'} h={'full'}>
      <TableContainer h={'full'}>
        <Table variant='striped'>
          <TableCaption>{scoreValue.topValue}/36  YOUR SCORE +30</TableCaption>
          <Thead>
            <Tr>
              <Th>DICE</Th>
              <Th textAlign={'center'}>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              ['one', 'two', 'three', 'four', 'five', 'six'].map((v,i) => {
                return (
                  <Tr key={v + v + v + v + v + v}>
                    <Td>
                      <Image src={`/img/${i+1}.png`} w={'10'} />
                    </Td>
                    <Td>
                      <Input 
                        onClick={(e) => playerTurn && playNumber === player && !playerScore?.top?.[v] ? selectScore(e, v, nowPlayer, 'top') : null} 
                        value={selectMyScore && playNumber === player ?  playerScore?.top?.[v] ? playerScore?.top?.[v] : reusltSum.top?.[v] : playerScore?.top?.[v] !== undefined ? playerScore?.top?.[v] : ''}
                        cursor={selectMyScore && playNumber === player && !playerScore?.top?.[v] ? 'pointer' : 'default'} 
                        readOnly
                        border={'none'} 
                        textAlign={'center'}
                        color={playerScore?.top?.[v] ? 'black' : 'red.500'}
                        // visibility={playNumber === player ? 'visible' : 'hidden'}
                      />
                    </Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>BONUS</Th>
              <Th textAlign={'center'}>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              ['Four of a Kind', 'Full House', 'Little Straight', 'Big Straight', 'Yacht', 'Choice'].map((v) => {
                return (
                  <Tr key={v}>
                    <Td>
                      {v}
                    </Td>
                    <Td>
                      <Input 
                        onClick={(e) => playerTurn && playNumber === player && !playerScore?.bottom?.[v] ? selectScore(e, v, nowPlayer, 'bottom') : null} 
                        border={'none'} 
                        value={selectMyScore && playNumber === player ?  playerScore?.bottom?.[v] ? playerScore?.bottom?.[v] : reusltSum.bottom?.[v] : playerScore?.bottom?.[v] !== undefined ? playerScore?.bottom?.[v] : ''}
                        cursor={selectMyScore && playNumber === player ? 'pointer' : 'default'}
                        readOnly 
                        textAlign={'center'}
                        // visibility={playNumber === player ? 'visible' : 'hidden'}
                        color={playerScore?.bottom?.[v] ? 'black' : 'red.500'}
                        />
                    </Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
      <Flex m={'10'}>
        <Text py={1.5}>
          RESULT
        </Text>
        <Input
          p={0}
          m={0}
          border={'none'}
          readOnly
          value={scoreValue.totalValue}
          textAlign={'center'}
          cursor={'default'}
        />
      </Flex>
    </Box>
  )
}

export default Score;

