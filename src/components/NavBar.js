import styled from "styled-components";
import Image from "next/image";
import veno from "../../public/venonat.png";
import  {IoArrowBackCircleSharp}  from "react-icons/io5";
import {RiLogoutBoxLine} from "react-icons/ri"
import { useRouter } from "next/router";
import useDelSession from "@/hooks/api/user/useDelSession";
import logoutMessage from "@/services/logout";
import { verify } from "@/services/verifyLog";
import useGetUser from "@/hooks/api/user/useGetUser";

export default function NavBar({route,userData}) {
  const router = useRouter()
  const {session} = useDelSession()
  const picture = userData?.data.profpicture.picture;
  const logout= async () =>{
    try {
        const sess = await session()
        logoutMessage(router)
    } catch (error) {
        logoutMessage(router,error)
    }
}
const goToProfile = () =>{
  if(verify()){
    router.push("/Profile")
  }else{
    alert("You have to log in to acess here.")
  } 
}
  return (
    <StyledNav>
      <IoArrowBackCircleSharp onClick={()=>router.push(!route ?'/Games': "/"+route)} />
      
      <ProfLogout>
      <RiLogoutBoxLine onClick={logout}/>
      <ProfileDiv onClick={goToProfile}>
        <ProfPict src={picture}  alt="Profile Picture" />
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
  width: 1476px;
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
const ProfPict = styled.img`
width: 50px;
height: 50px;
`
