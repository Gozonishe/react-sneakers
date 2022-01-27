import Card from '../components/Card/Card'

export default function Favorites({ items, onAddToFavorite }) {
	return (
		<div className="content p-40">
			{ items.length > 0 ? (
			<div>
				<div className="d-flex align-center mb-40 justify-between">
					<h1>Favorites</h1>
				</div>
				<div className="d-flex flex-wrap">
					{items
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