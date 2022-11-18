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
const Score = ({ selectScore, selectMyScore }: any) => {

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
              [1, 2, 3, 4, 5, 6].map((v) => {
                return (
                  <Tr key={v + v + v + v + v + v}>
                    <Td>
                      <Image src={`/img/${v}.png`} w={'10'} />
                    </Td>
                    <Td>
                      <Input onClick={selectScore} border={'none'} cursor={selectMyScore ? 'pointer' : 'default'} readOnly />
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
                      <Input onClick={selectScore} border={'none'} cursor={selectMyScore ? 'pointer' : 'default'} readOnly />
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

