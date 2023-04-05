import HeadComp from "@/components/Head";
import NavBar from "@/components/Profile/NavBar";
import Image from "next/image";
import veno from "../../../public/venonat.png";
import UserContext, { useUserContext } from "@/contexts/UserContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useGetUser from "@/hooks/api/useGetUser";

export default function Profile() {
  const router = useRouter();
  const [route,setRoute] = useState();
  const {userData} = useGetUser();
  const { page } = router.query;
  console.log(userData?.data)
  useEffect(()=>{
    if(page){
      setRoute(page)
    }
  },[page])
  
  

  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <NavBar  route ={route}/>
      <ProfileMain>
        <ProfileDiv>
          <Image src={veno} width={150} height={150} alt="Profile Picture" />
        </ProfileDiv>

        <TextDiv>Name: {userData?.data.name}</TextDiv>
        <TextDiv>Edit Profile</TextDiv>
        <TextDiv onClick={()=>router.push(`/Wishlist`)}>Wishlist</TextDiv>
        <TextDiv onClick={()=>router.push(`/AddGame`)}>Add Game</TextDiv>
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
  cursor: pointer;
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
