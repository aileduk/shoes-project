import React, { useState } from 'react';
import './card.css';

const Card = (props) => {
    const [activeSize, setActiveSize] = useState(0);
    const handleSize = (index) => {
        setActiveSize(index)
    }

    return (
        <div className='card'>
            <div className='card__article'>{props.name}</div>
            <div className='card__category'>{props.category}</div>
            <div className='card__img'>
                <img src={props.img} alt={props.category} />
            </div>
            <div className='card__size'>
                {!props.sizestock.length
                    ? <div className='card__not'>Нет в наличии</div>
                    : props.sizestock.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleSize(index)}
                            className={activeSize === index ? 'focus' : null}
                        >
                            {item.size}
                        </button>
                    ))}
            </div>
            <div className='card__description'>{props.description}</div>
            <div className='card__footer'>

                <div className='card__price'>
                    <div className='price__text text'>Стоимость</div>
                    <div className='price__info info'>{props.price} ₴</div>
                </div>

                <div className='card__stock'>
                    <div className='stock__text text'>В наличии</div>
                    <div className='stock__info info'>
                        {!props.sizestock.length
                            ? '0'
                            : props.sizestock[activeSize]?.stock
                        }
                    </div>
                </div>

                <div className='card__reserv'>
                    <div className='reserv__text text'>Броней</div>
                    <div className='reserv__info info'>
                        {!props.sizestock.length
                            ? '0'
                            : props.sizestock[activeSize]?.reserv
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card