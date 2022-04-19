import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import { ReactComponent as NoImg } from '../../../assets/noimage.svg';
import {
    AppCard,
    CardArticle,
    CardCategories,
    CardImageWrapper,
    CardImage,
    CardNoImage,
    CardSize,
    CardSizeNot,
    CardSizeButton,
    CardDescription,
    CardFooter,
    CardItem,
    CardStock,
    CardReserv,
    CardText,
    CardInfo,
    CardBuyerWrapper,
    CardBuyer
} from './CardStyled';

const Card = ({ img, category, name, description, price, sizestock }) => {
    const [activeSize, setActiveSize] = useState(0);
    const [modalActive, setModalActive] = useState(false)

    const handleSize = (index) => {
        setActiveSize(index)
    }

    return (
        <AppCard>
            <Modal
                active={modalActive}
                setActive={setModalActive}
                image={img}
            />
            <CardArticle>{name}</CardArticle>
            <CardCategories>{!category ? 'Взуття' : category}</CardCategories>
            <CardImageWrapper>
                {!img.includes('.jpg')
                    ?
                    <CardNoImage>
                        <NoImg />
                        <p>NO IMAGE</p>
                    </CardNoImage>
                    :
                    <CardImage
                        onClick={() => setModalActive(true)}
                        loading='lazy'
                        src={img}
                        alt={category}
                        style={{ cursor: "pointer" }}
                    />
                }
            </CardImageWrapper>
            <CardSize>
                {!sizestock.length
                    ? <CardSizeNot>Немає в наявності</CardSizeNot>
                    : sizestock.map((item, index) => (
                        <CardSizeButton
                            key={index}
                            onClick={() => handleSize(index)}
                            className={activeSize === index ? 'focus' : null}
                        >
                            {item.size}
                        </CardSizeButton>
                    ))}
            </CardSize>
            <CardDescription>{description}</CardDescription>
            <CardFooter>
                <CardItem>
                    <CardText>Ціна</CardText>
                    <CardInfo>{!price ? '0' : price} ₴</CardInfo>
                </CardItem>

                <CardStock>
                    <CardText>В наявності</CardText>
                    <CardInfo>
                        {!sizestock.length
                            ? '0 шт.'
                            : `${sizestock[activeSize]?.stock} шт.`
                        }
                    </CardInfo>
                </CardStock>

                <CardReserv>
                    <CardText>Броней</CardText>
                    <CardInfo>
                        {!sizestock.length
                            ? '0 шт.'
                            : `${sizestock[activeSize]?.reserv} шт.`
                        }
                    </CardInfo>
                </CardReserv>
            </CardFooter>
            {!sizestock.length || sizestock[activeSize]?.reserv === "0"
                ? null
                :
                <CardBuyerWrapper>
                    <CardBuyer>
                        <div>
                            {sizestock[activeSize]?.reservs?.map(item => (
                                <div>{item.dropshipper_name.slice(0, 20)}</div>
                            ))}
                        </div> |
                        <div>{`${sizestock[activeSize]?.reserv} шт.`}</div> |
                        <div>
                            {sizestock[activeSize]?.reservs?.map(item => (
                                <div>{item.reservdate.slice(-8, item.reservdate.length)}</div>
                            ))}
                        </div>
                    </CardBuyer>
                </CardBuyerWrapper>
            }
        </AppCard >
    )
}

export default Card