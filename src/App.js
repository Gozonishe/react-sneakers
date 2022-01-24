import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';
import { Route, Router } from 'react-router-dom';
import Home from './pages/Home';
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

      <Route path="/" exact>
        <Home />
      </Route>

    </div>
  );
}

export default App;