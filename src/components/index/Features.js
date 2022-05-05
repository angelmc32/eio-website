import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import backgroundImgMobile from '../../images/background/mask-mobile.jpg';
import backgroundImgDesktop from '../../images/background/mask-desktop.jpg';

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
        <FeaturesCard className="uk-card uk-card-default uk-card-body">
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
  padding: 15% 5% !important;
  .uk-list-square > ::before {
    list-style-type: square;
    color: #ff1a81 !important;
  }
  .uk-text-pink {
    color: #ff85bc !important;
  }
  @media only screen and (min-width: 768px) {
    height: auto;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .features-container {
      width: 50%;
    }
    .features-container > h2 {
      color: #ffffff !important;
    }
  }
`;

const FeaturesCard = styled.div`
  padding: 40px 20px 20px 20px;
  backdrop-filter: blur(10px) saturate(174%);
  -webkit-backdrop-filter: blur(10px) saturate(174%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  h4 {
    text-align: center;
  }
  li {
    text-align: justify;
  }
  // @media only screen and (min-width: 768px) and (max-width: 1364px) {
  //   div.uk-margin-bottom {
  //     display: flex;
  //     justify-content: center;
  //   }
  //   div.uk-margin-bottom > * {
  //     max-width: 256px;
  //   }
  // }
  // @media only screen and (min-width: 1366px) {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-evenly;
  // }
`;

export default Features;
