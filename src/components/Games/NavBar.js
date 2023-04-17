import styled from "styled-components";
import Image from "next/image";
import veno from "../../../public/venonat.png";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useRouter } from "next/router";
import useDelSession from "@/hooks/api/user/useDelSession";
import logoutMessage from "@/services/logout";
import { verify } from "@/services/verifyLog";
import { SearchInput, Caret, StyledLabelCaret } from "../styled/InputSearch";
import useGetUser from "@/hooks/api/user/useGetUser";
import { FaSearch } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import useGameByName from "@/hooks/api/game/useGameByName";
import useToken from "@/hooks/useToken";

export default function NavBar({ setGames }) {
  const router = useRouter();
  const token = useToken();
  const { userData,user } = useGetUser();
  const {gameBy} = useGameByName();
  const [search,setSearch] = useState();
  const picture = userData?.data.profpicture.picture;
  const { session } = useDelSession();
  useEffect(()=>{
    const test = async ()=>{
      if(token){
        await user()
      }
    }
    test()
  },[])
  const logout = async () => {
    try {
      const sess = await session();
      if(token){
        await user()
      }
      logoutMessage(router);
    } catch (error) {
      logoutMessage(router, error);
    }
  };
  const goToProfile = () => {
    if (verify()) {
      router.push("/Profile");
    } else {
      alert("You have to log in to acess here.");
    }
  };
  const inputSearch = async (e) =>{
    setSearch(e.target.value)
    try {
      const resp =  await gameBy(e.target.value);
      setGames(resp.data)
    } catch (error) {
      
    }
    
  }
  return (
    <StyledNav>
      <IoArrowBackCircleSharp onClick={() => router.push("/")} />
      <StyledLabelCaret for="search" >
        <form>
          <SearchInput  onChange={inputSearch } id="search" type="search" pattern=".*\S.*" required />
          <FaSearch/>
        </form>
        <Caret class="caret"></Caret>
      </StyledLabelCaret>

      <ProfLogout>
        <RiLogoutBoxLine onClick={logout} />
        <ProfileDiv onClick={goToProfile}>
          <ProfPict src={!picture?"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_venonat-256.png":picture} alt="Profile Picture" />
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
  svg {
    color: orange;
    font-size: 70px;
    cursor: pointer;

  }
  form svg{
    font-size:30px
  }
  @media(max-width:768px){
    width: 100%;
    svg {
    color: orange;
    font-size: 60px;
    cursor: pointer;

  }
  form svg{
    font-size:30px
  }
  }
  @media(max-width:375px){
    svg{
      font-size: 30px;
    }
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
  @media(max-width:768px){
    width: 50px;
    height: 50px;
  }
`;
const ProfLogout = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  svg {
    color: red;
    font-size: 50px;
  }
  @media(max-width:768px){
    svg{
      font-size: 40px;
    }
  }
  @media(max-width:375px){
    svg{
      font-size: 30px;
    }
  }
`;
const ProfPict = styled.img`
  width: 50px;
  height: 50px;

  @media(max-width:768px){
    width: 40px;
    height: 40px;
  }
`;
