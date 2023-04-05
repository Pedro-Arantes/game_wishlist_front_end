import styled, { keyframes } from "styled-components";

const showCaret = keyframes`
	from {
		caret-color: transparent;
	}
	to {
		caret-color: var(#255ff4);
	}
`;
const handleToCaret = keyframes`
from {
		background: currentColor;
		width: 0.25em;
		height: 1em;
		transform: translate(0,-1em) rotate(-45deg) translate(0,0.875em);
	}
	25% {
		background: currentColor;
		width: 0.25em;
		height: 1em;
		transform: translate(0,-1em) rotate(-180deg) translate(0,0.875em);
	}
	50%, 62.5% {
		background: var(#255ff4);
		width: 1px;
		height: 1.5em;
		transform: translate(0,-1em) rotate(-180deg) translate(7.5em,2.5em);
	}
	75%, 99% {
		background: var(#255ff4);
		width: 1px;
		height: 1.5em;
		transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);
	}
	87.5% {
		background: var(#255ff4);
		width: 1px;
		height: 1.5em;
		transform: translate(0,-1em) rotate(-180deg) translate(7.5em,0.125em);
	}
	to {
		background: transparent;
		width: 1px;
		height: 1.5em;
		transform: translate(0,-1em) rotate(-180deg) translate(7.5em,-0.25em);
	}
`;
export const SearchInput = styled.input`
  display: block;
  transition: all calc(var(1s) * 0.5) linear;

  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em inset;
  caret-color: var(#255ff4);
  width: 2em;
  height: 2em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :focus,
  :valid {
    background: var(#ffffff);
    border-radius: 0.25em;
    box-shadow: none;
    padding: 0.75em 1em;
    transition-duration: calc(var(1s) * 0.25);
    transition-delay: calc(var(1s) * 0.25);
    width: 100%;
    height: 3em;
  }
  :focus {
    animation: ${showCaret} var(1s) steps(1);
    outline: transparent;
  }
  :focus + .caret,
  :valid +.caret{
    animation: ${handleToCaret} var(1s) linear;
    background: transparent;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`;
export const Caret = styled.span`
  background: white;
  border-radius: 0 0 0.125em 0.125em;
  margin-bottom: -0.6em;
  width: 0.25em;
  height: 1em;
  transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
  transform-origin: 50% 0;

`;

export const StyledLabelCaret = styled.label`
  color: #e3e4e8;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
`;
