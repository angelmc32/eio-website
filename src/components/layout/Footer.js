import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="uk-width-1-1 uk-width-2-5@s">
        <div className="logo-container">
          <StaticImage
            src="../../images/lantern-pink-2.svg"
            alt="Te ayudamos a conocer el universo de las inversiones"
            className="uk-margin-small-right logo-img-container"
          />
          enfermeria.io
        </div>
        <p className="uk-margin-small">
          <span
            uk-icon="icon: whatsapp"
            className="uk-margin-small-left uk-margin-small-right"
          />
          55 39 73 97 46
        </p>
        <p className="uk-margin-small">
          <span
            uk-icon="icon: mail"
            className="uk-margin-small-left uk-margin-small-right"
          />
          hola@enfermeria.io
        </p>
      </div>
      <div
        id="sitemap"
        className="uk-width-1-1 uk-width-2-5@s uk-margin-small-left"
      >
        <div id="ul-header">
          <h5>Mapa del sitio</h5>
        </div>
        <ul className="uk-list uk-margin-left">
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <a href="https://1drv.ms/b/s!AvNhxv8YI_Ipgbg5dbjqTi5G-L7Uqg?e=NecVuB">
              Aviso de Privacidad
            </a>
          </li>
        </ul>
      </div>
      <div className="uk-width-1-1 uk-text-center uk-margin-small-top">
        © 2022 enfermeria.io | Bulldog Capital
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 10% 5% 2.5% 5%;
  color: #fff;
  background: #060f74;

  a {
    color: #fff;
  }

  h5 {
    color: #fff;
    margin: 0 0 5px 0;
    font-size: 1rem;
    font-weight: 700;
  }
  .logo-container {
    display: flex;
    align-items: center;
  }
  .logo-img-container {
    width: 32px;
  }
  #sitemap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    ul {
      margin-top: 10px;
    }
    #ul-header {
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 5% 5% 2.5% 5%;

    #sitemap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      ul {
        margin-top: 10px;
      }
      #ul-header {
        margin-top: 0px;
        text-align: center;
      }
    }
  }
  @media only screen and (min-width: 1366px) {
    display: flex;
    justify-content: space-between;
    padding: 5% 7.5% 2% 7.5%;
  }
`;

export default Footer;
