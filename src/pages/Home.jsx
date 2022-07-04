import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating',
    });

    React.useEffect(() => {
        setIsLoaded(true);
        fetch(
            `https://62b33c2ea36f3a973d1e716a.mockapi.io/items?${
                categoryId > 0 ? `category=${categoryId}`: ''
            }&sortBy=${sortType.sortProperty}&order=desc`
        )
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoaded(false);
            })
    }, [categoryId, sortType])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                    ? [... new Array(6)].map((index) => (<Skeleton key={ index } />))
                    : items.map((obj) => (<PizzaBlock key={ obj.id } {...obj} />))
                }
            </div>
        </>
    );
}

export default Home;