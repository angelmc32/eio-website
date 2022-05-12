import React from 'react';
import styled from 'styled-components';

const Features = () => {
  return (
    <FeaturesContainer className="uk-section">
      <div className="features-container">
        <h2>
          Un cuidado{' '}
          <span className="uk-text-pink uk-text-bolder">integral</span>
          :
          <br /> te acompañamos antes, durante y después de nuestra visita
        </h2>
      </div>
      <div className="features-container">
        <FeaturesCard className="uk-card uk-card-default">
          <h4>¿Cómo lo hacemos?</h4>
          <ul className="uk-list uk-list-square">
            <li>
              Identifica al personal asignado: siempre sabrás quién te atiende
            </li>
            <li>Llevamos los medicamentos y material clínico que necesitas</li>
            <li>
              Registramos la información en tu propio expediente, gratis para ti
            </li>
            <li>
              Reportamos a quien TÚ nos indiques: tus familiares y equipo médico
            </li>
            <li>Aceptamos pago en línea y enviamos factura electrónica</li>
          </ul>
        </FeaturesCard>
      </div>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  background: #060f74;
  padding: 15% 7.5% !important;
  .uk-list-square > ::before {
    list-style-type: square;
    color: #ff1a81 !important;
  }
  .uk-text-pink {
    color: #ff85bc !important;
  }
  .features-container > h2 {
    color: #ffffff !important;
  }
  @media only screen and (min-width: 768px) {
    padding: 10% 7.5% !important;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .features-container {
      width: 50%;
    }
  }
  @media only screen and (min-width: 1366px) {
    padding: 10% 10% !important;
  }
  @media only screen and (min-width: 1920px) {
    padding: 10% 15% !important;
    .features-container {
      width: 45%;
    }
  }
`;

const FeaturesCard = styled.div`
  padding: 30px 20px 20px 20px;
  backdrop-filter: blur(10px) saturate(174%);
  -webkit-backdrop-filter: blur(10px) saturate(174%);
  background-color: rgba(248, 248, 248, 0.9);
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  h4 {
    text-align: center;
  }
  li {
    text-align: justify;
  }
  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    padding: 30px 30px 20px 30px;
  }

  @media only screen and (min-width: 1366px) {
    padding: 40px 40px 20px 40px;
  }
`;

export default Features;
