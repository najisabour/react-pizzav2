import React from "react";

function Categories({ value, onClickCategory }) {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => (
                    <li onClick={() => onClickCategory(index)}
                        key={index}
                        className={value === index ? 'active' : ''}
                    >
                        { categoryName }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;