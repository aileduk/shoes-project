import React from 'react';
import './card.css';
import Size from './Size/Size';

const Card = (props) => {

    return (
        <div className='card'>
            <div className='card__article'>{props.name}</div>
            <div className='card__category'>{props.category}</div>
            <div className='card__img'>
                <img src={props.img} alt={props.category} />
            </div>
            <div className='card__size'>
                {props.size.map((item, index) => (
                    <Size
                        key={index}
                        size={item}
                    />
                ))}
            </div>
            <div className='card__description'>{props.description}</div>
        </div>
    )
}

export default Card