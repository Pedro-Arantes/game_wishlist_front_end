import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 10px;
    width: 60px;
    height: 60px;
    background: none;
    border: 4px solid #ffd52d;
    border-radius: 50px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 26px;
    color: #ffd52d;
    outline: none;
    transition: .5s;

    margin-left:55px;
`;
export const Caret = styled.i`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #ffd52d;
    transition: .2s;
    :hover{
      opacity: 0;
    z-index: -1;
    }
`;

export const StyledLabelCaret = styled.div`
  position: relative;
  svg{
    font-size: 30px;
    position: absolute;
    left: 68px;
    bottom: 13px;

  } 
  :hover input , :active input  {
    width: 350px;
    background: #3b3640;
    border-radius: 10px;
  }
  :hover svg,:active svg {
      display: none;
    }
`;
