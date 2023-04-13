import styled from "styled-components";
import { useRouter } from "next/router";
import  {MdOutlineVideogameAssetOff}  from "react-icons/md";
import Swal from 'sweetalert2'
import useDelComment from "@/hooks/api/comment/useDelComment";

export default function CommentComp({ data, userId,setRefresh,refresh}) {
  const { user, text,user_id } = data;
  const { name, profpicture } = user;
  const { picture } = profpicture;
  const {commentDel} = useDelComment();
  const router = useRouter();
const Alert = ()=>{
    Swal.fire({
        title: 'Delete Comment',
        text: '"Do you want to delete this?"',
        icon: 'warning',
        showDenyButton: true,
        denyButtonText: `Delete`,
        confirmButtonText: `Don't delete`
      }).then(async (res)=>{
        if(res.isDenied){
            await commentDel(data.id)
            setRefresh(!refresh)
            Swal.fire("Deleted",'',"success")
        }
      })
}
  return (
    <CommentDiv>
      <ImgNameDiv>
        <div>
          <img src={picture} />
        </div>
        <h3>{name}</h3>
        {userId === user_id ? <><span>You</span><MdOutlineVideogameAssetOff onClick={Alert}/></>:""}
      </ImgNameDiv>
      <p>{text}</p>
    </CommentDiv>
  );
}

const CommentDiv = styled.div`
  display: flex;
  gap: 9px;
  justify-content: center;
  flex-direction: column;
  border-style: solid;
  border-color: purple;
  border-width: 5px;
  background-color: #191970;

  width: 100%;
  padding: 9px;
  p{
    font-size:20px;
  }
`;
const ImgNameDiv = styled.div`
    display: flex;
    align-items:center;
    gap: 5px;
    position: relative;
    h3{
        font-weight: 700;
        font-size:25px;
    }
  img {
    width: 60px;
    height: 60px;
  }
  div{
    background-color:orange;
    border-radius: 50%;
    width: fit-content;
  }
  svg{
    font-size:40px;
    color: red;
    position: absolute;
    right: 0px;
  }
`;
