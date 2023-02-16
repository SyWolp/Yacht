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
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
const Score = ({
  selectScore,
  selectMyScore,
  player,
  playerTurn,
  nowPlayer,
  resultDice,
  playerScore,
  reusltSum,
}: any) => {
  const [playNumber, setPlayNumber] = useState(1);
  const [scoreValue, setScoreValue] = useState<any>({
    topValue: 0,
    bottomValue: 0,
    totalValue: 0,
  });
  useEffect(() => {
    setPlayNumber(nowPlayer ? 1 : 2);
  }, [nowPlayer]);
  useEffect(() => {
    if (Object.values(playerScore.top)) {
      const top: any = Object.values(playerScore.top).length
        ? Object.values(playerScore.top).reduce(
            (a: any, b: any) => parseInt(a) + parseInt(b),
          )
        : 0;
      const bottom: any = Object.values(playerScore.bottom).length
        ? Object.values(playerScore.bottom).reduce(
            (a: any, b: any) => parseInt(a) + parseInt(b),
          )
        : 0;
      setScoreValue({
        topValue: top,
        bottomValue: bottom,
        totalValue:
          parseInt(top) >= 63
            ? 63 + parseInt(top) + parseInt(bottom)
            : parseInt(top) + parseInt(bottom),
      });
    }
  }, [playerScore]);

  return (
    <Box width={'max-content'} height={'min-content'}>
      <Flex flexDir={'column'}>
        <Flex flexDir={'column'} border={'1px'}>
          {['one', 'two', 'three', 'four', 'five', 'six'].map((v, i) => {
            return (
              <Flex
                // border={'1px'}
                height={{ sm: '50px', md: '58px' }}
                borderBottom={i !== 5 ? '1px' : 'none'}
                backgroundColor={i % 2 === 0 ? 'green.200' : 'none'}
                w={'100%'}
                key={v + i}
                // ml={5}
                pl={'5'}
                justify={'space-between'}
                mr={12}
              >
                <Box my={'3'}>
                  <Image src={`/img/${i + 1}.png`} w={10} />
                </Box>
                <Flex>
                  <Input
                    my={3}
                    onClick={(e) =>
                      playerTurn &&
                      playNumber === player &&
                      !playerScore?.top?.[v]
                        ? selectScore(e, v, nowPlayer, 'top')
                        : null
                    }
                    value={
                      selectMyScore && playNumber === player
                        ? playerScore?.top?.[v]
                          ? playerScore?.top?.[v]
                          : reusltSum.top?.[v]
                        : playerScore?.top?.[v] !== undefined
                        ? playerScore?.top?.[v]
                        : ''
                    }
                    cursor={
                      selectMyScore &&
                      playNumber === player &&
                      !playerScore?.top?.[v]
                        ? 'pointer'
                        : 'default'
                    }
                    readOnly
                    border={'none'}
                    textAlign={'center'}
                    color={playerScore?.top?.[v] ? 'black' : 'red.500'}
                    // visibility={playNumber === player ? 'visible' : 'hidden'}
                  />
                </Flex>
              </Flex>
            );
          })}
          <Flex align={'center'} w={'100%'} borderTop={'1px'}>
            <Text textAlign={'center'} w={'50%'}>
              {scoreValue.topValue}/63 YOUR SCORE +30
            </Text>
            <Flex align={'center'} m={5} w={'50%'}>
              <Text w={'200px'}>TOTAL SCORE</Text>
              <Input
                p={0}
                m={0}
                border={'none'}
                readOnly
                value={!scoreValue.totalValue ? '' : scoreValue.totalValue}
                textAlign={'center'}
                cursor={'default'}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={'column'}>
        <Flex w={'100%'} flexDirection={'row'} justify={'space-between'}></Flex>
        <Flex flexDir={'column'} border={'1px'}>
          {[
            'Four of a Kind',
            'Full House',
            'Little Straight',
            'Big Straight',
            'Yacht',
            'Choice',
          ].map((v, i) => {
            return (
              <Flex
                // border={'1px'}
                height={{ sm: '50px', md: '58px' }}
                borderBottom={i !== 5 ? '1px' : 'none'}
                backgroundColor={i % 2 === 0 ? 'green.200' : 'none'}
                w={'100%'}
                key={v + i}
                // ml={5}
                pl={'5'}
                justify={'space-between'}
                mr={12}
              >
                <Text fontSize={1} mt={'4'}>
                  {v}
                </Text>
                <Flex>
                  <Input
                    my={3}
                    onClick={(e) =>
                      playerTurn &&
                      playNumber === player &&
                      !playerScore?.bottom?.[v]
                        ? selectScore(e, v, nowPlayer, 'bottom')
                        : null
                    }
                    border={'none'}
                    value={
                      selectMyScore && playNumber === player
                        ? playerScore?.bottom?.[v]
                          ? playerScore?.bottom?.[v]
                          : reusltSum.bottom?.[v]
                        : playerScore?.bottom?.[v] !== undefined
                        ? playerScore?.bottom?.[v]
                        : ''
                    }
                    cursor={
                      selectMyScore && playNumber === player
                        ? 'pointer'
                        : 'default'
                    }
                    readOnly
                    textAlign={'center'}
                    // visibility={playNumber === player ? 'visible' : 'hidden'}
                    color={playerScore?.bottom?.[v] ? 'black' : 'red.500'}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Score;
