import React from "react";
import { SectionWrapper, HomeTitle } from "../styles";

const Home = (props) => {
  /* const homeImg =
    props.theme === "light" ? (
      <img
        style={{ width: "40rem", paddingBottom: "12rem"}}
        src="https://github.com/manquemedina/img/blob/master/manosLight.png?raw=true"
        alt=""
      />
    ) : (
      <img
        style={{ width: "40rem", paddingBottom: "12rem"}}
        src="https://github.com/manquemedina/img/blob/master/manosDark.png?raw=true"
        alt=""
      />
    ); */
  return (
    <SectionWrapper>
      <HomeTitle>MANQUE MEDINA</HomeTitle>
      <HomeTitle style={{ fontSize: "1.72rem" }}>
        WEB DEVELOPER Front-End
      </HomeTitle>
    {/*   {homeImg} */}
    </SectionWrapper>
  );
};
export { Home };
