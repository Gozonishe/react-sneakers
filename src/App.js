import axios from 'axios';
import React from 'react';
import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';
import { Route, Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

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
        setCartItems(res.data);
      });

      axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites').then((res) => {
        setFavorites(res.data);
      })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное!')
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}/> : null }

      <Header onClickCart={() => setCartOpened(true)}/>
      <Routes>
        <Route path="/" exact element={ <Home items={items} 
                                              searchValue={searchValue} 
                                              setSearchValue={setSearchValue} 
                                              onChangeSearchInput={onChangeSearchInput}
                                              onAddToFavorite={onAddToFavorite}
                                              onAddToCart={onAddToCart}/>}/>
        <Route path="/favorites" exact element={ <Favorites items={favorites}
                                                            onAddToFavorite={onAddToFavorite}/>}/>
      </Routes>
    </div>
  );
}

export default App;