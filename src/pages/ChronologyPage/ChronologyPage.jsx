
import { useState, useEffect } from "react";
import './ChronologyPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import Chronology from "../../components/Chronology/Chronology";
import Footer from "../../components/Footer/Footer";
import Languages from "../../components/Languages/Languages";
import HomeIcon from "../../components/HomeIcon/HomeIcon";


const ChronologyPage = () => {
  const [characters, setCharacters] = useState([]);
  const [ageOrder, setAgeOrder] = useState(true)
  

  const charactersFiltred = [];
  const charPair = [];
  const charOdd = [];

  for (let character of characters) {

    if (character.age && character.age.age !== null && character.age.age !== undefined) {

      charactersFiltred.push(character)
    }
  }  

  for (let i = 0; i < charactersFiltred.length; i++) {
    if (i % 2 === 0) {
      charPair.push(charactersFiltred[i]);
    } else {
      charOdd.push(charactersFiltred[i]);
    }
  }

 
 
  useEffect(() => {
    getAllCharacters().then((data) => {
      setCharacters(data);
    });

  }, []);

  return (
    <div>
      <nav className="nav">				
				<div className="nav__chronology">
					<HomeIcon />
					<Languages />
				</div>
			</nav>
      
      
    <div className="chronology">
    
      <div className="chronology__btn">   
      <button className="btnchrono" onClick={() => { 
        (ageOrder === true ? setAgeOrder(false) : setAgeOrder(true))      

       
        const arrow$$ = document.querySelector(".arrow")
        const changeOdd$$ = document.querySelector(".chronology__gallery--odd")
        const changePair$$ = document.querySelector(".chronology__gallery--pair")
        

        arrow$$.classList.toggle("arrowUp")
        changeOdd$$.classList.toggle("chronology__gallery--odd1")
        changePair$$.classList.toggle("chronology__gallery--pair1")
       
        

      }}>{ageOrder === true ? '0' : '2016'}</button>

      <img className="arrow" src="../Images/Vector.png" alt="Vector"/>
      </div> 
      <div className="chronology__gallery">
      <div className="chronology__gallery--pair">
        {ageOrder === true ? charPair.sort((prev, next) => prev.age.age - next.age.age).map((character) => (
          <Chronology key={character.id} character={character} />
        )) : charPair.sort((prev, next) => next.age.age - prev.age.age).map((character) => (
          <Chronology key={character.id} character={character} />
        ))}
      </div>
      <div className="chronology__gallery--odd">
        {ageOrder === true ? charOdd.sort((prev, next) => prev.age.age - next.age.age).map((character) => (
          <Chronology key={character.id} character={character} />

        )) : charOdd.sort((prev, next) => next.age.age - prev.age.age).map((character) => (
          <Chronology key={character.id} character={character} />
        ))}
      </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ChronologyPage;
