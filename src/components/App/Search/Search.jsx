import React from 'react';
import { AppInput, AppInputWrapper, AppTheme, SearchIconWrapper } from './styled';
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { ReactComponent as SunIcon } from "../../../assets/sun.svg";
import { ReactComponent as MoonIcon } from "../../../assets/moon.svg";

const Search = ({nightTheme, handleInputChange, input, handleTheme}) => {
    return (
        <AppInputWrapper>

            <SearchIconWrapper nightTheme={nightTheme}>
                <SearchIcon />
            </SearchIconWrapper>

            <AppTheme onClick={handleTheme} nightTheme={nightTheme}>
                {!nightTheme ? <SunIcon /> : <MoonIcon />}
            </AppTheme>

            <AppInput
                nightTheme={nightTheme}
                value={input}
                onChange={handleInputChange}
                placeholder='Введіть артикул...'
                type='text'
            />

        </AppInputWrapper>
    )
}

export default Search