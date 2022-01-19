import React from 'react';

export const Drawer = ({ onClose, onRemove, items = []}) => {
	return (
		<div className="overlay" >
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">
					Cart
					<img className="removeBtn cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="Remove"/>
				</h2>
				<div className="items">
					{items.map((obj) => (
						<div className="cartItem d-flex align-center mb-20">
							<img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="Sneakers"/>
								<div className="mr-20">
									<p className="mb-5">{obj.title}</p>
									<b>{obj.price} $</b>
								</div>
							<img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove"/>
						</div>
					))}
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