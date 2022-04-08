import React from 'react'
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import './search.scss'

const Search = (props) => {
    return (
        <div className="input">
            <SearchIcon />
            <input
                value={props.input}
                onChange={props.handleInputChange}
                placeholder='Введите артикул...'
                type='text'
            />
        </div>
    )
}

export default Search