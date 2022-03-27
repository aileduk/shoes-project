import React from "react";
import { useState, useEffect } from 'react';
import { getShoesRequest } from "../../api";
import Card from "../Card/Card";
import Shoes from "../Shoes/Shoes";
import './App.css';
import { getFilteredCards } from "../App/helper"

function App() {


  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [input, setInput] = useState('');

  useEffect(() => {
    setLoading(true);
    getShoesRequest().then((items) => {
      setCards(items);
      setLoading(false);
      const tempArray = [];
      items.forEach((item) => {
        if (!tempArray.includes(item.category) && item.category.length) {
          tempArray.push(item.category);
        }
      });
      setCategories(tempArray);
    });
  }, []);

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  const filteredCards = getFilteredCards(input, cards)


  return (
    <div>
      {loading ? 'Loading...' : (
        <div className="container">
          <div className="page">
            <div className="shoes">
              {categories.map((item, index) => (
                <Shoes
                  key={index}
                  title={item}
                />
              ))}
            </div>
            <div className="input">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder='Введите артикул...'
                type='text'
              />
            </div>
            <div className="cards">
              {filteredCards.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  sizestock={item.sizestock}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
