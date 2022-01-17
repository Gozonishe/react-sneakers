import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';
import React from 'react';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://61ca295220ac1c0017ed8fe2.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  const onDeleteCartItem = (obj) => {
    setCartItems(cartItems.filter(item => item.obj != obj))
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onDelete={() => onDeleteCartItem()} onClose={() => setCartOpened(false)}/> : null }
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card 
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log('в закладки')}
              onPlus={() => onAddToCart(item)}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;