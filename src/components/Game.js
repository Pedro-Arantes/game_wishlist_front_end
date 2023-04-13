import styled from "styled-components";
import { useRouter } from "next/router";
import { useGameContext } from "@/contexts/GameContext";

export default function GameComp({data,id}) {
    const { setDtGame } = useGameContext();
    const {name,image} = data
    const router = useRouter()
    const goToGamePage = () =>{
      localStorage.setItem("gameId",id)
      router.push({
        pathname:'/Game',
        query:{num: id}
        },'/Game')
    }
    return (
      <GameDiv onClick={goToGamePage}>
            <img alt={name} src={image}/>
            <p>{name}</p>
      </GameDiv>
    );
  }

const GameDiv = styled.div`
display: flex;
gap: 9px;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
background: linear-gradient(70deg,#40e0d0,#800080);
width: 10%;
min-width: fit-content;
height: max-content;
border-radius: 5px;
color: black;
font-weight: 600;
`  
