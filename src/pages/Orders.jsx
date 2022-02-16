import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

export default function Orders() {
	const { onAddToFavorite } = React.useContext(AppContext);

	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>My orders.</h1>
			</div>

			<div className='d-flex flex-wrap'>
				{[].map((item, index) => (
					<Card key={index} favorites={true} onFavirote={onAddToFavorite} {...item} />
				))}
			</div>
		</div>
	);
};