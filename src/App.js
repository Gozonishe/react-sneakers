import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';
import React from 'react';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '129.00', imageUrl: "/img/sneakers/1.jpg"},
  { title: 'Мужские Кроссовки Nike Air Max 270', price: '199.79', imageUrl: "/img/sneakers/2.jpg"},
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '204.95', imageUrl: "/img/sneakers/3.jpg"},
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '235.00', imageUrl: "/img/sneakers/4.jpg"},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((el) => (
            <Card 
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              onClickFavorite={() => console.log('в закладки')}
              onClickPlus={()=>console.log(el)}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;