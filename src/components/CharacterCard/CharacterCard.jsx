import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <Link to={generatePath("/characters/:name", { name: character.name })}>
      <figure className="character">
        <div className="character__container">          
          <img src={ !character.image ||
           character.image === 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729' ||
           character.image === 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920'
             ? character.image = '../Images/nicolas-cage-of-thrones.jpg' : character.image } alt={character.name} />
          <h4>{character.name}</h4>          
        </div>
      </figure>
    </Link>
  );
};

export default CharacterCard;
