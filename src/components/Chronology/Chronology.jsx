import React from "react";
import "./Chronology.scss";

const Chronology = ({ character }) => {


  return (
    <figure className="chrono">   
        <div className="chrono__card">          
          <p>{character.age.age}</p>
          <h4>{character.name}</h4>
          <div className="chrono__card--img">
            <img src={ character.image } alt={character.name} />
          </div>          
        </div>    
    </figure>
  );
};

export default Chronology;
