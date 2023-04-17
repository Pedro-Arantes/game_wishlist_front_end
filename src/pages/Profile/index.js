import HeadComp from "@/components/Head";
import NavBar from "@/components/Profile/NavBar";
import Image from "next/image";
import veno from "../../../public/venonat.png";
import UserContext, { useUserContext } from "@/contexts/UserContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useGetUser from "@/hooks/api/user/useGetUser";
import useGetProfPict from "@/hooks/api/profPicture/useGetProfPict";
import ChangeProfPict from "@/components/Profile/ChangeProfPic";

export default function Profile() {
  const router = useRouter();
  const [route,setRoute] = useState();
  let {userData,user} = useGetUser();
  const  {profPictData} = useGetProfPict();
  const [pictureData,setDtPict] = useState();
  const [clicked,setClicked] = useState(false);
  const { page } = router.query;
  console.log(profPictData?.data)
  useEffect(()=>{
    const request = async()=>{
      if(page){
        setRoute(page)
      }
      
      await user()
      setDtPict(userData?.data.profpicture)
    }
    request()
  },[page,userData,clicked])
  
const openProfPict = () =>{
  setClicked(!clicked)
}  

  return (
    <>
      <Head>
        <HeadComp />
        <title>GameWish</title>
      </Head>
      <NavBar  route ={route}/>
      <ProfileMain>
        <OneProfileDiv clicked={clicked}>
          {clicked? profPictData?.data.map((item)=><ChangeProfPict set={setClicked} data={item}/>):<ProfImg onClick={openProfPict} src={pictureData?.picture}  alt="Profile Picture" />}
          
        </OneProfileDiv>

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
  width: 97.5%;
  margin: 10px;
  margin-left: 13px;
  margin-top: 79px;
  background-color: rgb(5, 6, 45);
  color: white;
  @media(max-width:768px){
    margin-top: 5%;
  }
`;
const TextDiv = styled.div`
  border-bottom: 2px;
  border-style: ${(props) => (props.border ? "none" : "solid")};
  border-color: purple;
  width: 90%;
  font-size: 25px;
  cursor: pointer;
`;

const OneProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props=> props.clicked?"10px":"" };
  width: ${props=> props.clicked?"100%":"160px"};
  height: ${props=> props.clicked?"":"160px"};
  background-color:${props=> props.clicked?"":"rgba(255, 255, 255, 0.5)"} ;
  border-radius: 50px;
`

const ProfImg = styled.img`
width:150px;
height:150px
`
