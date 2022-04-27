import React from 'react';
import Layout from '../components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout>
    <div className="uk-section uk-flex uk-height-1-1 uk-visible@s">
      <div className="uk-width-1-2 uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
        <h1>
          Cumple tu tratamiento, <br />
          desde tu hogar
        </h1>
        <h3 className="uk-margin-small">
          <span className="uk-text-pink uk-text-bold">
            Servicios Especializados
          </span>{' '}
          de
          <br />
          Enfermería a Domicilio
        </h3>
      </div>
      <div className="uk-width-1-2 uk-flex uk-flex-center uk-flex-middle">
        <StaticImage
          src="../images/nurse-isometric-pink-large.png"
          alt="Enfermera llegando a domicilio"
        />
      </div>
    </div>
    <div className="uk-section uk-flex uk-flex-column uk-height-1-1 uk-hidden@s">
      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
        <h1 className="uk-margin-remove">
          Cumple tu tratamiento, <br />
          desde tu hogar
        </h1>
        <div className="uk-width-4-5">
          <StaticImage
            src="../images/nurse-isometric-pink-large.png"
            alt="Enfermera llegando a domicilio"
          />
        </div>
        <h2 className="uk-margin-small">
          <span className="uk-text-pink uk-text-bold">
            Servicios Especializados
          </span>{' '}
          de
          <br />
          Enfermería a Domicilio
        </h2>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
