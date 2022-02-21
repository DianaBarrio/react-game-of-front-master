import React, { useContext } from "react";
import "./Languages.scss";
import { Context } from "../Wrapper/Wrapper";

const Languages = () => {
    
  const context = useContext(Context);
  return (
      
    <div className="c-languages">
      <input
        type="image"
        src="../Images/Spanish.svg"
        alt="Spanish Flag"
        value={"es"}
        onClick={context.selectLanguage}
      ></input>

      <input
        type="image"
        src="../Images/English.svg"
        alt="English Flag"
        value={"en"}
        onClick={context.selectLanguage}
      ></input>
    </div>
  );
};

export default Languages;
