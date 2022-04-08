import React from 'react';
import './shoeCategories.scss'

const ShoeCategories = (props) => {
    return (
        <div className="category">
            {props.categories.map((item, index) => (
                <button
                    key={index}
                    onClick={() => props.handleFilterClick(item)}
                    className={props.filter === item ? 'focus' : null}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default ShoeCategories