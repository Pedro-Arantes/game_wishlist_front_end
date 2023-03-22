import styled from 'styled-components';

export default styled.button`

 
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  height: 100%;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;


:active,
:hover {
  outline: 0;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(5, 6, 45);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

:hover span {
  background: none;
}

@media (min-width: 768px) {
   
    font-size: 24px;
    min-width: 196px;
  
}
`

