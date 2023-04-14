import styled from "styled-components";
import   venoImg from "../../../public/venonat.png"
const x = venoImg
export const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 15px;
  h1 {
    font-size: 50px;
  }
  h3 {
    font-size: 30px;
  }
  span {
    color: orange;
  }

  @media(max-width:700px){
      h1{
        font-size:35px
      }
      h3{
        font-size:20px
      }
    }
`;
export const StyledForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-style: solid;
  border-width: 5px;
  border-color: #5b42f3;
  gap: 20px;
  color: white;
  background-color: rgb(5, 6, 45);
  width: 800px;
  border-radius: 6px;
  height: 400px;

  p {
    font-size: larger;
  }
  img{
    position: absolute;
    bottom: 176px;
    left: 299px;
    width: 16px;
    height: 16px;
    color: white;
    
  }
  @media(max-width:768px){
    height: 80%;
      img{
        left: 34%;
      }
    }
    @media(max-width:700px){
      img{
        left: 32%;
        bottom: 51%;
      }
    }
      @media(max-width:414px){
      img{
        left: 21%;
      }
      }
      @media(max-width:375px){
      img{
        left: 17%;
      }
    }
      @media(max-width:320px){
      img{
        left: 10%;
      }
      
    }
  .hidden{
    visibility: hidden;
    width: 1%;
  }
  .lock1{
    left: 215px;
    bottom: 185px;
  }
  
  .lock2{
    left: 435px;
    bottom: 185px;
    
  }
  @media(max-width:768px){
      .lock1{
        left: 32%;
        bottom: 48%;
      }
      .lock2{
        left: 32%;
        bottom: 41%;
      }
      .hidden{
        display: none;
      }
      button{
        height: 13%;
      }
      width: 80%;
    }
  @media(max-width:667px){
    .lock1{
        left: 30%;
        bottom: 53%;
      }
      .lock2{
        left: 30%;
        bottom: 45%;
      }
  }
  @media(max-width:414px){
    .lock1{
        left: 17%;
        bottom: 53%;
      }
      .lock2{
        left: 17%;
        bottom: 45%;
      }
  }
`;
export const FormMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    width: 100%;
    @media(max-width:768px){
    width: 100%;
    
  }
`
