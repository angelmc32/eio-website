import React, { useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import useForm from "../hooks/useForm";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import {
  DURATION,
  SERVICES,
  SHIFT,
  TERRITORIES,
} from "../catalogs/contact-catalogs";

const Contacto = () => {
  const recaptchaRef = useRef(null);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [isEmailSentState, setIsEmailSentState] = useState(false);
  const { form, handleInput } = useForm();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoadingState(true);
    const captchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const { territory, service_index, shift_index, duration_index } = form;
    const { unitPrice, durationDays, totalPrice, service, shift } =
      calculatePrice(territory, service_index, shift_index, duration_index);

    form["unitPrice"] = `$ ${unitPrice}.00 por turno/evento`;
    form["totalPrice"] = `$ ${totalPrice}.00`;
    form["duration"] = `${durationDays} días`;
    form["service"] = service;
    form["shift"] = shift;
    form["token"] = captchaToken;

    console.log(form);

    fetch("https://rl9eq3rfvc.execute-api.us-east-1.amazonaws.com/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        console.log(res);
        setIsEmailSentState(true);
        setIsLoadingState(false);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setIsLoadingState(false);
      });
  };

  const calculatePrice = (
    territoryIndex,
    serviceIndex,
    shiftIndex,
    durationIndex
  ) => {
    const basePrice =
      serviceIndex === "0" ? SHIFT[shiftIndex][2] : SHIFT[shiftIndex][1];
    const durationDays = DURATION[durationIndex][1];
    const durationDiscount = DURATION[durationIndex][2];
    const unitPrice = basePrice * durationDiscount;

    const totalPrice = durationDays * unitPrice;
    const service = SERVICES[serviceIndex][0];
    const shift = SHIFT[shiftIndex][0];

    return { unitPrice, durationDays, totalPrice, service, shift };
  };

  return (
    <Layout>
      <ContactContainer className="uk-section">
        {!isEmailSentState ? (
          <div className="form-container">
            <h2>Cotiza tu servicio</h2>
            <h4>
              Estamos{" "}
              <span className="uk-text-pink uk-text-bold">
                listos para atenderte
              </span>
              . <br />
            </h4>
            <h4 className="uk-text-center">
              <span uk-icon="whatsapp" className="uk-margin-small-right" />
              55 39 73 97 46
            </h4>
            <StyledForm onSubmit={onSubmitHandler}>
              <h4>
                Compártenos tus datos y obtén una cotización{" "}
                <span className="uk-text-pink uk-text-bold">hoy mismo.</span>
              </h4>
              <div className="uk-form-controls">
                <label className="uk-text-left" htmlFor="name">
                  Nombre de contacto:
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="uk-input uk-text-center"
                  onChange={handleInput}
                  value={form.name || ""}
                  required
                />
              </div>

              <div className="uk-form-controls">
                <label className="uk-text-left" htmlFor="phone">
                  Teléfono:
                </label>
                <input
                  name="phone"
                  id="phone"
                  type="tel"
                  className="uk-input uk-text-center"
                  onChange={handleInput}
                  value={form.phone || ""}
                  placeholder="5544332211"
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>

              <div className="uk-form-controls">
                <label className="uk-text-left" htmlFor="email">
                  Correo electrónico:
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="uk-input uk-text-center"
                  onChange={handleInput}
                  value={form.email || ""}
                  placeholder="ejemplo@email.com"
                  required
                />
              </div>

              <div className="uk-form-controls">
                <label htmlFor="territory" className="uk-text-left">
                  Localidad del domicilio:
                </label>
                <select
                  name="territory"
                  id="territory"
                  className="uk-select"
                  onChange={handleInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecciona delegación o municipio
                  </option>
                  {TERRITORIES.map((territory, index) => (
                    <option key={index} value={territory}>
                      {territory}
                    </option>
                  ))}
                </select>
              </div>

              <div className="uk-form-controls">
                <label htmlFor="service_index" className="uk-text-left">
                  Tipo de servicio:
                </label>
                <select
                  name="service_index"
                  id="service_index"
                  className="uk-select"
                  onChange={handleInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecciona el servicio
                  </option>
                  {SERVICES.map((service, index) => (
                    <option key={index} value={index}>
                      {service[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="uk-form-controls">
                <label htmlFor="shift_index" className="uk-text-left">
                  Tipo de turno:
                </label>
                <select
                  name="shift_index"
                  id="shift_index"
                  className="uk-select"
                  onChange={handleInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecciona el turno
                  </option>
                  {SHIFT.map((shift, index) => (
                    <option key={index} value={index}>
                      {shift[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="uk-form-controls">
                <label htmlFor="duration_index" className="uk-text-left">
                  Duración del servicio:
                </label>
                <select
                  name="duration_index"
                  id="duration_index"
                  className="uk-select"
                  onChange={handleInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecciona la duración
                  </option>
                  {DURATION.map((duration, index) => (
                    <option key={index} value={index}>
                      {duration[0]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="uk-width-1-1 uk-flex uk-flex-center uk-margin">
                <button
                  className="uk-button uk-button-primary uk-width-1-2"
                  disabled={isLoadingState}
                >
                  {!isLoadingState ? "Cotizar" : "Cotizando"}
                  <div
                    className={
                      isLoadingState
                        ? "uk-visible uk-margin-small-left"
                        : "uk-hidden"
                    }
                    uk-spinner="ratio: 0.5"
                  ></div>
                </button>
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LcRidkgAAAAAKz6f2nj2lHnsssk1NC5A4fIS79K"
                size="invisible"
              />
            </StyledForm>
          </div>
        ) : (
          <div className="form-container quotation-container">
            <h2>Tu cotización:</h2>
            <h4>
              Nos comunicaremos contigo a la{" "}
              <span className="uk-text-bold uk-text-pink">brevedad</span> para
              atender tu solicitud y{" "}
              <span className="uk-text-bold uk-text-pink">
                programar nuestra visita
              </span>
              .
            </h4>
            <table className="uk-table">
              <caption>Cotización base</caption>
              <tbody>
                <tr>
                  <td>Delegación/Municipio</td>
                  <td>{form.territory}</td>
                </tr>
                <tr>
                  <td>Tipo de servicio</td>
                  <td>{form.service}</td>
                </tr>
                <tr>
                  <td>Turno</td>
                  <td>{form.shift}</td>
                </tr>
                <tr>
                  <td>Duración</td>
                  <td>{form.duration}</td>
                </tr>
                <tr>
                  <td>Precio unitario</td>
                  <td>{form.unitPrice}</td>
                </tr>
                <tr>
                  <td className="uk-text-bold uk-text-pink">Precio total</td>
                  <td className="uk-text-bold uk-text-pink">
                    {form.totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
            <h5 className="uk-margin-remove uk-text-left uk-width-1-1">
              Condiciones Comerciales
            </h5>
            <ul className="uk-list uk-list-square">
              <li>
                Precios en moneda nacional,{" "}
                <span className="uk-text-bold uk-text-pink">
                  no incluyen IVA
                </span>
              </li>
              <li>
                La cotización no considera materiales o insumos, estos se
                cotizan aparte
              </li>
              <li>
                Pago por anticipado. Para cotizaciones de periodos de una semana
                o más, se solicita el 50% de la primera semana.
              </li>
              <li>Se expide factura electrónica</li>
            </ul>
          </div>
        )}
        <div className="image-container">
          <StaticImage
            src="../images/landing/supporting-team.svg"
            alt="Nuestros servicios de enfermería a domicilio"
            objectFit="contain"
            className="image-wrapper"
          />
        </div>
      </ContactContainer>
      <Footer />
    </Layout>
  );
};

const ContactContainer = styled.section`
  min-height: calc(100vh - 64px);
  display: flex !important;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;

  .uk-list-square > ::before {
    list-style-type: square;
    color: #ff1a81 !important;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .form-container.quotation-container {
    width: 90%;
    padding: 40px 20px 0px 20px;
    border-radius: 5px;
    border: 2px solid rgba(6, 15, 116, 1);
  }
  .image-container {
    padding: 10%;
  }

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  h4 {
    margin: 5px 0 10px 0;
  }

  @media only screen and (min-width: 768px) {
    .form-container,
    .form-container.quotation-container {
      width: 75%;
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
    display: flex !important;
    flex-direction: row !important;
    align-items: center;

    .form-container,
    .form-container.quotation-container {
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
`;

const StyledForm = styled.form`
  width: 90%;
  padding: 40px 20px 0px 20px;
  border-radius: 5px;
  border: 2px solid rgba(6, 15, 116, 1);
  margin: 0 20px;

  h4 {
    margin: 0 0 20px 0;
  }
  div.uk-form-controls {
    margin-bottom: 10px;
  }
  label {
    color: #060f74;
  }
  button.uk-button.uk-button-primary {
    font-size: 1rem;
    margin: 20px 0;
  }

  @media only screen and (min-width: 768px) {
    padding: 40px 40px 0px 40px;
  }
`;
export default Contacto;
