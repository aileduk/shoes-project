import React from 'react';
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import styled from "styled-components";
const AppInput = styled.input`
width: 100%;
background: #ffffff;
border: 1px solid #e8e8e8;
border-radius: 8px;
padding: 15px 0px 15px 45px;
margin-bottom: 14px;
&::placeholder {
    color: #bdbdbd;
    font-size: 16px;
`
const AppInputWrapper = styled.div`
width: 100%;
position: relative;
svg {
    position: absolute;
    left: 15px;
    top: 40%;
    transform: translateY(-50%);
}
}
`

const Search = (props) => {
    return (
        <AppInputWrapper>
            <SearchIcon />
            <AppInput
                value={props.input}
                onChange={props.handleInputChange}
                placeholder='Введите артикул...'
                type='text'
            />
        </AppInputWrapper>
    )
}

export default Search