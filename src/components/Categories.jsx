import React, {useState} from "react";

function Categories() {
    const [activeCategories, setActiveCategories] = useState(0);

    const onClickCategory = (index) => {
        setActiveCategories(index);
    }

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => (
                    <li onClick={() => onClickCategory(index)}
                        key={index}
                        className={activeCategories === index ? 'active' : ''}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;