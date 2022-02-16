import axios from 'axios';
import React from 'react';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Route, Routes } from 'react-router-dom';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
      async function fetchData() {
        const cartResponse = await axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart');
        const favoritesResponse = await axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites');
        const itemsResponse = await axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/items');
        
        setIsLoading(false)

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/${obj.id}`);
    } else {
    axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное!')
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }}>
      <div className="wrapper clear">
        {cartOpened ? <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}/> : null }
        <Header onClickCart={() => setCartOpened(true)}/>
          <Routes>
            <Route path="/" exact element={ <Home items={items}
                                                  cartItems={cartItems}
                                                  searchValue={searchValue} 
                                                  setSearchValue={setSearchValue} 
                                                  onChangeSearchInput={onChangeSearchInput}
                                                  onAddToFavorite={onAddToFavorite}
                                                  onAddToCart={onAddToCart}
                                                  isLoading={isLoading}/>}/>
            <Route path="/favorites" exact element={<Favorites />}/>
            <Route path="/orders" exact element={<Orders />}/>
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;