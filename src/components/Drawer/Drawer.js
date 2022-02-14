import axios from 'axios';
import React from 'react';

import AppContext from '../../context';
import Info from '../Info/Info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Drawer = ({ onClose, onRemove, items = [] }) => {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const [orderId, setOrderId] = React.useState(null);
	const [isOrderComplete, setIsOrderComplete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const {data} = await axios.post('/orders', {
				items: cartItems,
			});
			setOrderId(data.id);
			setIsOrderComplete(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete('/cart' + item.id);
				await delay(1000);
			}

		} catch (error) {
			alert('Не удалось создать заказ!')
		}
		setIsLoading(false);
	};

	return (
		<div className="overlay" >
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">
					Cart
					<img className="removeBtn cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="Remove"/>
				</h2>
				{items.length > 0 ? (
				<div>
					<div className="items">
						{items.map((obj) => (
							<div key={obj.id} className="cartItem d-flex align-center mb-20">
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
						<button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
							Purchase Order <img src="/img/arrow.svg" alt="Arrow" />
						</button>
					</div>
				</div>			
				) : ( 			
					<Info 
						title={isOrderComplete ? "Order complete!" : "Cart is empty"} 
						description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` :"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} 
						image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}/>	
				)}
			</div>
		</div>
	);
}