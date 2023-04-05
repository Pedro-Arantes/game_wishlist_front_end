import styled from 'styled-components';

export const  InputStyled = styled.input`

  color: white;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 50px;
  background-color: #9400ff;
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;

  ::placeholder{
    color: white;
  }
:placeholder-shown + .formLabel {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-4rem);
  transform: translateY(-4rem);
}
:focus{
    outline-color: orange;
    outline-offset: 8px;
}
`

export const LabelStyled = styled.label`

  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
`

export const AddGameForm = styled.form`

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 50px;
`