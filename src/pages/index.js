import Head from "next/head";
import styled from "styled-components";
import StyledButton from "@/components/styled/StyledButton";
import StyledMain from "@/components/styled/StyledMain";
import { useRouter } from "next/router";
import HeadComp from "@/components/Head";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
          <HeadComp/>
          <title>GameWish</title>
      </Head>
      <StyledMain>
        <StyledLogo src="/dragonball.png"/>
        <StyledH1>GameWish</StyledH1>
        <ButtonsDiv>
          <StyledButton onClick={()=> router.push('/Login')}>
            <span>Login</span>
          </StyledButton>
          <StyledButton onClick={()=> router.push('/Games')}>
            <span>Enter</span>
          </StyledButton>
        </ButtonsDiv>
        <StyledSection>
            <h3>How GameWish Works?</h3>
            <p>In this site you can give grades to your favorite games and make your own game wishlist!</p>
            <p>If you want to create an account or just log in click in the login button, or just enter in the site with the enter button.</p>
        </StyledSection>
      </StyledMain>
    </>
  );
}

const StyledH1 = styled.h1`
  font-size: 100px;
  color: white;
  @media(max-width:768px){
    font-size: 70px;
  }
`;
const ButtonsDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
width: 500px;
height: 70px;
` 
const StyledLogo = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 50px;
  @media(max-width:768px){
    width:150px;
    height: 150px;
  }
`
const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-style: solid;
border-width: 5px;
border-color: #5B42F3;
gap: 10px;
color: white;
background-color: rgb(5, 6, 45);
border-radius: 6px;
height: 220px;
h3{
  font-size: 45px;
}
p{
  font-size: larger;
}
@media(max-width:768px){
      width: 70%;
      
      h3{
        font-size:30px;
      }
      p{
        font-size:16px;
      }
  }
`