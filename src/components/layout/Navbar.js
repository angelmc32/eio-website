import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../images/lantern-pink-2.svg';

const routes = [
  ['Servicios', '/servicios'],
  ['Nosotros', '/nosotros'],
];

const Navbar = () => {
  const mobileMenuRef = useRef();

  const mobileMenuToggle = () => {
    mobileMenuRef.current.classList.toggle('mobile-active');
  };

  return (
    <StylesWrapper>
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left uk-margin-small-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">
                <img
                  data-src={logo}
                  width="40"
                  height="40"
                  alt=""
                  data-uk-img=""
                  uk-image="true"
                  className="uk-margin-right-small"
                />
                enfermeria.io
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right uk-margin-right">
          <ul id="desktop-menu" className="uk-navbar-nav">
            {routes.map((route, index) => {
              return (
                <li key={index}>
                  <Link to={`${route[1]}`}>{route[0]}</Link>
                </li>
              );
            })}
            <li className="uk-flex uk-flex-middle">
              <Link to="/auth/login">
                <button className="uk-button uk-button-white uk-border-pill">
                  Ingresar
                </button>
              </Link>
            </li>
            <li className="uk-flex uk-flex-middle">
              <Link to="/auth/registro">
                <button className="uk-button uk-button-primary">
                  Regístrate
                </button>
              </Link>
            </li>
          </ul>
          <div
            className="burger"
            onClick={mobileMenuToggle}
            onKeyDown={mobileMenuToggle}
            role="button"
            tabIndex={0}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <ul
            ref={mobileMenuRef}
            id="mobile-menu"
            className="uk-navbar-nav uk-flex uk-flex-column uk-width-1-2"
          >
            <li
              onClick={mobileMenuToggle}
              onKeyDown={mobileMenuToggle}
              role="presentation"
            >
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li
              onClick={mobileMenuToggle}
              onKeyDown={mobileMenuToggle}
              role="presentation"
            >
              <Link to="/servicios">Servicios</Link>
            </li>
            <li
              onClick={mobileMenuToggle}
              onKeyDown={mobileMenuToggle}
              role="presentation"
            >
              <Link to="/auth/login">
                <button className="uk-button uk-button-white uk-border-pill">
                  Ingresar
                </button>
              </Link>
            </li>
            <li
              onClick={mobileMenuToggle}
              onKeyDown={mobileMenuToggle}
              role="presentation"
            >
              <Link to="/auth/registro">
                <button className="uk-button uk-button-primary uk-border-pill">
                  Regístrate
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </StylesWrapper>
  );
};

const StylesWrapper = styled.div`
  nav.uk-navbar.uk-navbar-container {
    background-color: #060f74;
    max-height: 64px;
  }
  nav.uk-navbar.uk-navbar-container > div > ul > li > a {
    text-transform: none;
    color: #fafafa;
  }
  .uk-navbar-item,
  .uk-navbar-nav > li > a,
  .uk-navbar-toggle {
    min-height: 64px !important;
  }
  .burger {
    display: none;
  }
  .burger div {
    width: 20px;
    height: 2px;
    background-color: #ffffff;
    margin: 5px;
  }
  .mobile-active {
    transform: translateX(0%) !important;
  }
  .burger-active {
    font-weight: bolder;
  }
  .burger-list-active > a.burger-active {
    text-decoration: underline;
  }
  .burger-list-active {
    background-color: #0917ae !important;
  }
  @media screen and (min-width: 700px) {
    html {
      font-size: calc(14px + 6 * ((100vw - 320px) / 680)) !important;
    }
    #mobile-menu {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    #mobile-menu {
      position: absolute;
      right: 0px;
      height: calc(100vh - 64px);
      top: 64px;
      background-color: #060f74;
      margin-right: 0 !important;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      z-index: 100;
      overflow-y: scroll;
    }
    #mobile-menu > * {
      background-color: #060f74;
      height: 64px;
    }
    #mobile-menu > *:not(:last-child) {
      border-bottom: 0.5px #fafafa solid;
    }
    #mobile-menu > li:nth-child(2) {
      padding: 7.5% 0;
    }
    .burger {
      display: inline-block;
    }
  }
`;

export default Navbar;
