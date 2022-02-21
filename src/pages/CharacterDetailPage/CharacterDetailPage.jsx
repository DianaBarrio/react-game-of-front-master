import { useState, useEffect } from "react";
import { getCharacter, getAllHouses } from "../../api/fetchToApi";
import { Link, useParams } from "react-router-dom";
import CharacterCardDetail from "../../components/CharacterCardDetail/CharacterCardDetail";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import Languages from "../../components/Languages/Languages";
import { FormattedMessage } from "react-intl";

const CharacterDetailPage = () => {
  let { id } = useParams("id");
  const [character, setCharacter] = useState([]);
  const [charhouse, setCharhouse] = useState([]);

  useEffect(() => {
    if (id)
      getCharacter(id).then((data) => {
        setCharacter(data);
      });

    getAllHouses().then((data) => {
      setCharhouse(data);
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <Link className="volver" to="/characters">
          <img src="../Images/Vector.png" alt="arrow-back" />
          <p>
            <FormattedMessage id="back" defaultMessage="Volver" />
          </p>
        </Link>
        <div className="navbar__icon">
          <HomeIcon />
          <Languages />
        </div>

      </nav>

      {character.length !== 0 ? (
        <CharacterCardDetail character={character} charhouse={charhouse} />
      ) : null}
    </div>
  );
};

export default CharacterDetailPage;
