import React from 'react';
import styles from './Card.module.scss';

export const Card = ({ onPlus, title, price, imageUrl, onClickFavorite }) => {
		const [isAdded, setIsAdded] = React.useState(false);

		const onClickPlus = () => {
			onPlus();
			setIsAdded(!isAdded);
		}

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img src="/img/unliked.svg" alt="Unliked"/>
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

