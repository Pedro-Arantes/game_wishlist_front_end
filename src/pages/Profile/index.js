import HeadComp from "@/components/Head";
import NavBar from "@/components/Profile/NavBar";
import Image from "next/image";
import veno from "../../../public/venonat.png";
import { useUserContext } from "@/contexts/UserContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Games() {
  const { token } = useUserContext();
  const router = useRouter();

  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <NavBar />
      <ProfileMain>
        <ProfileDiv>
          <Image src={veno} width={150} height={150} alt="Profile Picture" />
        </ProfileDiv>

        <TextDiv>Name</TextDiv>
        <TextDiv>Email</TextDiv>
        <TextDiv>Password</TextDiv>
        <TextDiv>Cpf</TextDiv>
        <TextDiv>Wishlist</TextDiv>
        <TextDiv>Config</TextDiv>
      </ProfileMain>
    </>
  );
}
const ProfileMain = styled.main`
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
const TextDiv = styled.div`
  border-bottom: 2px;
  border-style: ${(props) => (props.border ? "none" : "solid")};
  border-color: purple;
  width: 90%;
  font-size: 25px;
`;
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
`;
