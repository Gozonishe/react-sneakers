import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

import styles from './Card.module.scss';

export const Card = ({ 
	id,
	onPlus,
	title,
	price,
	imageUrl,
	onFavorite,
	favorited = false,
	loading = false
}) => {
		const { isItemAdded } = React.useContext(AppContext);
		const [isFavorite, setFavorite] = React.useState(favorited);

		const onClickPlus = () => {
			onPlus({ id, title, price, imageUrl });
		}

		const onClickFavorite = () => {
			onFavorite({ id, title, price, imageUrl });
			setFavorite(!isFavorite)
		}

	return (
		<div className={styles.card}>
			{
				loading ? 
					<ContentLoader 
						speed={2}
						width={165}
						height={226}
						viewBox="0 0 150 265"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb"
					>
						<rect x="1" y="0" rx="10" ry="10" width="155" height="155" /> 
						<rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
						<rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
						<rect x="1" y="234" rx="5" ry="5" width="80" height="25" /> 
						<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
					</ContentLoader> :
					<>
						<div className={styles.favorite} onClick={onClickFavorite}>
							<img src={isFavorite? "/img/liked.svg": "/img/unliked.svg"} alt="Unliked"/>
						</div>
						<img className={styles.sneaker} width={133} height={112} src={imageUrl} alt="card" />
						<h5>{title}</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Price:</span>
								<b>{price} $</b>
						</div>
								<img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg":"/img/btn-plus.svg"} alt="plus"/>
						</div>
					</>
			}
		</div>
	);
}

export default Card;

