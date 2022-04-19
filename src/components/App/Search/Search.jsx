import React from 'react';
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { AppInput, AppInputWrapper } from './SearchStyled';


const Search = (props) => {
    return (
        <AppInputWrapper>
            <SearchIcon />
            <AppInput
                value={props.input}
                onChange={props.handleInputChange}
                placeholder='Введіть артикул...'
                type='text'
            />
        </AppInputWrapper>
    )
}

export default Search