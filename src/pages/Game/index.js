import GameComp from "@/components/Game";
import HeadComp from "@/components/Head";
import NavBar from "@/components/NavBar";
import StyledNav from "@/components/styled/StyledNav";
import { useGameContext } from "@/contexts/GameContext";
import { useUserContext } from "@/contexts/UserContext";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Games() {
  const { token } = useUserContext();
  const { DtGame } = useGameContext();
  const router = useRouter();
  const { num } = router.query;
  const game = DtGame[num];
  console.log(game);
  const defineGradeColor = () =>{
    const grade = Number(game?.grade)*10
    console.log(grade)
    if (grade >= 75) {
      return "green";
    }else if (grade < 75 && grade >=50){
      return "yellow";
    }else if (grade<50 && grade >20){
      return "orange";
    }else{
      return "red"
    }
  }
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <NavBar />
      <GameMain>
        <GameDataStyle>
          <GameDiv>
            <img src={game?.image} />
          </GameDiv>
          <DataDiv>
            <OneDataDiv>Name: {game?.name}</OneDataDiv>
            <OneDataDiv>Genre: {game?.genre}</OneDataDiv>
            <OneDataDiv>Platform: {game?.platform}</OneDataDiv>
            <OneDataDiv border ={true}>Grade:</OneDataDiv>
            <GradeDiv num={defineGradeColor()}>{game?.grade}</GradeDiv>
          </DataDiv>
        </GameDataStyle>
      </GameMain>
    </>
  );
}
const GameMain = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 50px;
  gap: 20px;
  height: 100vh;
  width: 91%;
  margin: 10px;
  margin-left: 13px;
  margin-top: 79px;
  background-color: rgb(5, 6, 45);
  color: white;
`;
const GameDiv = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10px;
  background: linear-gradient(70deg, #40e0d0, #800080);
  width: 10%;
  min-width: fit-content;
  height: max-content;
  border-radius: 5px;
  color: black;

  img {
    width: 500px;
    height: 500px;
  }
`;
const GameDataStyle = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;
const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;
const OneDataDiv = styled.div`
  border-bottom: 2px;
  border-style: ${props=>props.border? 'none':'solid'};
  border-color: purple;
  width: 90%;
  font-size: 25px;
`;

const GradeDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.num};
border-radius: 80px;
width: 150px;
height: 150px;
font-size: 70px;
font-weight: 800;
color: white;

`
