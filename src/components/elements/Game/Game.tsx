import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameBoard from "../../common/GameBoard";
import Score from "../../common/ScoreBox";

const Game = () => {
  const [myDice, setMyDice] = useState<any[]>([0,0,0,0,0]);
  const [keepDice, setKeepDice] = useState<any[]>([]);
  const [playerTurn, setPlayTurn] = useState(true);
  const [countPlay, setCountPlay] = useState(0);
  const [resultDice, setResultDice] = useState<any[]>([]);
  const [selectMyScore, setSelectMyScore] = useState(false);
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
    setCountPlay(1);
    setMyDice([0,0,0,0,0])
    setKeepDice([0,0,0,0,0])
    setSelectMyScore(false);
  }

  const endTurn = () => {
    setSelectMyScore(true);
  }

  const inputScore = () => {

  }

  useEffect(() => {
    if(countPlay === 3) {
      setResultDice([...myDice, ...keepDice])
      setSelectMyScore(true);
    }
  },[countPlay])

  console.log(keepDice)
  return (
    <Flex h={'9xl'} justifyContent={'space-around'}>
      <Score selectScore={selectScore} selectMyScore={selectMyScore} />
      <GameBoard playBtn={playRun} showDice={myDice} keepBtn={keepBtn} keepDice={keepDice} removeKeep={removeKeepBtn} player={playerTurn} endTurn={endTurn} countPlay={countPlay} selectMyScore={selectMyScore} resultDice={resultDice}/>
      <Score selectScore={selectScore} selectMyScore={selectMyScore} />
    </Flex>
  )
}

export default Game;