import axios from 'axios';
import React from 'react';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer/Drawer';
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
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart'),
          axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites'),
          axios.get('https://61ca295220ac1c0017ed8fe2.mockapi.io/items'),
        ]);
        
        setIsLoading(false)
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://61ca295220ac1c0017ed8fe2.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
          return item;
        }));
      }
    } catch (error) {
      alert ('Ошибка при добавлении в корзину');
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    try {
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
      axios.delete(`https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/${id}`);
    } catch (error) {
      alert ('Ошибка при удалении из корзины');
      console.log(error);
    }
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
    return cartItems.some((obj) => Number(obj.parentIdnn) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems, onAddToCart }}>
      <div className="wrapper clear">
        <Drawer 
          items={cartItems} 
          onRemove={onRemoveItem} 
          onClose={() => setCartOpened(false)} 
          opened={cartOpened}
        />
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