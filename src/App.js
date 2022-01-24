import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';
import axios from 'axios';
import React from 'react';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
      axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/items').then((res) => {
        setItems(res.data);
      });

      axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart').then((res) => {
        setCartItems(res.data)
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites', obj)
    setFavorites((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}/> : null }
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Sneakers found: ${searchValue}` : `All Sneakers`}</h1>
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
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={() => onAddToCart(item)}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;