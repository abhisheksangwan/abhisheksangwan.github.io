import React from "react";
import getImageByKey from "../../Image";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={getImageByKey(data.image)} alt="" />
      </div>
      <div className="project__name">{data.name}</div>
      <div className="project__description">{data.description}</div>
      <div className="cardlink">
        <a target="_blank" rel="noreferrer" href={data.github}>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a target="_blank" rel="noreferrer" href={data.live}>
          <ion-icon name="link-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Card;
