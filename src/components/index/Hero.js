import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <HeroContainer className="uk-section">
      <div className="stmt-container">
        <h1>
          Recibe el mejor{" "}
          <span className="uk-text-pink uk-text-bold">cuidado</span>
          <br className="uk-visible@s" /> en la comodidad de tu{" "}
          <span className="uk-text-pink uk-text-bold">hogar</span>
        </h1>
      </div>
      <div className="hero-img-container">
        <StaticImage
          src="../../images/nurse-isometric-pink-large.png"
          alt="Enfermera llegando a domicilio"
          imgClassName="uk-width-2-5"
        />
      </div>
      <div className="cta-container">
        <h3>¿Necesitas un servicio a domicilio?</h3>
        <button className="uk-button uk-button-primary">¡Agenda ahora!</button>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: calc(100vh - 64px);
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;

  h1,
  h3 {
    margin: 0;
    text-align: center;
  }

  .cta-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button.uk-button.uk-button-primary {
    font-size: 1.25rem;
    margin: 5% 0;
  }

  .hero-img-container {
    display: flex;
    justify-content: center;
  }

  div.gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    width: 90%;
  }

  @media only screen and (max-height: 700px) {
    div.gatsby-image-wrapper.gatsby-image-wrapper-constrained {
      width: 70%;
    }
  }

  @media only screen and (min-width: 768px) {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-left: 40px;
    padding-right: 40px;

    .stmt-container {
      grid-area: 1 / 1 / 2 / 2;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .hero-img-container {
      grid-area: 1 / 2 / 3 / 3;
    }
    .cta-container {
      grid-area: 2 / 1 / 3 / 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding-top: 20%;
    }
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 75px;
    padding-right: 75px;
  }
`;

export default Hero;
