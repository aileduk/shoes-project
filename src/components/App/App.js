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
import styled from "styled-components";
const AppWrapper = styled.div`
max-width: 428px;
margin: 0 auto;
`
const AppContainer = styled.div`
max-width: 428px;
width: 100%;
margin: 0 auto;
padding: 0px 12px;
`
const AppHeader = styled.div`
position: fixed;
background: #f1f5fb;
padding-top: 18px;
max-width: 428px;
width: 100%;
z-index: 10;
`
const AppCards = styled.div`
padding-top: 170px;
`
const AppPreloader = styled.div`
display: flex;
justify-content: center;
padding: 0px 0px;
margin: 0 auto;
`

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState(null)
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

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
      {loading ?
        <AppPreloader>
          <Preloader />
        </AppPreloader> : (
          <AppWrapper>

            <AppHeader>
              <ShoeCategories
                handleFilterClick={handleFilterClick}
                categories={categories}
                filter={filter}
              />
              <AppContainer>
                <Search
                  input={input}
                  handleInputChange={handleInputChange}
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