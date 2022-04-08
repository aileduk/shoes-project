import React from 'react';
import styled from 'styled-components';

const AppCategories = styled.div`
margin-left: 12px;
display: flex;
overflow: auto;
white-space: nowrap;
margin-bottom: 12px;
.focus {
    background: #5bd6a4;
    color: #ffffff;
}
`
const AppButton = styled.button`
background: #ffffff;
border: 1px solid #e8e8e8;
border-radius: 8px;
padding: 16px;
color: #bdbdbd;
font-weight: 500;
transition: all 0.3s ease;
& + & {
    margin-left: 12px;
}
`

const ShoeCategories = (props) => {
    return (
        <AppCategories>
            {props.categories.map((item, index) => (
                <AppButton
                    key={index}
                    onClick={() => props.handleFilterClick(item)}
                    className={props.filter === item ? 'focus' : null}
                >
                    {item}
                </AppButton>
            ))}
        </AppCategories>
    )
}

export default ShoeCategories