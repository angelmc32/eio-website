import lib from 'babel-plugin-styled-components';
import React from 'react';
import styled from 'styled-components';
import SocialProofCard from './SocialProofCard';
import socialProofCommentsArray from './SocialProofComments';

const SocialProof = () => {
  return (
    <SocialProofContainer className="uk-section">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
          {socialProofCommentsArray.map((commentData, index) => (
            <li key={index}>
              <SocialProofCard {...commentData} />
            </li>
          ))}
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </SocialProofContainer>
  );
};

const SocialProofContainer = styled.section`
  background: #ff85bc;
  padding: 15% 5% !important;
`;

export default SocialProof;
