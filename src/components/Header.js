import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

import '../index.scss';

export const Header = (props) => {
	const { cartItems } = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0).toFixed(2);

	return (
		<header className="d-flex justify-between	p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} src="img/logo.png" alt="logo"/>
				<Link to="/">
					<div>
						<h3>REACT SNEAKERS</h3>
						<p className="opacity-5">Best Sneakers Shop</p>
					</div>
				</Link>
			</div>
			<ul className="d-flex align-center">
				<li className="mr-30 cu-p" onClick={props.onClickCart}>
					<img width={18} height={18} src="img/cart.svg" alt="cart"/>
					<span>{totalPrice} $</span>
				</li>
				<li className="mr-20 cu-p">
					<Link to="/favorites">
						<img width={18} height={18} src="img/heart.svg" alt="favorites"/>
					</Link>
				</li>
				<li>
					<Link to="/orders">
						<img width={20} height={20} src="img/user.svg" alt="user"/>
					</Link>
				</li>
			</ul>
		</header>
	);
}