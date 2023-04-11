import GameComp from "@/components/Game";
import NavBar from "@/components/Games/NavBar";
import HeadComp from "@/components/Head";
import StyledNav from "@/components/styled/StyledNav";
import { useGameContext } from "@/contexts/GameContext";
import UserContext, { useUserContext } from "@/contexts/UserContext";
import useGetGames from "@/hooks/api/game/useGetGames";
import useLogin from "@/hooks/api/user/useLogin";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import StyledButton from "@/components/styled/StyledButton";

export default function Games() {
  const [games, setGames] = useState();
  const { gamesData } = useGetGames();
  const { setPage } = useContext(UserContext);
  const { setDtGame } = useGameContext();
  const router = useRouter();
  useEffect(() => {
    setGames(gamesData?.data);
    setDtGame(gamesData?.data);
    setPage("Games");
  }, [gamesData]);
  console.log(gamesData?.data);
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      {!games ? (
        <GameMain>
          <H1loading>Loading...</H1loading>
        </GameMain>
      ) : (
        <GameMain>
          <NavBar />
          <FillterForm>
            <RadioFormDiv>
              <div>
                <input value={"FPS"} type={"radio"} name="genre" />
                <label>FPS</label>
              </div>
              <div>
                <input value={"MOBA"} type={"radio"} name="genre" />
                <label>MOBA</label>
              </div>
              <div>
                <input value={"Survival"} type={"radio"} name="genre" />
                <label>Survival</label>
              </div>
            </RadioFormDiv>
            <RadioFormDiv>
              <div>
                <input value={"Pc"} type={"radio"} name="platform" />
                <label>Pc</label>
              </div>
              <div>
                <input value={"PS"} type={"radio"} name="platform" />
                <label>PS</label>
              </div>
              <div>
                <input value={"XBOX"} type={"radio"} name="platform" />
                <label>XBOX</label>
              </div>
              <div>
                <input value={"Nintendo"} type={"radio"} name="platform" />
                <label>Nintendo</label>
              </div>
            </RadioFormDiv>

            <StyledButton number={30}wi={50}><span>Fillter</span></StyledButton>
          </FillterForm>
          <ListGames>
            {games?.map((item, id) => (
              <GameComp key={item.id} data={item} id={item.id} />
            ))}
          </ListGames>
        </GameMain>
      )}
    </>
  );
}
const GameMain = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
  width: 98%;
  margin: 10px;
  margin-left: 13px;
  background-color: rgb(5, 6, 45);
  color: white;
  padding-top:100px;
`;
const ListGames = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  gap: 40px;

  figure {
    cursor: pointer;
  }

  figure {
    width: 140px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(85, 85, 95);

    border-radius: 3px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 129px;
    height: 193px;
  }
`;
const H1loading = styled.h1`
  color: rgb(252, 165, 14);
  font-size: 100px;
`;
const animation = keyframes`
 0% {
        outline-offset: 0;
    }

    100% {
        outline-offset: -0.2rem;
    }
`;
const RadioFormDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: dashed;
  border-color: purple;
  margin-bottom: 8px;
  color: orange;
  input{
    outline: 1px solid ;
    border-radius: 50%;
    :checked {
      accent-color: #ff5722 ;
    background-color: green;
    }
    :hover {
    outline-color: green;
}
    animation-name:${animation} ;
    animation-duration: 0.2s;
    animation-iteration-count: 4;
    animation-direction: alternate;
    animation-timing-function: linear;
  }
`;
const FillterForm = styled.form`
  margin-bottom:60px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;
