import React from 'react';
import styles from './Card.module.scss';

export const Card = ({ id, onPlus, title, price, imageUrl, onFavorite, favorited = false }) => {
		const [isAdded, setIsAdded] = React.useState(false);
		const [isFavorite, setFavorite] = React.useState(favorited);

		const onClickPlus = () => {
			onPlus({title, price, imageUrl});
			setIsAdded(!isAdded);
		}

		const onClickFavorite = () => {
			onFavorite({id, title, price, imageUrl});
			setFavorite(!isFavorite)
		}

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img src={isFavorite? "/img/liked.svg": "/img/unliked.svg"} alt="Unliked"/>
			</div>
			<img width={133} height={112} src={imageUrl} alt="card" />
			<h5>{title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Price:</span>
					<b>{price} $</b>
			</div>
					<img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg":"/img/btn-plus.svg"} alt="plus"/>
			</div>
		</div>
	);
}

export default Card;

