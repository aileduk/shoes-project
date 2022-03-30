import React from "react";
import { useState, useEffect, useMemo } from 'react';
import { getShoesRequest } from "../../api";
import Card from "../Card/Card";
import './App.css';
import { getFilteredCards } from "../App/helper";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading/Loading";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState(null)
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getShoesRequest().then((items) => {
      setCards(items);

      setCategories(items.reduce((acc, cur) => {
        return !acc.includes(cur.category) && cur.category.length ? [...acc, cur.category] : acc
      }, []))

      setLoading(false);
    });
  }, []);

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleFilterClick(value) {
    setFilter(prev => value === prev ? null : value);
  }

  const filteredCards = useMemo(() => {
    return getFilteredCards(input, cards, filter)
  }, [input, cards, filter])

  const cardsToRender = useMemo(() => {
    return filteredCards.filter((_, index) => index + 1 <= page * 5);
  }, [page, filteredCards]);

  return (
    <div>
      {loading ?
        <div className="loading">
          <Loading />
        </div> : (
          <div className="app">
            <div className="header">
              <div className="category">
                {categories.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterClick(item)}
                    className={filter === item ? 'focus' : null}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="container">
                <div className="input">
                  <SearchIcon />
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder='Введите артикул...'
                    type='text'
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="cards">
                <InfiniteScroll
                  dataLength={cardsToRender.length}
                  next={() => setPage((prev) => prev + 1)}
                  hasMore={true}
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