import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";

const app = () => {
  return (
    <Layout>
      <StyledSection className="uk-section">
        <div className="header-container">
          <div className="logo-img-container">
            <StaticImage
              src="../images/eio-logo-and-letters-blue.svg"
              alt="enfermeria.io"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex-container">
          <div className="text-container">
            <p>
              Estamos trabajando en algo nuevo para ti. Vamos a{" "}
              <span className="uk-text-pink uk-text-bold">revolucionar </span>
              el modelo de atención a la salud en México. <br />
            </p>

            <h3 className="uk-text-center uk-text-pink uk-text-bold">
              ¡Espera nuestras noticias!
            </h3>
          </div>
          <div className="image-container">
            <StaticImage
              src="../images/landing/under_construction.svg"
              alt="Nuestros servicios de enfermería a domicilio"
              objectFit="contain"
              className="image-wrapper"
            />
          </div>
        </div>
      </StyledSection>
      <Footer />
    </Layout>
  );
};

const StyledSection = styled.section`
  min-height: calc(100vh - 64px);
  width: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;

  .header-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .logo-img-container {
    width: 75% !important;
  }

  h3 {
    margin-top: 10px;
  }
  .text-container {
    padding-left: 5%;
    padding-right: 5%;
  }

  .text-container > p {
    text-align: center;
    margin: 0 0 10px 0;
  }
  .image-container {
    padding: 10%;
  }

  @media only screen and (min-width: 768px) {
    .logo-img-container {
      width: 50% !important;
    }
    .text-container {
      padding-left: 10%;
      padding-right: 10%;
    }
    .image-container {
      display: flex;
      justify-content: center;
    }
    .image-container > * {
      width: auto;
    }
    .image-wrapper {
      width: 75%;
    }
  }
  @media only screen and (min-width: 1024px) {
    justify-content: flex-start;

    .logo-img-container {
      width: 35% !important;
    }

    .flex-container {
      display: flex !important;
      flex-direction: row !important;
      align-items: center;
      margin-top: 40px;
    }
    .text-container {
      width: 50%;
      padding-left: 5%;
      padding-right: 5%;
    }
    .image-container {
      width: 50%;
      display: flex;
      justify-content: center;
      padding: 0;
    }
    .image-container > * {
      width: auto;
    }
    .image-wrapper {
      width: 75%;
    }
  }
  @media only screen and (min-width: 1366px) {
    .flex-container {
      margin-top: 60px;
    }
  }
`;

export default app;
