import { Card } from '../components/Card/Card';

export default function Home( {
	items,
	cartItems,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart
}) {
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
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item, index) => (
					<Card
						key={index}
						onFavorite={(obj) => onAddToFavorite(obj)}
						onPlus={() => onAddToCart(item)}
						//added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
						{...item}
						/>
				))}
			</div>
    </div>
	)
};