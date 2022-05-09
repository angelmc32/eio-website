import React from "react";
import styled from "styled-components";
import SocialProofCard from "./SocialProofCard";
import socialProofCommentsArray from "./SocialProofComments";

const SocialProof = () => {
  return (
    <SocialProofContainer>
      <h2 className="uk-text-center">
        Lo que dicen nuestros Pacientes y Médicos
      </h2>
      <div
        className="uk-position-relative uk-visible-toggle uk-dark"
        tabIndex="-1"
        uk-slider="center: true; autoplay: true; pause-on-hover: true"
      >
        <div className="uk-slider-container uk-width-1-1">
          <ul className="uk-slider-items uk-grid uk-child-width-3-5">
            {socialProofCommentsArray.map((commentData, index) => (
              <li key={index}>
                <SocialProofCard {...commentData} />
              </li>
            ))}
          </ul>

          <a
            className="uk-position-center-left-out uk-position-small"
            href="/#"
            role="button"
            aria-label="Previous comment"
            uk-slidenav-previous="true"
            uk-slider-item="previous"
          >
            {" "}
          </a>
          <a
            className="uk-position-center-right-out uk-position-small"
            href="/#"
            role="button"
            aria-label="Next comment"
            uk-slidenav-next="true"
            uk-slider-item="next"
          >
            {" "}
          </a>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center"></ul>
        </div>
      </div>
    </SocialProofContainer>
  );
};

const SocialProofContainer = styled.div`
  background: #ffd6e9;
  padding: 15% 5% !important;
  ul.uk-slider-nav.uk-dotnav.uk-flex-center {
    margin: 40px 0 10px 0 !important;
  }
  @media only screen and (min-width: 768px) {
    padding: 5% 7.5% 2.5% 7.5% !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div.uk-position-relative.uk-visible-toggle.uk-dark {
      width: 70%;
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1366px) {
    div.uk-position-relative.uk-visible-toggle.uk-dark {
      width: 60%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default SocialProof;
