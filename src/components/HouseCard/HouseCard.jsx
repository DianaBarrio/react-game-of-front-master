import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./HouseCard.scss";
const HouseCard = ({ house }) => {
  return (
    <Link to={generatePath("/houses/:name", { name: house.name })}>
      
      <figure className="house">
      <div className="house__container">
        <img src={ !house.logoURL ? house.logoURL = './Images/got-house.png' :  house.logoURL } alt={house.name} />
        <h4>{house.name}</h4>
      </div>
      </figure>
      
    </Link>
  );
};

export default HouseCard;
