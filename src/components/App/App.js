import React from "react";
import { useState, useEffect, useMemo } from 'react';
import { getFilteredCards } from "../../helpers/filteredCards";
import Card from "./Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../Preloader/Preloader";
import Search from "./Search/Search";
import ShoeCategories from "./ShoeCategories/ShoeCategories";
import { AppPreloader, AppHeader, AppWrapper, AppContainer, AppCards } from './styled'
import { useDispatch, useSelector } from "react-redux";
import { setInputAction, setPageAction, setFilterAction } from "../../redux/app/actions";
import { getShoesAction } from "../../helpers/getShoesAction";

function App() {

  // const [cards, setCards] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [categories, setCategories] = useState([])
  // const [filter, setFilter] = useState(null)
  // const [input, setInput] = useState('');
  // const [page, setPage] = useState(1);
  const [nightTheme, setNightTheme] = useState(false);

  const dispatch = useDispatch();
  const cards = useSelector(state => state.appReducer.cards)
  const loading = useSelector(state => state.appReducer.loading)
  const input = useSelector(state => state.appReducer.input)
  const categories = useSelector(state => state.appReducer.categories)
  const filter = useSelector(state => state.appReducer.filter)
  const page = useSelector(state => state.appReducer.page)

  useEffect(() => {
    dispatch(getShoesAction())
  }, [dispatch]);

  function handleTheme() {
    setNightTheme(!nightTheme)
  }

  function handleInputChange(event) {
    dispatch(setInputAction(event.target.value))
  }

  function handleFilterClick(value) {
    dispatch(setFilterAction(value === filter ? null : value));
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
                  next={() => dispatch(setPageAction(page + 1))}
                  hasMore={true}
                >
                  {cardsToRender.map((item, index) => (
                    <Card
                      activeSize={item.activeSize}
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