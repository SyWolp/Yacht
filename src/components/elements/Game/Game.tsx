import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameBoard from "../../common/GameBoard";
import Score from "../../common/ScoreBox";

interface ScoreType {
  top? : {
    one?: number | undefined
    two?: number | undefined
    three?: number | undefined
    four?: number | undefined
    five?: number | undefined
    six?: number | undefined
  },
  bottom? : {
    'Four of a Kind'?: number | undefined
    'Full House'?: number | undefined
    'Little Straight'?: number | undefined
    'Big Straight'?: number | undefined
    'Yacht'?: number | undefined
    'Choice'?: number | undefined
  }
}

interface playScore {
  first?: ScoreType,
  second?: ScoreType
}

const Game = () => {
  const [myDice, setMyDice] = useState<any[]>([0,0,0,0,0]);
  const [keepDice, setKeepDice] = useState<any[]>([]);
  const [playerTurn, setPlayTurn] = useState(false);
  const [countPlay, setCountPlay] = useState(0);
  const [resultDice, setResultDice] = useState<any[]>([]);
  const [reusltSum, setResultSum] = useState<ScoreType>({})
  const [selectMyScore, setSelectMyScore] = useState(false);
  const [nowPlayer, setNowPlayer] = useState(true);
  const [playerScore, setPlayerScore] = useState<playScore>(
    {
      first: {},
      second: {},
    }
  );
 
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

  const sumDice = () => {
    const result = [...resultDice];
    setResultSum({
      top: {
        one: result.filter(v => v === 1).length,
        two: result.filter(v => v === 2).length * 2 ,
        three: result.filter(v => v === 3).length * 3 ,
        four: result.filter(v => v === 4).length * 4 ,
        five: result.filter(v => v === 5).length * 5 ,
        six: result.filter(v => v === 6).length * 6 ,
      },
      bottom: {
        'Four of a Kind': result.filter((v, i, a) => v === a[i+1]).length === 3 ? Array.from({length: 4}, (_,x) => result.filter((v, i, a) => v === a[i+1])[0]).reduce((a,b) => a+b) : 0,
        'Full House': result.filter((v, i, a) => v === a[i+1]).length === 3 ? result.filter((v, i, a) => v === a[i+1]).every((vv,i,a) => vv === a[0]) === false ? result.reduce((a,b) => a + b) : 0 : 0,
        'Little Straight': result.filter((v, i) => result.indexOf(v) === i).sort((a,b)=> b-a).filter((v,i,a) => v - 1 === a[i+1]).filter((vvv,iii,aaa) => vvv - 1 === aaa[iii + 1]).length === 2 ? 15 : result.filter((v, i) => result.indexOf(v) === i).sort((a,b)=> b-a).filter((v,i,a) => v - 1 === a[i+1]).filter((vvv,iii,aaa) => vvv - 1 === aaa[iii + 1]).length === 3 ? 15 : 0,
        'Big Straight': result.sort((a,b) => b-a).filter((v,i,a) => v - 1 === a[i+1]).length === 4 ? 30 : 0,
        'Yacht': result.every(v => v === result[0]) ? 50 : 0,
        'Choice': result.length ? result.reduce((a,b) => a + b) : 0
      }
    })
  }

  const endTurn = () => {
    sumDice();
    setPlayTurn(!playerTurn)
    setResultDice([...myDice, ...keepDice])
    setMyDice([0,0,0,0,0])
    setKeepDice([0,0,0,0,0])
    setSelectMyScore(true);
  }

  const inputValue = () => {
    
  }

  useEffect(() => {
    if(countPlay === 3) {
      setResultDice([...myDice, ...keepDice])
      setPlayTurn(!playerTurn)
      setSelectMyScore(true);
    }
  },[countPlay])

  useEffect(() => {
    sumDice();
  },[selectMyScore, playerTurn, countPlay])


  console.log(reusltSum)
  return (
    <Flex h={'9xl'} justifyContent={'space-around'}>
      <Score selectScore={selectScore} selectMyScore={selectMyScore} player={1} playerTurn={playerTurn} nowPlayer={nowPlayer} resultDice={resultDice} playerScore={playerScore.first} reusltSum={reusltSum} />
      <GameBoard playBtn={playRun} showDice={myDice} keepBtn={keepBtn} keepDice={keepDice} removeKeep={removeKeepBtn} player={playerTurn} endTurn={endTurn} countPlay={countPlay} selectMyScore={selectMyScore} resultDice={resultDice} nowPlayer={nowPlayer}/>
      <Score selectScore={selectScore} selectMyScore={selectMyScore} player={2} playerTurn={playerTurn} nowPlayer={nowPlayer} resultDice={resultDice} playerScore={playerScore.second} reusltSum={reusltSum} />
    </Flex>
  )
}

export default Game;