import styled from "styled-components";
import  {IoArrowBackCircleSharp}  from "react-icons/io5";
import {AiOutlineHome} from 'react-icons/ai'
import {RiLogoutBoxLine} from "react-icons/ri"
import { useRouter } from "next/router";
import  veno from "../../../public/venonat.png"
import Image from "next/image";
import useDelSession from "@/hooks/api/useDelSession";
import logoutMessage from "@/services/logout";

export default function NavBar({route}) {
  const router = useRouter()
  const {session} = useDelSession()
  const logout= async () =>{
    try {
        const sess = await session()
        logoutMessage(router)
    } catch (error) {
        logoutMessage(router,error)
    }
}
  return (
    <StyledNav>
        
      <IoArrowBackCircleSharp onClick={()=>router.push(!route ?'/Profile': "/"+route)} />
      <HomeDiv onClick={()=>router.push('/Games')}>
      <AiOutlineHome/>
      </HomeDiv>
      <ProfLogout>
      <RiLogoutBoxLine onClick={logout}/>
      <ProfileDiv onClick={()=>router.push({
            pathname: "/Profile",
            query: {page:'Wishlist'}
            })}>
        <Image
        src={veno}
        width={50}
        height={50}
        alt="Profile Picture"/>
        </ProfileDiv>
      
      </ProfLogout>
      
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 13px;
  width: 1482px;
  height: 10%;
  background-color: rgb(5, 6, 45);
  color: white;
  border-style: solid;
  border-color: #5b42f3;
  border-width: 2px;
  padding: 13px;
  z-index: 2;

  svg{
    color: orange;
    font-size: 70px;
    cursor: pointer;
  }
`;

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50px;

`
const ProfLogout = styled.div`
display: flex;
align-items: center;
gap: 30px;

svg{
    color: red;
    font-size: 50px;
}

`
const HomeDiv= styled.div`
svg{
    color: green;
}
`
