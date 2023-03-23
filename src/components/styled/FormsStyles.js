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
`;
export const FormMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    width: 100%;
`
