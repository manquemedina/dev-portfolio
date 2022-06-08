import React from "react";
import styled from "styled-components";
import { shake } from "../animations";

const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  justify-content: center;
  :hover {
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Bungee Shade", cursive;
  font-size: 2.2em;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  width: fit-content;
  border-radius: 10px;
  color: ${(props) => props.theme.colorFuente};
  background-color: ${(props) => props.theme.colorSecundario};
  box-shadow: ${(props) => props.theme.BoxShadow};
  transition: all 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colorPrimario};
    background-color: ${(props) => props.theme.colorHover};
    animation: ${shake} 1s infinite ease-in;
  }
`;

const PajarrakoWelcome = (props) => {
  const pajarrako =
    props.theme === "light" ? (
      <img
        style={{ width: "13em" }}
        src="https://github.com/manquemedina/img/blob/master/sketch1653311245669.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: "13em" }}
        src="https://github.com/manquemedina/img/blob/master/pajarrakoInverti2.png?raw=true"
        alt=""
      />
    );
  return (
    <WelcomeDiv>
      <Title>Hola, soy Manque Medina{pajarrako}</Title>

      <Title style={{ fontSize: "1.72em" }}>WEB DEVELOPER Front-End</Title>
    </WelcomeDiv>
  );
};
export { PajarrakoWelcome };