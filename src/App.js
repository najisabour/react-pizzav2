import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

import './scss/app.scss';


function App() {

    const [items, setItems] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(true);

    React.useEffect(() => {
        fetch('https://62b33c2ea36f3a973d1e716a.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoaded(false);
            })
    }, [])

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                    ? [new Array(6)].map((index) => (<Skeleton key={ index } />))
                    : items.map((obj) => (<PizzaBlock key={ obj.id } {...obj} />))
                }
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
