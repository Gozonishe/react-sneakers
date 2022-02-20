import axios from 'axios';
import React from 'react';

import AppContext from '../../context';
import Info from '../Info';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Drawer = ({ onClose, onRemove, items = [], opened }) => {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const [orderId, setOrderId] = React.useState(null);
	const [isOrderComplete, setIsOrderComplete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	
	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0).toFixed(2);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const {data} = await axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/orders', {
				items: cartItems,
			});
			setOrderId(data.id);
			setIsOrderComplete(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/' + item.id);
				await delay(1000);
			}

		} catch (error) {
			alert('Ошбика при создании заказа!')
		}
		setIsLoading(false);
	};

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`} >
			<div className={styles.drawer}>
				<h2 className="d-flex justify-between mb-30">
					Cart.
					<img className="removeBtn cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="Remove"/>
				</h2>
				{items.length > 0 ? (
				<div className="d-flex flex-column flex">
					<div className="items flex">
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
								<b>{totalPrice} $</b>
							</li>
							<li>
								<span>Tax 5%:</span>
								<div></div>
								<b>{(totalPrice * 0.05).toFixed(2)} $</b>
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