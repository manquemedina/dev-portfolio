import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const glow = keyframes`
from {
    text-shadow: 2px 2px 2px rgba(220, 108, 229, 0.76);
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`;

const Title = styled.div`
  font-family: "Bungee Shade", cursive;
  font-size: 1.5em;
  margin: 1em;
  animation: ${glow} 1s ease-in-out infinite alternate;
`;

const AboutImg = styled.img`
  margin: 1em;
`;

const AboutText = styled.div`
  font-family: "Fira Mono", monospace;
  font-size: 1em;
  margin: 3em;
`;

const About = () => {
  return (
    <>
      <Title>Acerca de: </Title>
      <AboutImg src="data:image/jpeg;base64,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" />
      <AboutText>
        Aulo Vitelio (en latín: Aulus Vitellius; 7 o 24 de septiembre de 12 o 15
        - Roma, 20 de diciembre de 69) fue un emperador romano que gobernó desde
        abril hasta diciembre de 69, en el «año de los cuatro emperadores».
        Vitelio procedía de una familia del orden ecuestre. Bajo los
        Julio-Claudios hizo carrera política: ocupó los cargos de cuestor,
        pretor, cónsul en 48 y procónsul de África en 60 o 61. A finales del año
        68, el emperador Servio Sulpicio Galba lo nombró gobernador de Germania
        Inferior. Ya el 1 de enero de 69 estalló una rebelión en las legiones de
        la Germania Inferior y Superior, y el 2 de enero, Aulo Vitelio fue
        proclamado emperador. Recibió el apoyo de otras provincias occidentales:
        Galia Lugdunense, Aquitania, Narbonense, y toda Hispania. Vitelio envió
        a Roma dos ejércitos dirigidos por Aulo Cecina Alieno y Fabio Valente,
        quienes en abril derrotaron a los partidarios del nuevo emperador Marco
        Salvio Otón en Bedriacum. Este último se suicidó y sus tropas y el
        Senado juraron lealtad a Vitelio.
      </AboutText>
    </>
  );
};

export { About };
