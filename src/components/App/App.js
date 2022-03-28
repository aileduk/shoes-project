import React from "react";
import { useState, useEffect } from 'react';
import { getShoesRequest } from "../../api";
import Card from "../Card/Card";
import './App.css';
import { getFilteredCards } from "../App/helper"

function App() {


  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [input, setInput] = useState('');
  const [activeShoes, setActiveShoes] = useState('')
  const [activeBtn, setActiveBtn] = useState(false)
  const [focusBtn, setFocusBtn] = useState()

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

  function handleShoes(e, index) {
    if (!activeBtn) {
      setActiveShoes(e.target.textContent)
      setFocusBtn(index)
    } else {
      setActiveShoes('')
      setFocusBtn()
    }
    setActiveBtn(!activeBtn)
    
  }

  const filteredCards = getFilteredCards(input, cards, activeShoes)


  return (
    <div>
      {loading ? 'Loading...' : (
        <div className="container">
          <div className="page">
            <div className="shoes">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => handleShoes(e, index)}
                  className={focusBtn === index ? 'focus' : null}
                >
                  {item}
                </button>
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
