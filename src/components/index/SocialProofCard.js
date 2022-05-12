import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
// import patientWoman from "../../images/avatars/user-f.png";
// import patientMan from "../../images/avatars/user-m.png";
// import medicWoman from "../../images/avatars/medic-f.png";
// import medicMan from "../../images/avatars/medic-m.png";

const SocialProofCard = ({ userRole, userName, commentDate, comment }) => {
  const getCommentAvatar = (userRole) => {
    switch (userRole) {
      case "patientWoman":
        return PatientWomanAvatarImg;
      case "patientMan":
        return PatientManAvatarImg;
      case "medicWoman":
        return MedicWomanAvatarImg;
      case "medicMan":
        return MedicManAvatarImg;
      default:
        return PatientWomanAvatarImg;
    }
  };
  return (
    <StyledCard className="uk-card uk-card-default">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-auto">{getCommentAvatar(userRole)}</div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {userName}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time dateTime="2016-04-01T19:00">{commentDate}</time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>{comment}</p>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 40px 20px 20px 20px;
  backdrop-filter: blur(10px) saturate(174%);
  -webkit-backdrop-filter: blur(10px) saturate(174%);
  background-color: rgba(248, 248, 248, 0.95);
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  p {
    text-align: justify;
  }
`;

const PatientWomanAvatarImg = (
  <StaticImage
    src="../../images/avatars/user-f.png"
    alt="Imagen de usuario"
    className="uk-border-circle"
    width={40}
    height={40}
  />
);

const PatientManAvatarImg = (
  <StaticImage
    src="../../images/avatars/user-m.png"
    alt="Imagen de usuario"
    className="uk-border-circle"
    width={40}
    height={40}
  />
);

const MedicWomanAvatarImg = (
  <StaticImage
    src="../../images/avatars/medic-f.png"
    alt="Imagen de usuario"
    className="uk-border-circle"
    width={40}
    height={40}
  />
);

const MedicManAvatarImg = (
  <StaticImage
    src="../../images/avatars/medic-m.png"
    alt="Imagen de usuario"
    className="uk-border-circle"
    width={40}
    height={40}
  />
);

export default SocialProofCard;
