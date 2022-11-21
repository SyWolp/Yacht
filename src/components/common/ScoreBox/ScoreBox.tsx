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
  Image
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
const Score = ({ selectScore, selectMyScore, player, playerTurn, nowPlayer, resultDice, playerScore, reusltSum }: any) => {

  const [playNumber, setPlayNumber] = useState(1);

  useEffect(() => {
    console.log(playerScore)
    console.log(playerTurn)
    console.log(reusltSum)
  },[playerTurn])

  useEffect(() => {
    setPlayNumber(nowPlayer ? 1 : 2);
  },[nowPlayer])

  return (
    <Box width={'lg'} h={'full'}>
      <TableContainer h={'full'}>
        <Table variant='striped'>
          <TableCaption>0/36  YOUR SCORE +30</TableCaption>
          <Thead>
            <Tr>
              <Th>DICE</Th>
              <Th textAlign={'center'}>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              ['one', 'two', 'three', 'four', 'five', 'six'].map((v,i) => {
                console.log(playerScore?.top?.[v])
                return (
                  <Tr key={v + v + v + v + v + v}>
                    <Td>
                      <Image src={`/img/${i+1}.png`} w={'10'} />
                    </Td>
                    <Td>
                      <Input 
                        onClick={() => playerTurn && playNumber === player ? selectScore() : null} 
                        value={selectMyScore && playNumber === player ?  playerScore?.top?.[v] ? playerScore?.top?.[v] : reusltSum.top?.[v] : playerScore?.top?.[v] !== undefined ? playerScore?.top?.[v] : ''}
                        cursor={selectMyScore && playNumber === player ? 'pointer' : 'default'} 
                        readOnly
                        border={'none'} 
                        textAlign={'center'}
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
                        onClick={() => playerTurn && playNumber === player ? selectScore() : null} 
                        border={'none'} 
                        value={selectMyScore && playNumber === player ?  playerScore?.bottom?.[v] ? playerScore?.bottom?.[v] : reusltSum.bottom?.[v] : playerScore?.bottom?.[v] !== undefined ? playerScore?.bottom?.[v] : ''}
                        cursor={selectMyScore && playNumber === player ? 'pointer' : 'default'}
                        readOnly 
                        textAlign={'center'}
                        visibility={playNumber === player ? 'visible' : 'hidden'}
                        />
                    </Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Score;

