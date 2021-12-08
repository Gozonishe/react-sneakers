
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between	p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Best Sneakers Shop</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="logo"/>
            <span>1205 $</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="logo"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>

      <div className="d-flex">
        <div className="card">
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
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="card" />
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
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="card" />
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
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="card" />
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
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/5.jpg" alt="card" />
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
      </div>

      </div>

    <h1>LALALALALALAL</h1>

    </div>
  );
}

export default App;