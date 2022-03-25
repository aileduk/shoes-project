import React from 'react'
import Card from './Card/Card';
import { useState, useEffect } from 'react';

const Cards = () => {
    const [cards, setCards] = useState([]);

    const fetchProduct = () => fetch('http://gloria.rdport.net:28041/ViaGloria/hs/dropship/items', {
        method: 'get',
        headers: { Authorization: 'Basic QWRtaW5pc3RyYXRvcjp3d3cxMjM=' },
    })
        .then((res) => res.json())
        .then((data) => setCards(data))
        .catch((err) => console.log(err))

    useEffect(() => {
        fetchProduct()
    }, [])
    console.log(cards);

    const productCard = cards.map((item) => {
        console.log(item);
        return (
            <Card
                key={item.id}
                description={item.description}
            />
        )
    })

    if (cards.length === 0) {
        return <div>Loading...</div>
    }
    console.log(productCard);

    return (
        <div>
            {productCard}
        </div>
    )
}

export default Cards