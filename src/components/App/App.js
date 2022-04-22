import React from "react";
import { useState, useEffect, useMemo } from 'react';
import { getShoesRequest } from "../../api";
import Card from "./Card/Card";
import { getFilteredCards } from "../Helper/filteredCards";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../Preloader/Preloader";
import isEqual from 'lodash.isequal';
import Search from "./Search/Search";
import ShoeCategories from "./ShoeCategories/ShoeCategories";
import { AppPreloader, AppHeader, AppWrapper, AppContainer, AppCards } from './AppStyled'

function App() {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState(null)
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [nightTheme, setNightTheme] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setInterval(() => {
    getShoesRequest().then((items) => {
      if (!isEqual(cards, items)) {
        setCards(items)
      }
      setCategories(items.reduce((acc, cur) => {
        return !acc.includes(cur.category) && cur.category.length ? [...acc, cur.category] : acc
      }, []))

      setLoading(false);
    });
    // }, 5000)
  }, [cards]);

  function handleTheme() {
    setNightTheme(!nightTheme)
  }

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
    <>
      {loading
        ?
        <AppPreloader>
          <Preloader />
        </AppPreloader>
        : (
          <AppWrapper
            nightTheme={nightTheme}
          >

            <AppHeader
              nightTheme={nightTheme}>
              <ShoeCategories
                handleFilterClick={handleFilterClick}
                categories={categories}
                filter={filter}
                nightTheme={nightTheme}
              />
              <AppContainer>
                <Search
                  input={input}
                  handleInputChange={handleInputChange}
                  handleTheme={handleTheme}
                  nightTheme={nightTheme}
                />
              </AppContainer>
            </AppHeader>

            <AppContainer>
              <AppCards>
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
                      nightTheme={nightTheme}
                    />
                  ))}
                </InfiniteScroll>
              </AppCards>
            </AppContainer>

          </AppWrapper>
        )}
    </>
  )
}

export default App;