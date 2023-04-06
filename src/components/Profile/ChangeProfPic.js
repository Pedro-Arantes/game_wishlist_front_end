import usePatchPicture from "@/hooks/api/user/usePatchPicture";
import styled from "styled-components";

export default function ChangeProfPict({data,set}) {
const {userPatch} = usePatchPicture();
const changeProfPict = async ()=>{
    try {
        const resp = await userPatch(data.id)
    } catch (error) {
        alert("Erro!")
    }
    set(false)
}
  return (
    <ProfileDiv>
        <ProfImg onClick={changeProfPict} src={data.picture}  alt="Profile Picture"></ProfImg>
    </ProfileDiv>
    
  );
}

const ProfImg = styled.img`
width:150px;
height:150px
`
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 160px;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
`;