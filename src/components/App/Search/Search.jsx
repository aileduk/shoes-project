import React from 'react';
import { AppInput, AppInputWrapper, AppTheme, SearchIconWrapper } from './SearchStyled';
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { ReactComponent as SunIcon } from "../../../assets/sun.svg";
import { ReactComponent as MoonIcon } from "../../../assets/moon.svg";



const Search = (props) => {

    return (
        <AppInputWrapper>

            <SearchIconWrapper nightTheme={props.nightTheme}>
                <SearchIcon />
            </SearchIconWrapper>

            <AppTheme onClick={props.handleTheme} nightTheme={props.nightTheme}>
                {!props.nightTheme ? <SunIcon /> : <MoonIcon />}
            </AppTheme>

            <AppInput
                nightTheme={props.nightTheme}
                value={props.input}
                onChange={props.handleInputChange}
                placeholder='Введіть артикул...'
                type='text'
            />

        </AppInputWrapper>
    )
}

export default Search