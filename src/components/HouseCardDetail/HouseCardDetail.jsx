import React from "react";
import "./HouseCardDetail.scss";
import { FormattedMessage } from "react-intl";
import NotFound from "../NotFound/NotFound";

const HouseCardDetail = ({ house }) => {
  
  return (
    <div className="c-house">     
      <div className="c-house__logo">
        <img src={!house[0].logoURL ? house[0].logoURL = '../Images/got-house.png' :  house[0].logoURL } alt={house[0].name} />
        <h4>{house[0].name}</h4>
      </div>

      <div className="c-house__info">
        <div className="c-house__info--card">
        <h2><FormattedMessage id="words" defaultMessage="lema" /></h2>          
          <p>{!house[0].words ? (<NotFound/>) : (house[0].words)} </p>         
        </div>

        <div className="c-house__info--card">
        <h2><FormattedMessage id="seat" defaultMessage="sede" /></h2>            
          {!house[0].seat.length ? (
            <NotFound/>
          ) : (
            house[0].seat.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
        <h2><FormattedMessage id="region" defaultMessage="region" /></h2>          
          {!house[0].region.length ? (
            <NotFound/>
          ) : (
            house[0].region.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
        <h2><FormattedMessage id="allegiance" defaultMessage="alianzas" /></h2>
          {!house[0].allegiance.length ? (
            <NotFound/>
          ) : (
            house[0].allegiance.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
        <h2><FormattedMessage id="religions" defaultMessage="religion" /></h2>
          {!house[0].religion.length ? (
            <NotFound/>
          ) : (
            house[0].religion.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
        <h2><FormattedMessage id="foundation" defaultMessage="fundacion" /></h2>
          <p>{house[0].createdAt.substr(0, 10)}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseCardDetail;
