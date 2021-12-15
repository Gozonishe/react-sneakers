import React from 'react'

export const Card = () => {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/unliked.svg" alt="Unliked"/>
			</div>
			<img width={133} height={112} src="/img/sneakers/1.jpg" alt="card" />
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Price:</span>
					<b>129.00 $</b>
				</div>
				<button>
					<img width={11} height={11} src="/img/plus.svg" alt="plus"/>
				</button>
			</div>
		</div>
	);
}

