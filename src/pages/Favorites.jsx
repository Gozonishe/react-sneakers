import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

export default function Favorites() {
	const { favorites, onAddToFavorite } = React.useContext(AppContext);

	return (
		<div className="content p-40">
			{ favorites.length > 0 ? (
			<div>
				<div className="d-flex align-center mb-40 justify-between">
					<h1>Favorites</h1>
				</div>
				<div className="d-flex flex-wrap">
					{favorites
						.map((item, index) => (
						<Card
							key={index}
							favorited={true}
							onFavorite={onAddToFavorite}
							{...item}
							/>
					))}
				</div>
			</div> ) : (
				<div className='favoriteEmpty'>
					<h1>No Favorite Sneakers</h1>
				</div>
			)
			}
    </div>
	)
};