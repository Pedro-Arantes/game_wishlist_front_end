import GameComp from "@/components/Game";
import NavBar from "@/components/Games/NavBar";
import HeadComp from "@/components/Head";
import StyledNav from "@/components/styled/StyledNav";
import { useGameContext } from "@/contexts/GameContext";
import UserContext, { useUserContext } from "@/contexts/UserContext";
import useGetGames from "@/hooks/api/useGetGames";
import useLogin from "@/hooks/api/useLogin";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import  veno from "../../../public/venonat.png"

export default function Games() {
    const [games,setGames] = useState();
    const {gamesData} = useGetGames();
    const {setPage} = useContext(UserContext)
    const { setDtGame } = useGameContext();
    const router = useRouter()
    useEffect(()=>{
      setGames(gamesData?.data)
      setDtGame(gamesData?.data)
      setPage("Games")
    },[gamesData])
    console.log(gamesData?.data)
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>

      <GameMain>
        <NavBar/>
        <ListGames>
            {games?.map((item,id)=><GameComp key={item.id}data={item} id={item.id}/>)}
        </ListGames>
      </GameMain>
    </>
  );
}
const GameMain = styled.main`

    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    width: 98%;
    margin: 10px;
    margin-left: 13px;
    background-color: rgb(5, 6, 45);
    color: white;
`
const ListGames = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
max-width: 100%;
max-height: 100%;
gap: 40px;

figure{
    cursor: pointer;
}

figure{

    width: 140px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(85,85,95);

    border-radius: 3px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

img{
    width: 129px;
    height: 193px;
}

`
