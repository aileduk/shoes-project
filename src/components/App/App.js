import React from "react";
import { useState, useEffect, useMemo } from 'react';
import { getShoesRequest } from "../../api";
import Card from "../Card/Card";
import './App.css';
import { getFilteredCards } from "../App/helper";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading/Loading";


function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [input, setInput] = useState('');
  // const [activeShoes, setActiveShoes] = useState('')
  const [activeBtn, setActiveBtn] = useState(false)
  const [focusBtn, setFocusBtn] = useState();
  const [renderCards, setRenderCards] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    setLoading(true);
    getShoesRequest().then((items) => {
      setCards(items);
      setRenderCards(items);
      const tempArray = [];
      items.forEach((item) => {
        if (!tempArray.includes(item.category) && item.category.length) {
          tempArray.push(item.category);
        }
      });
      setCategories(tempArray);
      setLoading(false);
    });
  }, []);

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  function handleCategory(e, index) {
    const filteredCards = getFilteredCards(input, cards, e.target.textContent);
    setPage(1)
    if (!activeBtn) {
      // setActiveShoes(e.target.textContent);
      setFocusBtn(index);
      setRenderCards(filteredCards);
      setActiveBtn(!activeBtn)
    } else if (activeBtn && focusBtn === index) {
      // setActiveShoes('')
      setFocusBtn()
      setRenderCards(cards)
      setActiveBtn(!activeBtn)
    } else if (activeBtn && focusBtn !== index) {
      // setActiveShoes(e.target.textContent)
      setRenderCards(filteredCards);
      setFocusBtn(index)
    }
  }

  const cardsToRender = useMemo(() => {
    return renderCards.filter((_, index) => index + 1 <= page * 5);
  }, [page, renderCards]);



  return (
    <div>
      {loading ?
        <div className="loading">
          <Loading />
        </div> : (
          <div className="container">
            <div className="header">
              <div className="category">
                {categories.map((item, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleCategory(e, index)}
                    className={focusBtn === index ? 'focus' : null}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="input">
                <input
                  value={input}
                  onChange={(e) => handleInputChange(e)}
                  placeholder='Введите артикул...'
                  type='text'
                />
              </div>
            </div>

            <div className="page">
              <div className="cards">
                <InfiniteScroll
                  dataLength={cardsToRender.length}
                  next={() => setPage((prev) => prev + 1)}
                  hasMore={true}
                  loader={<div>Loading</div>}
                >
                  {cardsToRender.map((item, index) => (
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
                </InfiniteScroll>
              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default App;
