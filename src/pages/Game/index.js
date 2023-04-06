import outStar from "../../../public/staroutline.png";
import fillStar from "../../../public/starfilled.png";
import HeadComp from "@/components/Head";
import NavBar from "@/components/NavBar";
import { useGameContext } from "@/contexts/GameContext";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import StyledButton from "@/components/styled/StyledButton";
import useAvgGrade from "@/hooks/api/grade/useAvgGrade";
import useGiveGrade from "@/hooks/api/grade/useGiveGrade";
import UserContext from "@/contexts/UserContext";
import useGetWishByGameId from "@/hooks/api/wish/useGetWishByGameId";
import useGameById from "@/hooks/api/game/useGameById";
import useCreateWish from "@/hooks/api/wish/useCreateWish";
import useDelWish from "@/hooks/api/wish/useDelWish";
import useToken from "@/hooks/useToken";

export default function Game() {
  const { DtGame } = useGameContext();
  const [clicked, setClicked] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [range, setRange] = useState(0);
  const [route, setRoute] = useState();
  const router = useRouter();
  const { num } = router.query;
  const { gameData, gameBy } = useGameById(num);
  let { gradesData, avgGrades } = useAvgGrade();
  const { page } = useContext(UserContext);
  const { grades } = useGiveGrade();
  const { wishCreate } = useCreateWish();
  const { wishDel } = useDelWish();
  const game = gameData?.data;
  const token = useToken();
  let { wishData, wish } = useGetWishByGameId();
  useEffect(() => {
    async function request() {
      try {
        if (game) {
          gradesData = await avgGrades(game?.id);
          if (token) {
            wishData = await wish(game?.id);
            if (wishData?.data !== undefined && wishData?.data !== "") {
              setClicked(true);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    request();
  }, [refresh, gameData]);

  const defineGradeColor = (num) => {
    let grade;
    if (num || num === 0) {
      grade = Number(num) * 10;
    } else {
      grade = Number(gradesData?.data.grade) * 10;
      console.log(grade);
    }
    if (grade >= 75) {
      return "green";
    } else if (grade < 75 && grade >= 50) {
      return "yellow";
    } else if (grade < 50 && grade > 20) {
      return "orange";
    } else if (grade === NaN || !grade) {
      return "grey";
    } else {
      return "red";
    }
  };
  useEffect(() => {
    if (page !== "") {
      setRoute(page);
    }
  }, [page]);
  const submit = async (e) => {
    e.preventDefault();
    try {
      const grade = Number(range);
      const gameId = game?.id;
      console.log(game?.id, grade);
      const response = await grades(gameId, grade);
      alert("Nota dada com Sucesso!");
      setRefresh(!refresh);
    } catch (error) {
      alert("Erro!");
      console.log(error);
    }
  };
  const giveWish = async () => {
    try {
      if (clicked) {
        setClicked(false);
        console.log(wishData.data.id);
        const resp = await wishDel(wishData.data.id);
      } else {
        const resp = await wishCreate(game?.id);
        setClicked(true);
      }
    } catch (error) {
      alert("Erro!");
      setClicked(!clicked);
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <NavBar route={route} />
      <GameMain>
        <GameDataStyle>
          <GameDiv>
            <img alt="" src={game?.image} />
          </GameDiv>
          <DataDiv>
            <OneDataDiv>Name: {game?.name}</OneDataDiv>
            <OneDataDiv>Genre: {game?.genre}</OneDataDiv>
            <OneDataDiv>Platform: {game?.platform}</OneDataDiv>
            <OneDataDiv border={true}>Grade:</OneDataDiv>
            <GradeWishDiv>
              <GradeDiv num={defineGradeColor()}>
                {!gradesData?.data.grade ? "TBD" : gradesData?.data.grade}
              </GradeDiv>
              <Image
                alt=""
                onClick={giveWish}
                src={clicked ? fillStar : outStar}
                width={50}
                height={50}
              />
            </GradeWishDiv>
            <OneDataDiv>Your Grade</OneDataDiv>
            <RangeForm onSubmit={submit}>
              <input
                type="number"
                min={0}
                max="10"
                step="0.5"
                value={range}
                onChange={(e) => setRange(e.target.value)}
              ></input>

              <GradeDiv num={defineGradeColor(range)}>{range}</GradeDiv>
              <StyledButton number={20} num={20}>
                <span>Give Grade</span>
              </StyledButton>
            </RangeForm>
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
    height: 600px;
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
  border-style: ${(props) => (props.border ? "none" : "solid")};
  border-color: purple;
  width: 90%;
  font-size: 25px;
`;

const GradeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.num};
  border-radius: 80px;
  width: 150px;
  height: 150px;
  font-size: 70px;
  font-weight: 800;
  color: white;
`;
const GradeWishDiv = styled.div`
  display: flex;
  gap: 70px;
  width: 100%;
`;
const RangeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  input {
    width: 40px;
  }
`;
