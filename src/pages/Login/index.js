import HeadComp from "@/components/Head";
import { StyledForm, TitleForm, FormMain } from "@/components/styled/FormsStyles";
import StyledButton from "@/components/styled/StyledButton";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Login() {
    const [clicked,setClicked] = useState(false);
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <FormMain>
        <StyledForm onSubmit={()=>alert("Logado!")}>
          <TitleForm>
            <h1>Authorization</h1>
            <h3>
              of your <span>account</span>
            </h3>
          </TitleForm>
          <StyledInput type="email" id="fname" name="fname" placeholder="E-Mail" img={'https://cdn0.iconfinder.com/data/icons/essentials-9/128/__Letter-256.png'}/>
          <img onClick={()=>setClicked(!clicked)} src ={clicked ? 'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-69-256.png' : 'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-68-64.png'} />
          <StyledInput type={clicked ? "text":"password"} id="fname" name="fname" placeholder="Password" />
          <StyledButton number={20}><span>Login</span></StyledButton>
          <Link href={"/Register"}>Don't have an account?</Link>
        </StyledForm>
        
      </FormMain>
    </>
  );
}
const StyledInput = styled.input`

height: 30px;
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-size: 15px;
background-position: 9px;
border-radius: 16px;
border-style: none;
display: flex;
align-items: center;
justify-content: center;
padding-left: 30px;

::placeholder{
    text-align: start;
}

`