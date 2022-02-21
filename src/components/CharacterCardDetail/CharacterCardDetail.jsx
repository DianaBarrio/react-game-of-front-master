import React from "react";
import "./CharacterCardDetail.scss";
import { FormattedMessage } from "react-intl";
import NotFound from "../NotFound/NotFound";



const CharacterCardDetail = ({ character, charhouse }) => {

  const imgHouse = charhouse.filter((house) => house.name === character.house);



  return (

    <div className="detail">
      <div className="detail__character">
        <div className="detail__character--img">
          <img
            src={
              !character.image ||
                character.image === 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729' ||
                character.image === 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920'
                ? (character.image = "../Images/nicolas-cage-of-thrones.jpg")
                : character.image
            }
            alt={character.name}
          />
        </div>
        <h4>{character.name}</h4>
      </div>

      <div className="detail__info">
        <div className="detail__info--card">
          <h2>
            <FormattedMessage id="house" defaultMessage="casa" />
          </h2>
          <div className="detail__info--card--list">
            {imgHouse.length && imgHouse[0].logoURL ? <img src={imgHouse[0].logoURL}/> : <img src='../Images/got-house.png'/> }           
          </div>
        </div>
        <div className="detail__info--card">
          <h2>
            <FormattedMessage id="allegiance" defaultMessage="alianzas" />
          </h2>
          <div className="detail__info--card--list">
          {!character.allegiances.length ?
           (<NotFound/>) :
            (character.allegiances.map((item, index) => (
              <p key={index}>{item}</p>)
            ))}
          </div>
        </div>
        <div className="detail__info--card">
          <h2>
            <FormattedMessage id="appearances" defaultMessage="apariciones" />
          </h2>
          <div className="detail__info--card--list">
          {!character.appearances.length ?
           (<NotFound/>) :
            (character.appearances.map((item, index) => (
              <p key={index}>{item}</p>)
            ))}
          </div>
        </div>
        <div className="detail__info--card">
          <h2>
            <FormattedMessage id="father" defaultMessage="padre" />
          </h2>
          <div className="detail__info--card--list">
            <p>{ !character.father ? (<NotFound/>) : (character.father)  }</p>
          </div>
        </div>
        <div className="detail__info--card">
          <h2>
            <FormattedMessage id="siblings" defaultMessage="descendientes" />
          </h2>
          <div className="detail__info--card--list">
          {!character.siblings.length ?
           (<NotFound/>) :
            (character.siblings.map((item, index) => (
              <p key={index}>{item}</p>)
            ))}
          </div>
        </div>
        <div className="detail__info--card">
          <h2>
            <FormattedMessage id="titles" defaultMessage="titulos" />
          </h2>
          <div className="detail__info--card--list">
          {!character.titles.length ?
           (<NotFound/>) :
            (character.titles.map((item, index) => (
              <p key={index}>{item}</p>)
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default CharacterCardDetail;
