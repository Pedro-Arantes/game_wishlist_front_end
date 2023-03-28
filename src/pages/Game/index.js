import GameComp from "@/components/Game";
import HeadComp from "@/components/Head";
import StyledNav from "@/components/styled/StyledNav";
import { useGameContext } from "@/contexts/GameContext";
import { useUserContext } from "@/contexts/UserContext";
import useGetGames from "@/hooks/api/useGetGames";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Games() {
  const { token } = useUserContext();
    const { DtGame } = useGameContext();
    const router = useRouter()
    const {num} = router.query;
    const game = DtGame[num];
    console.log(game)
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
        <GameMain>
            <GameDataStyle>
            <GameDiv>
                <img src={game.image}/>
            </GameDiv>
            <p>Name: {game.name}</p>
            <p>Genre: {game.genre}</p>
            <p>Platform: {game.platform}</p>
            <p>Grade: {game.grade}</p>
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
    width: 95%;
    margin: 10px;
    margin-left: 13px;
    background-color: rgb(5, 6, 45);
    color: white;
`
const GameDiv = styled.div`
display: flex;
gap: 9px;
flex-direction: column;
align-items: start;
justify-content: center;
padding: 10px;
background: linear-gradient(70deg,#40e0d0,#800080);
width: 10%;
min-width: fit-content;
height: max-content;
border-radius: 5px;
color: black;

img{
    width: 500px;
    height: 500px;
}
`  
const GameDataStyle = styled.div`
display: flex;
gap:50px;

`
