import React from 'react';

export const Drawer = () => {
	return (
		<div style={{display: "none"}} className="overlay" >
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">
					Cart
					<img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
				</h2>
				<div className="items">
					<div className="cartItem d-flex align-center mb-20">
						<img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
						<div className="mr-20">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>129.00 $</b>
						</div>
						<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
					</div>
					<div className="cartItem d-flex align-center">
						<img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>
						<div className="mr-20">
							<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
							<b>129.00 $</b>
						</div>
						<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
					</div>
				</div>
				<div className="cartTotalBLock">
					<ul>
						<li>
							<span>Total:</span>
							<div></div>
							<b>238.00 $</b>
						</li>
						<li>
							<span>Tax 5%:</span>
							<div></div>
							<b>23.8 $</b>
						</li>
					</ul>
					<button className="greenButton">Purchase Order <img src="/img/arrow.svg" alt="Arrow" /></button>
				</div>
			</div>
		</div>
	);
}