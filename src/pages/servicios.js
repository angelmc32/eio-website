import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";

const Services = () => {
  return (
    <Layout>
      <StylesWrapper className="uk-section">
        <h2 className="uk-text-center">Nuestros servicios</h2>
        <div className="grid-container">
          <div className="text-container">
            <p>
              Nuestro personal cuenta con la formación y experiencia para
              cuidarte a tí y a tu familia.
            </p>
            <p>
              Nuestro modelo de atención se basa en crear un{" "}
              <span className="uk-text-pink uk-text-bold">
                Equipo de Cuidado
              </span>{" "}
              con tu médico, aprovechando las tecnologías disponibles, para
              ofrecer la mejor atención.
            </p>
            <p>
              Aquí puedes conocer más sobre nuestros principales servicios. Si
              necesitas algo específico, no dudes en{" "}
              <Link to="/contacto">
                <span className="uk-text-pink uk-text-bold">contactarnos</span>
              </Link>
              .
            </p>
          </div>
          <div className="accordion-container">
            <ul className="uk-accordion" uk-accordion="true">
              <li>
                <a href="#/" className="uk-accordion-title">
                  Tratamientos de Terapia Intravenosa
                </a>
                <div className="uk-accordion-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  sequi optio, architecto illo vitae porro accusamus et
                  cupiditate placeat minima esse obcaecati totam ad,
                  exercitationem aspernatur quam vel nulla enim!
                </div>
              </li>
              <li>
                <a href="#/" className="uk-accordion-title">
                  Clínica de Catéteres
                </a>
                <div className="uk-accordion-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  sequi optio, architecto illo vitae porro accusamus et
                  cupiditate placeat minima esse obcaecati totam ad,
                  exercitationem aspernatur quam vel nulla enim!
                </div>
              </li>
              <li>
                <a href="#/" className="uk-accordion-title">
                  Aplicación de Medicamentos
                </a>
                <div className="uk-accordion-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  sequi optio, architecto illo vitae porro accusamus et
                  cupiditate placeat minima esse obcaecati totam ad,
                  exercitationem aspernatur quam vel nulla enim!
                </div>
              </li>
              <li>
                <a href="#/" className="uk-accordion-title">
                  Medicamentos e Insumos Clínicos
                </a>
                <div className="uk-accordion-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  sequi optio, architecto illo vitae porro accusamus et
                  cupiditate placeat minima esse obcaecati totam ad,
                  exercitationem aspernatur quam vel nulla enim!
                </div>
              </li>
            </ul>
          </div>
          <div className="image-container">
            <StaticImage
              src="../images/landing/services.svg"
              alt="Nuestros servicios de enfermería a domicilio"
              objectFit="contain"
              className="image-wrapper"
            />
          </div>
        </div>
      </StylesWrapper>
      <Footer />
    </Layout>
  );
};

const StylesWrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;

  .text-container {
    padding-left: 5%;
    padding-right: 5%;
  }

  .text-container > p {
    text-align: justify;
    margin: 0 0 10px 0;
  }
  .text-container > p > a {
    cursor: pointer;
    text-decoration-color: #ff1a81;
  }

  .accordion-container {
    margin-top: 40px;
  }

  ul.uk-accordion > li {
    border-radius: 5px;
    border: 2px solid #060f74;
    padding: 2.5% 4%;
  }

  ul.uk-accordion > li > div.uk-accordion-content {
    text-align: justify;
    padding: 3.5%;
    margin-top: 10px;
  }

  ul.uk-accordion > li > a {
    display: flex;
    align-items: center;
    color: #060f74;
  }

  .image-container {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    justify-content: stretch;

    .accordion-container {
      margin-bottom: 40px;
    }

    ul.uk-accordion {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
    }
    ul.uk-accordion > * {
      width: 75%;
    }
    .image-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .image-container > * {
      width: 35%;
    }
  }
  @media only screen and (min-width: 820px) {
    .accordion-container {
      margin-bottom: 80px;
    }

    .image-container > * {
      width: 45%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .grid-container {
      height: 100%;
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      padding-left: 5%;
      padding-right: 5%;
      margin-top: 40px;
    }

    .text-container {
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .image-container {
      grid-area: 1 / 2 / 2 / 3;
    }
    .accordion-container {
      grid-area: 2 / 1 / 3 / 3;
      margin: 10px 20px;
    }
    ul.uk-accordion {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    ul.uk-accordion > li {
      width: 40%;
      height: 100%;
      margin: 10px;
      height: 100%;
      padding: 2.5%;
    }
    .image-container > * {
      width: auto;
    }
    .image-wrapper {
      width: 60%;
    }
  }
`;

export default Services;
