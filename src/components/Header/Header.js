import React from 'react';

export const Header = () => {
	return (
		<header className="d-flex justify-between	p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} src="/img/logo.png" alt="logo"/>
				<div>
					<h3>REACT SNEAKERS</h3>
					<p className="opacity-5">Best Sneakers Shop</p>
				</div>
			</div>
			<ul className="d-flex align-center">
				<li className="mr-30">
					<img width={18} height={18} src="/img/cart.svg" alt="logo"/>
					<span>1205 $</span>
				</li>
				<li>
					<img width={20} height={20} src="/img/user.svg" alt="logo"/>
				</li>
			</ul>
		</header>
	);
}