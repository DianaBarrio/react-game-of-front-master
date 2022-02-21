import React, { useState, useEffect } from "react";
import './HousesPage.scss';
import { getAllHouses } from "../../api/fetchToApi";
import HouseCard from "../../components/HouseCard/HouseCard";
import { Searcher } from "../../components/Searcher/Searcher";
import Footer from "../../components/Footer/Footer";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import Languages from "../../components/Languages/Languages";
import { FormattedMessage } from "react-intl";


const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllHouses().then((data) => {
      setHouses(data);
      setLoading(false);
    });
  }, []);

  const filteredHouse = houses.filter((house) =>
    house.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )


  return (
    <div>
      <nav className="navbar">
        <Searcher filter={filter} setFilter={setFilter} />
        <div className="navbar__icon">
          <HomeIcon />
          <Languages />
        </div>
      </nav>
      <div className='houses-container'>
        {loading ? (
          <h2><FormattedMessage id="load" defaultMessage="cargando..." /></h2>
        ) : filteredHouse.length > 0 ? (
          filteredHouse.map((house) => (
            <HouseCard key={house._id} house={house} />
          ))
        ) : (
          <p>
            ⛔:{' '}
            <strong>"{filter}"</strong>.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Houses;
