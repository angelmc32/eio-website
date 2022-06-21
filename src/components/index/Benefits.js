import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Benefits = () => {
  return (
    <BenefitsContainer className="uk-section">
      <h2>
        Más que un servicio de enfermería:{' '}
        <span className="uk-text-pink uk-text-bold">calidad y confianza</span>{' '}
        para tu <span className="uk-text-pink uk-text-bold">bienestar</span>{' '}
      </h2>
      <div className="grid-container">
        <div className="uk-padding-small card-1">
          <BenefitsCard className="uk-card uk-card-default uk-card-body">
            <h3>El mejor personal, asignado a tu cuidado</h3>
            <div className="uk-margin-bottom">
              <StaticImage
                src="../../images/landing/features-staff.png"
                alt="Te ayudamos a conocer el universo de las inversiones"
              />
            </div>
            <p>
              Nuestro personal cuenta con la formación y experiencia necesaria
              para ofrecer los cuidados que requieres. Revisa nuestros
              currículums.
            </p>
          </BenefitsCard>
        </div>
        <div className="uk-padding-small card-2">
          <BenefitsCard className="uk-card uk-card-default uk-card-body">
            <h3>Tu seguridad y bienestar es lo más importante</h3>
            <div className="uk-margin-bottom">
              <StaticImage
                src="../../images/landing/features-app.png"
                alt="Te ayudamos a conocer el universo de las inversiones"
              />
            </div>
            <p>
              Sabrás quién te atenderá, qué procedimientos se realizan, y cómo
              trabaja nuestro personal. Sentirás tranquilidad al ser atendido
              por nuestro equipo.
            </p>
          </BenefitsCard>
        </div>
        <div className="uk-padding-small card-3">
          <BenefitsCard className="uk-card uk-card-default uk-card-body">
            <h3>Tu salud: todos comunicados en un mismo canal</h3>
            <div className="uk-margin-bottom">
              <StaticImage
                src="../../images/landing/features-careteam.png"
                alt="Te ayudamos a conocer el universo de las inversiones"
              />
            </div>
            <p>
              Conectamos a todo el equipo de cuidado: Involucramos a tu médico
              en las indicaciones, actualizaciones y reportes diarios. No más
              confusiones.
            </p>
          </BenefitsCard>
        </div>
        <div className="uk-padding-small card-4">
          <BenefitsCard className="uk-card uk-card-default uk-card-body">
            <h3>Protegemos tus datos, clínicos y personales </h3>
            <div className="uk-margin-bottom">
              <StaticImage
                src="../../images/landing/features-datasecurity.png"
                alt="Te ayudamos a conocer el universo de las inversiones"
              />
            </div>
            <p>
              Creemos firmemente en la privacidad. Vamos más allá de las
              regulaciones nacionales. Descubre las legislaciones
              internacionales que adoptamos.
            </p>
          </BenefitsCard>
        </div>
      </div>
    </BenefitsContainer>
  );
};

const BenefitsContainer = styled.section`
  min-height: calc(100vh - 64px);
  display: flex !important;
  flex-direction: column;
  align-items: center;
  background: #060f74;
  color: #ffffff;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  h2 {
    color: #ffffff !important;
  }
  .uk-text-pink {
    color: #ff85bc !important;
  }
  .grid-container > * {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    .grid-container > * {
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card-1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .card-2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .card-3 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .card-4 {
      grid-area: 2 / 2 / 3 / 3;
    }
  }

  @media only screen and (min-width: 1366px) {
    min-height: 92vh;
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    .card-1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .card-2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .card-3 {
      grid-area: 1 / 3 / 2 / 4;
    }
    .card-4 {
      grid-area: 1 / 4 / 2 / 5;
    }
  }

  @media only screen and (min-width: 1440px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    align-items: center;
    h2,
    p {
      width: 100%;
      grid-column: 1/5;
    }
    div.uk-padding-small {
      min-height: 75%;
    }
  }
`;

const BenefitsCard = styled.div`
  height: 100%;
  padding: 40px 20px 20px 20px;
  backdrop-filter: blur(10px) saturate(174%);
  -webkit-backdrop-filter: blur(10px) saturate(174%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  p {
    text-align: justify;
  }
  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    div.uk-margin-bottom {
      display: flex;
      justify-content: center;
    }
    div.uk-margin-bottom > * {
      max-width: 256px;
    }
  }
  @media only screen and (min-width: 1366px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default Benefits;
