import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";

const NotFoundPage = () => {
  return (
    <Layout>
      <StyledContainer className="uk-section">
        <h2>¡Aquí no hay nada!</h2>
        <p>
          Haz click{" "}
          <Link to="/" className="uk-text-bolder uk-text-pink">
            aquí
          </Link>{" "}
          para ir al inicio
        </p>
        <div className="img-container">
          <StaticImage
            src="../images/404/404notfound.svg"
            alt="Página no encontrada, solo hay un monstruo asustado"
          />
        </div>
        <div className="btn-container">
          <Link to="/">
            <button className="uk-button uk-button-primary">Ir a Inicio</button>
          </Link>
        </div>
      </StyledContainer>
      <Footer />
    </Layout>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 5%;

  p {
    margin: 0;
    color: #333;
  }

  div.img-container {
    margin-top: 40px;
    width: 95%;
  }
  div.btn-container {
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;

    button.uk-button.uk-button-primary {
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    div.img-container {
      margin-top: 60px;
      width: 75%;
    }
  }

  @media only screen and (min-width: 1024px) {
    div.img-container {
      margin-top: 60px;
      width: 40%;
    }
  }

  @media only screen and (min-width: 1366px) {
    div.img-container {
      margin-top: 60px;
      width: 30%;
    }
  }
`;

export default NotFoundPage;
