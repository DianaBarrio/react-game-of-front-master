import React, { useState, useEffect } from "react";
import './CharactersPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { Searcher } from "../../components/Searcher/Searcher";
import Footer from "../../components/Footer/Footer";
import HomeIcon from '../../components/HomeIcon/HomeIcon';
import Languages from '../../components/Languages/Languages';
import { FormattedMessage } from "react-intl";


const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')

	useEffect(() => {
		getAllCharacters().then((data) => {
			setCharacters(data);
			setLoading(false);
		});
	}, []);

	const filteredChar = characters.filter((character) =>
		character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
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
			<div className='characters-container'>
				{loading ? (
					  <h2><FormattedMessage id="load" defaultMessage="cargando..." /></h2>
				) : filteredChar.length > 0 ? (
					filteredChar.map((character) => (
						<CharacterCard key={character._id} character={character} />
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

export default Characters;
