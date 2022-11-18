import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameBoard from "../../common/GameBoard";
import Score from "../../common/ScoreBox";

interface ScoreType {
  top : {
    one: number | undefined
    two: number | undefined
    three: number | undefined
    four: number | undefined
    five: number | undefined
    six: number | undefined
  },
  bottom : {
    'Four of a Kind': number | undefined
    'Full House': number | undefined
    'Little Straight': number | undefined
    'Big Straight': number | undefined
    'Yacht': number | undefined
    'Choice': number | undefined
  }
}

const Game = () => {
  const [myDice, setMyDice] = useState<any[]>([0,0,0,0,0]);
  const [keepDice, setKeepDice] = useState<any[]>([]);
  const [playerTurn, setPlayTurn] = useState(false);
  const [countPlay, setCountPlay] = useState(0);
  const [resultDice, setResultDice] = useState<any[]>([]);
  const [selectMyScore, setSelectMyScore] = useState(false);
  const [nowPlayer, setNowPlayer] = useState(true);
  const [playerScore, setPlayerScore] = useState<ScoreType[]>([
    {
      top: {
        one: undefined,
        two: undefined,
        three: undefined,
        four: undefined,
        five: undefined,
        six: undefined,
      },
      bottom: {
        'Four of a Kind': undefined,
        'Full House': undefined,
        'Little Straight': undefined,
        'Big Straight': undefined,
        'Yacht': undefined,
        'Choice': undefined,
      }
    },
    {
      top: {
        one: undefined,
        two: undefined,
        three: undefined,
        four: undefined,
        five: undefined,
        six: undefined,
      },
      bottom: {
        'Four of a Kind': undefined,
        'Full House': undefined,
        'Little Straight': undefined,
        'Big Straight': undefined,
        'Yacht': undefined,
        'Choice': undefined,
      }
    }
  ]);
  const playRun = () => {
    const arrLength = Array.from({length:myDice.length}, (_,x) => Math.floor( ( Math.random() * (7 - 1) + 1 ) ));
    setMyDice(arrLength);
    setCountPlay(countPlay + 1);
  }

  const keepBtn = (number:any) => {
    setKeepDice((v) => [...v, ...myDice.splice(number,1)])
  }

  const removeKeepBtn = (number:number) => {
    setMyDice((v) => [...v, ...keepDice.splice(number,1)])
  }

  const selectScore = () => {
    setPlayTurn(!playerTurn)
    setCountPlay(0);
    setMyDice([0,0,0,0,0])
    setKeepDice([])
    setResultDice([]);
    setNowPlayer(!nowPlayer)
    setSelectMyScore(false);
  }

  const endTurn = () => {
    const result = [...myDice, ...keepDice];
    console.log();
    setPlayerScore([
      {...playerScore[0], 'bottom': {...playerScore[0].bottom, 'Choice': result.reduce((a,b) => a+b)}},
      {...playerScore[1]}
    ])

    setPlayTurn(!playerTurn)
    setResultDice([...myDice, ...keepDice])
    setMyDice([0,0,0,0,0])
    setKeepDice([0,0,0,0,0])
    setSelectMyScore(true);
  }

  

  const inputScore = () => {

  }

  useEffect(() => {
    if(countPlay === 3) {
      setResultDice([...myDice, ...keepDice])
      setPlayTurn(!playerTurn)
      setSelectMyScore(true);
    }
  },[countPlay])

  console.log(keepDice)
  return (
    <Flex h={'9xl'} justifyContent={'space-around'}>
      <Score selectScore={selectScore} selectMyScore={selectMyScore} player={1} playerTurn={playerTurn} nowPlayer={nowPlayer} resultDice={resultDice} playerScore={playerScore} />
      <GameBoard playBtn={playRun} showDice={myDice} keepBtn={keepBtn} keepDice={keepDice} removeKeep={removeKeepBtn} player={playerTurn} endTurn={endTurn} countPlay={countPlay} selectMyScore={selectMyScore} resultDice={resultDice} nowPlayer={nowPlayer}/>
      <Score selectScore={selectScore} selectMyScore={selectMyScore} player={2} playerTurn={playerTurn} nowPlayer={nowPlayer} resultDice={resultDice} playerScore={playerScore} />
    </Flex>
  )
}

export default Game;