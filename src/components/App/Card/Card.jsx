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
} from './styled';
import Buyer from './CardBuyer/Buyer';

const Card = ({ img, category, name, description, price, sizestock, nightTheme }) => {
    const [activeSize, setActiveSize] = useState(0);
    const [modalActive, setModalActive] = useState(false)

    const handleSize = (index) => {
        setActiveSize(index)
    }

    return (
        <AppCard
            nightTheme={nightTheme}>
            <Modal
                modalActive={modalActive}
                setModalActive={setModalActive}
                image={img}
            />
            <CardArticle>{name}</CardArticle>
            <CardCategories
                nightTheme={nightTheme}
            >{!category ? 'Взуття' : category}</CardCategories>
            <CardImageWrapper
                nightTheme={nightTheme}
            >
                {!img.includes('.jpg')
                    ?
                    <CardNoImage nightTheme={nightTheme}>
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
            <CardSize
                nightTheme={nightTheme}
            >
                {!sizestock.length
                    ? <CardSizeNot>Немає в наявності</CardSizeNot>
                    : sizestock.map((item, index) => (
                        <CardSizeButton
                            key={index}
                            onClick={() => handleSize(index)}
                            focus={activeSize === index}
                            nightTheme={nightTheme}
                        >
                            {item.size}
                        </CardSizeButton>
                    ))}
            </CardSize>
            <CardDescription
                nightTheme={nightTheme}
            >{description}</CardDescription>
            <CardFooter>
                <CardItem>
                    <CardText nightTheme={nightTheme}>Ціна</CardText>
                    <CardInfo>{!price ? '0' : price} ₴</CardInfo>
                </CardItem>

                <CardStock>
                    <CardText nightTheme={nightTheme}>В наявності</CardText>
                    <CardInfo>
                        {!sizestock.length
                            ? '0 шт.'
                            : `${sizestock[activeSize]?.stock} шт.`
                        }
                    </CardInfo>
                </CardStock>

                <CardReserv>
                    <CardText nightTheme={nightTheme}>Броней</CardText>
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
                <Buyer
                    nightTheme={nightTheme}
                    sizestock={sizestock}
                    activeSize={activeSize}
                />
            }
        </AppCard >
    )
}

export default Card