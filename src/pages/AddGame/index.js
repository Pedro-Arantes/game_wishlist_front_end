import GameComp from "@/components/Game";
import HeadComp from "@/components/Head";
import {
  InputStyled,
  LabelStyled,
  AddGameForm,
} from "@/components/styled/InputLabel";
import StyledButton from "@/components/styled/StyledButton";
import NavBar from "@/components/Wishlist/NavBar";
import usePostGame from "@/hooks/api/usePostGame";
import useToken from "@/hooks/useToken";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function AddGame() {
  const token = useToken();
  const router = useRouter();
  const {postGame} = usePostGame()
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  useEffect(()=>{
    if(!token){
        router.push('/')
        alert("Log in to enter here.")
    }
  },[])
    
  const submit = async (e) =>{
    e.preventDefault();
    try {
       const resp = await  postGame(name,image,platform,genre)
       alert("Game Inserted With sucess!!")
       setName("")
       setGenre("")
       setPlatform("")
       setImage("")
    } catch (error) {
        console.log(error)
        alert("Erro!")
    }
   
  }
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>

      <FormMain>
        <TitleDiv>
          <h1>Add Game</h1>
        </TitleDiv>
        <AddGameForm onSubmit={submit} >
          <div>
            <InputStyled
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            ></InputStyled>
            <LabelStyled className="formLabel">Name</LabelStyled>
          </div>
          <div>
            <InputStyled
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image"
            ></InputStyled>
            <LabelStyled className="formLabel">Image</LabelStyled>
          </div>
          <div>
            <InputStyled
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="Platform"
            ></InputStyled>
            <LabelStyled className="formLabel">Platform</LabelStyled>
          </div>
          <div>
            <InputStyled
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre"
            ></InputStyled>
            <LabelStyled className="formLabel">Genre</LabelStyled>
          </div>

          <StyledButton radius="200" number="100" wi="1">
            <span>Start</span>
          </StyledButton>
        </AddGameForm>
        <NavBar />
      </FormMain>
    </>
  );
}
const FormMain = styled.main`
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
  h1 {
    font-size: 90px;
    color: orange;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  gap: 10px;
`;
