import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import { ReactComponent as NoImg } from '../../../assets/noimage.svg';
import styled from 'styled-components';

const AppCard = styled.div`
padding: 16px;
background-color: #ffffff;
border-radius: 8px;
position: relative;
& + & {
    margin-top: 23px;
}
`
const CardArticle = styled.div`
font-weight: 500;
font-size: 28px;
line-height: 34px;
`

const CardCategories = styled.div`
font-weight: 400;
color: #bdbdbd;
margin-bottom: 18px;
`
const CardImageWrapper = styled.div`
background: #f9f9f9;
border-radius: 8px;
border: 1px solid #e8e8e8;
`
const CardImage = styled.img`
border-radius: 8px;
`

const CardNoImage = styled.div`
height: 420px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p {
    color: #bdbdbd;
}
`
const CardSize = styled.div`
display: flex;
overflow: auto;
margin-bottom: 18px;
margin-top: 18px;
.focus {
    background: #5bd6a4;
    color: #ffffff;
}
`
const CardSizeNot = styled.div`
font-size: 16px;
line-height: 19px;
color: crimson;
`
const CardSizeButton = styled.button`
background: #ffffff;
border: 1px solid #e8e8e8;
border-radius: 8px;
padding: 16px;
color: #bdbdbd;
font-weight: 500;
transition: all 0.2s ease;
& + & {
    margin-left: 8px;
}
`

const CardDescription = styled.div`
font-weight: 400;
text-align: center;
color: #bdbdbd;
margin-bottom: 18px;
`

const CardFooter = styled.div`
display: flex;
`
const CardItem = styled.div`
width: 33.333%;
`
const CardStock = styled(CardItem)`
text-align: center;
`
const CardReserv = styled(CardItem)`
text-align: right;
`
const CardText = styled.div`
font-weight: 400;
color: #bdbdbd;
`
const CardInfo = styled.div`
font-weight: 500;
font-size: 28px;
line-height: 34px;
color: #3d3d3d;
`
const CardBuyerWrapper = styled.div`
margin-top: 60px;
`
const CardBuyer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
border-radius: 0px 0px 8px 8px;
position: absolute;
left: 0;
bottom: 0;
width: 100%;
background: linear-gradient(92.46deg, #4abb8d -6.41%, #32b17e 107.19%);
color: #fff;
min-height: 70px;
`

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