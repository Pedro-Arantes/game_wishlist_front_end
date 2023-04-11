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
import useGameFillter from "@/hooks/api/game/useGameFillter";

export default function Games() {
  const [games, setGames] = useState();
  const [platform, setPlatform] = useState();
  const [genre, setGenre] = useState();
  const { gamesData, getGames } = useGetGames();
  const { setPage } = useContext(UserContext);
  const { setDtGame } = useGameContext();
  const { gameFillter } = useGameFillter();
  const router = useRouter();
  useEffect(() => {
    setGames(gamesData?.data);
    setDtGame(gamesData?.data);
    setPage("Games");
  }, [gamesData]);
  const fillter = async (e) => {
    e.preventDefault();
    try {
      const resp = await gameFillter(platform, genre);
      console.log(resp.data);
      setGames(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const reset = async ()=>{
    try {
      const resp = await getGames();
      setGames(resp.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(games);
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
          <NavBar setGames={setGames} />
          <FillterForm onSubmit={fillter}>
            <RadioFormDiv>
              <div>
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={"FPS"}
                  type={"radio"}
                  name="genre"
                />
                <label>FPS</label>
              </div>
              <div>
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={"MOBA"}
                  type={"radio"}
                  name="genre"
                />
                <label>MOBA</label>
              </div>
              <div>
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={"Survival"}
                  type={"radio"}
                  name="genre"
                />
                <label>Survival</label>
              </div>
              <div>
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={"Sandbox"}
                  type={"radio"}
                  name="genre"
                />
                <label>Sandbox</label>
              </div>
              <div>
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={"Luta"}
                  type={"radio"}
                  name="genre"
                />
                <label>Luta</label>
              </div>
              <div>
                <input
                  onChange={(e) => setGenre(e.target.value)}
                  value={"Roquelike"}
                  type={"radio"}
                  name="genre"
                />
                <label>Roquelike</label>
              </div>
            </RadioFormDiv>
            <RadioFormDiv>
              <div>
                <input
                  onChange={(e) => setPlatform(e.target.value)}
                  value={"Pc"}
                  type={"radio"}
                  name="platform"
                />
                <label>Pc</label>
              </div>
              <div>
                <input
                  onChange={(e) => setPlatform(e.target.value)}
                  value={"PS"}
                  type={"radio"}
                  name="platform"
                />
                <label>PS</label>
              </div>
              <div>
                <input
                  onChange={(e) => setPlatform(e.target.value)}
                  value={"XBOX"}
                  type={"radio"}
                  name="platform"
                />
                <label>XBOX</label>
              </div>
              <div>
                <input
                  onChange={(e) => setPlatform(e.target.value)}
                  value={"Nintendo"}
                  type={"radio"}
                  name="platform"
                />
                <label>Nintendo</label>
              </div>
            </RadioFormDiv>
            <FillterButtonsDiv>
              <StyledButton number={30} wi={50}>
                <span>Fillter</span>
              </StyledButton>
              <StyledButton type="button" onClick={reset} number={30} wi={50}>
                <span>Clear</span>
              </StyledButton>
            </FillterButtonsDiv>
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
  padding-top: 100px;
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
  input {
    outline: 1px solid;
    border-radius: 50%;
    :checked {
      accent-color: #ff5722;
      background-color: green;
    }
    :hover {
      outline-color: green;
    }
    animation-name: ${animation};
    animation-duration: 0.2s;
    animation-iteration-count: 4;
    animation-direction: alternate;
    animation-timing-function: linear;
  }
`;
const FillterForm = styled.form`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 const FillterButtonsDiv = styled.div`
 display: flex;
 gap: 10px;
 height: 80px;
 `