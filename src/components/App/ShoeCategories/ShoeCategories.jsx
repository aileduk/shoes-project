import React from 'react';
import { AppCategories, AppButton } from './ShoeCategoriesStyled';

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