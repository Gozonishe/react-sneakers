import axios from 'axios';
import React from 'react';
import Card from '../components/Card/Card';

export default function Orders() {
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		
	async function fetchData() {
		try {
			const { data } = await axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/orders');
			setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
			setIsLoading(false);
		} catch (error) {
			alert('Не удалось загрузить историю заказов :(');
		}
	}
		fetchData();
	}, []);

	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>My orders.</h1>
			</div>

			<div className='d-flex flex-wrap'>
				{( isLoading ? [...Array(8)]: orders).map((item, index) => (
					<Card 
						key={index}
						loading={isLoading}
						{...item}
					/>
				))}
			</div>
		</div>
	);
};