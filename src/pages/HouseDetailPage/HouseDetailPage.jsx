import { useState, useEffect } from "react";
import { getHouse } from "../../api/fetchToApi";
import { Link, useParams } from "react-router-dom";
import HouseCardDetail from "../../components/HouseCardDetail/HouseCardDetail";
import { FormattedMessage } from "react-intl";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import Languages from "../../components/Languages/Languages";


const HouseDetailPage = () => {
  const [house, setHouse] = useState([]);
  let { id } = useParams("id");

  useEffect(() => {
    if (id)
      getHouse(id).then((data) => {
        setHouse(data);
      });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <Link className="volver" to="/houses">
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


      {house.length !== 0 ? <HouseCardDetail house={house} /> : null}
    </div>
  );

};

export default HouseDetailPage;