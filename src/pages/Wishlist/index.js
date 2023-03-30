import GameComp from "@/components/Game";
import HeadComp from "@/components/Head";
import NavBar from "@/components/Wishlist/NavBar";
import { useGameContext } from "@/contexts/GameContext";
import UserContext from "@/contexts/UserContext";
import useGetGames from "@/hooks/api/useGetGames";
import useGetWish from "@/hooks/api/useGetWish";
import useToken from "@/hooks/useToken";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function Wishlist() {
    const token = useToken()
    const {setPage} = useContext(UserContext)
    const [games,setGames] = useState();
    const {wishData} = useGetWish(token);
    const router = useRouter()
    useEffect(()=>{
      setGames(wishData?.data)
      setPage('Wishlist')
    },[wishData])
    console.log(wishData?.data)
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>

      <WishMain>
        <TitleDiv>
        <h1>My Wishlist</h1>
        <StyledLogo src="/dragonball.png"/>
        </TitleDiv>
        
        <NavBar/>
        <ListGames>
            {games?.map((item,id)=><GameComp key={item.id}data={item.game} id={id}/>)}
        </ListGames>
      </WishMain>
    </>
  );
}
const WishMain = styled.main`

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
    h1{
        font-size: 90px;
        color: orange;
    }
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
const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
`
const TitleDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
