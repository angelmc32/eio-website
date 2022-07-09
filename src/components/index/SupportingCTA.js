import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const SupportingCTA = () => {
  return (
    <StyledContainer className="uk-section">
      <div className="stmt-container">
        <h2>Nuestro equipo está listo para atenderte. No esperes más.</h2>
      </div>
      <div className="support-img-container">
        <StaticImage
          src="../../images/landing/supporting-team.svg"
          alt="Equipo de cuidado de salud"
          imgClassName="uk-width-2-5"
        />
      </div>
      <div className="cta-container">
        <h3>
          Programa <span className="uk-text-pink uk-text-bold">ahora</span> tu
          Servicio de Enfermería a domicilio.
        </h3>
        <Link to="/contacto">
          <button className="uk-button uk-button-primary">
            ¡Quiero agendar!
          </button>
        </Link>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  min-height: calc(90vh - 64px);
  display: flex !important;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;

  h2,
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

  .support-img-container {
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

    min-height: calc(70vh - 64px);

    .stmt-container {
      grid-area: 1 / 1 / 2 / 2;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .support-img-container {
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
    padding-left: 120px;
    padding-right: 120px;
  }
`;

export default SupportingCTA;
