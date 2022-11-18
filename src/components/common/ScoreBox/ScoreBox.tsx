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
const Score = ({ selectScore, selectMyScore, player, playerTurn, nowPlayer, resultDice, playerScore }: any) => {

  const [playNumber, setPlayNumber] = useState(1);

  useEffect(() => {
    console.log(playerScore)
  },[])

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
                console.log(playerScore[0].top)
                return (
                  <Tr key={v + v + v + v + v + v}>
                    <Td>
                      <Image src={`/img/${i+1}.png`} w={'10'} />
                    </Td>
                    <Td>
                      <Input 
                        onClick={() => playerTurn && playNumber === player ? selectScore() : null} 
                        cursor={selectMyScore && playNumber === player ? 'pointer' : 'default'} 
                        readOnly
                        value={player === 1 ? playerScore[0].top[v] : playerScore[1].top[v]}
                        border={'none'} 
                        textAlign={'center'}
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
                        cursor={selectMyScore && playNumber === player ? 'pointer' : 'default'}
                        readOnly 
                        value={player === 1 ? playerScore[0].bottom[v] : playerScore[1].bottom[v]}
                        textAlign={'center'}
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

