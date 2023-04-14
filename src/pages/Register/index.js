import HeadComp from "@/components/Head";
import {
  StyledForm,
  TitleForm,
  FormMain,
} from "@/components/styled/FormsStyles";
import StyledButton from "@/components/styled/StyledButton";
import { useUserContext } from "@/contexts/UserContext";
import useRegister from "@/hooks/api/user/useRegister";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Register() {
  const [clicked, setClicked] = useState(false);
  const [confClicked, setClickedConf] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPass] = useState("");
  const [cpf, setCpf] = useState("");
  const [username, setUsername] = useState("");
  const { register, registerError,registerData } = useRegister();

  const submit = async (e) =>{
    e.preventDefault();
    if(password !== confPassword)return alert('Confirmation password must be equal to Password!')
    try {
      const response = await register(username,email, cpf,password);
      alert('Cadastro Realizado com Sucesso!')
    } catch (error) {
      alert("Erro!")
      console.log(error)
    }
  }
  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <FormMain>
        <StyledForm onSubmit={submit}>
          <TitleForm>
            <h1>Creating</h1>
            <h3>
              your <span>account</span>
            </h3>
          </TitleForm>
          <InputsDiv>
            <StyledInput
              type="text"
              placeholder="Username"
              img={
                "https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-20-256.png"
              }
              size={21}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="CPF"
              img={
                "https://cdn2.iconfinder.com/data/icons/file-formats-44/780/119_-_CPF-256.png"
              }
              size={26}
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
            <StyledInput
              type="email"
              placeholder="E-Mail"
              img={
                "https://cdn0.iconfinder.com/data/icons/essentials-9/128/__Letter-256.png"
              }
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <img
              onClick={() => setClicked(!clicked)}
              className='lock1'
              src={
                clicked
                  ? "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-69-256.png"
                  : "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-68-64.png"
              }
            />
            <img
              onClick={() => setClickedConf(!confClicked)}
              className='lock2'
              src={
                confClicked
                  ? "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-69-256.png"
                  : "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-68-64.png"
              }
            />
            <StyledInput className="hidden"/>
            <StyledInput
              type={clicked ? "text" : "password"}
              id="fname"
              name="fname"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <StyledInput
              type={confClicked ? "text" : "password"}
              id="fname"
              name="fname"
              placeholder="Confirm Password"
              value={confPassword}
              onChange={e => setConfPass(e.target.value)}
            />
          </InputsDiv>

          <StyledButton number={20}>
            <span>Register</span>
          </StyledButton>
          <Link href={"/Login"}>Already have an account?</Link>
        </StyledForm>
      </FormMain>
    </>
  );
}
const StyledInput = styled.input`
  height: 30px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: ${props=>props.size ? props.size+'px':15+'px'};
  background-position: 9px;
  border-radius: 16px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;

  ::placeholder {
    text-align: start;
  }
  @media(max-width:768px){
    width: 90%;
  }
`;
const InputsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media(max-width:768px){
      flex-direction: column;
    }
`;
