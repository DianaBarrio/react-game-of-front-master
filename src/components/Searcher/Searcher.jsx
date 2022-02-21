import React from 'react'
import './Searcher.scss';

export const Searcher = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='search'>
			 <img src="./Images/lupa.svg" alt="" />  
			<input
				type='text'
				placeholder='...'
				name='...'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}