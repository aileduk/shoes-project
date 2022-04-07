import React, { useState } from 'react';
import './card.scss';
import Modal from '../Modal/Modal';
import { ReactComponent as NoImg } from '../../assets/noimage.svg';

const Card = ({ img, category, name, description, price, sizestock }) => {
    const [activeSize, setActiveSize] = useState(0);
    const [modalActive, setModalActive] = useState(false)

    const handleSize = (index) => {
        setActiveSize(index)
    }

    return (
        <div className='card'>
            <div className='card__article'>{name}</div>
            <Modal
                active={modalActive}
                setActive={setModalActive}
                image={img}
            />
            <div className='card__category'>{!category ? 'Взуття' : category}</div>
            <div className='card__img' >
                {!img.includes('.jpg')
                    ?
                    <div className='no__img'>
                        <NoImg />
                        <p>NO IMAGE</p>
                    </div>
                    :
                    <img
                        onClick={() => setModalActive(true)}
                        loading='lazy'
                        src={img}
                        alt={category}
                        style={{ cursor: "pointer" }}
                    />
                }
            </div>
            <div className='card__size'>
                {!sizestock.length
                    ? <div className='card__not'>Немає в наявності</div>
                    : sizestock.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleSize(index)}
                            className={activeSize === index ? 'focus' : null}
                        >
                            {item.size}
                        </button>
                    ))}
            </div>
            <div className='card__description'>{description}</div>
            <div className='card__footer'>

                <div className='footer-item card__price'>
                    <div className='price__text text'>Ціна</div>
                    <div className='price__info info'>{!price ? '0' : price} ₴</div>
                </div>

                <div className='footer-item card__stock'>
                    <div className='stock__text text'>В наявності</div>
                    <div className='stock__info info'>
                        {!sizestock.length
                            ? '0 шт.'
                            : `${sizestock[activeSize]?.stock} шт.`
                        }
                    </div>
                </div>

                <div className='footer-item card__reserv'>
                    <div className='reserv__text text'>Броней</div>
                    <div className='reserv__info info'>
                        {!sizestock.length
                            ? '0 шт.'
                            : `${sizestock[activeSize]?.reserv} шт.`
                        }
                    </div>
                </div>

            </div>
            {!sizestock.length || sizestock[activeSize]?.reserv === "0"
                ? null
                :
                <div className='user__info'>
                    <div div className='card__buyer buyer'>
                        <div className='buyer__name'>
                            {sizestock[activeSize]?.reservs?.map(item => (
                                <div>{item.dropshipper_name.slice(0, 20)}</div>
                            ))}
                        </div> |
                        <div className='buyer__count'>{`${sizestock[activeSize]?.reserv} шт.`}</div> |
                        <div className='buyer__date'>
                            {sizestock[activeSize]?.reservs?.map(item => (
                                <div>{item.reservdate.slice(-8, item.reservdate.length)}</div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Card