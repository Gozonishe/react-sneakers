import React from 'react';

import { Card } from '../components/Card/Card';

export default function Home( {
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart,
	isLoading
}) {
	const renderItems = () => {
		const filteredItems = items.filter((item) => 
			item.title.toLowerCase().includes(searchValue.toLowerCase()),
		)
		return (isLoading ? [...Array(8)] : 
					filteredItems).map((item, index) => (
					<Card
						key={index}
						onFavorite={(obj) => onAddToFavorite(obj)}
						onPlus={(obj) => onAddToCart(obj)}
						loading={isLoading}
						{...item}
						/>
					))
	}

	return (
		<div className="content p-40">
			<div className="d-flex align-center mb-40 justify-between">
				<h1>{searchValue ? `Sneakers found: ${searchValue}` : `All sneakers`}</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="Search"/>
					{searchValue && 
					<img className="clear cu-p" onClick={() => setSearchValue('')} src="/img/btn-remove.svg" alt="Remove"/>}
					<input placeholder="Search..." onChange={onChangeSearchInput} value={searchValue}/>
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{renderItems()}
			</div>
    </div>
	)
};