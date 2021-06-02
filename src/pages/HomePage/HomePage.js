import styled from "styled-components";
import logoURL from "./pickle.png";
import { useHistory } from "react-router";
import React from "react";

export const HomePage = ({ setCharacter }) => {
  const [input, setInput] = React.useState();
  const history = useHistory();

  function handleSearchClick() {
    setCharacter(input);
    history.replace("/CharacterCard");
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handlerRandomCharacter() {
    setCharacter(Math.floor(Math.random() * 8));
    history.replace("/card");
  }
  return (
    <Home width="20px">
      <Wrapper>
        <SearchBar value={input} onChange={handleInputChange} type="search" />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
          <button onClick={handlerRandomCharacter}>¡Azar!</button>
        </ButtonsWrapper>

        <PickleLogo src={logoURL} alt="Pickle Rick Logo" />
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://fondosmil.com/fondo/27378.jpg");
  background-size: cover;
  //filter: blur(0px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 3px;
`;

const SearchBar = styled.input`
  width: 100%;
  margin-top: 300px;
  border: none;
  border-radius: 5px;
`;

const PickleLogo = styled.img`
  width: 130px;
  margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  button {
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: 600;
    background-color: seagreen;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }

    &:first-child {
      width: 70%;
    }

    &:last-child {
      width: 30%;
    }
  }
`;
