import styled from 'styled-components';

export default styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 98%;
    height: 10%;
    background-color: rgb(5, 6, 45);
    color: white;
    border-style: solid;
    border-color: #5B42F3;
    border-width: 2px;
    padding: 13px;
    z-index: 2;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        background-color: rgba(255,255,255,.50);
        border-radius: 50px;
    }
`