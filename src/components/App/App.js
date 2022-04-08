import React from "react";
import { useState, useEffect, useMemo } from 'react';
import { getShoesRequest } from "../../api";
import Card from "../Card/Card";
import './app.scss';
import { getFilteredCards } from "../Helper/filteredCards";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../Preloader/Preloader";
import isEqual from 'lodash.isequal';
import Search from "../Search/Search";
import ShoeCategories from "../ShoeCategories/ShoeCategories";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState(null)
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
    getShoesRequest().then((items) => {
      if (!isEqual(cards, items)) {
        setCards(items)
      }
      setCategories(items.reduce((acc, cur) => {
        return !acc.includes(cur.category) && cur.category.length ? [...acc, cur.category] : acc
      }, []))

      setLoading(false);
    });
    }, 5000)
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
        <div className="loader">
          <Preloader />
        </div> : (
          <div className="app">
            <div className="header">
              <ShoeCategories
                handleFilterClick={handleFilterClick}
                categories={categories}
                filter={filter}
              />
              <div className="container">
                <Search
                  input={input}
                  handleInputChange={handleInputChange}
                />
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