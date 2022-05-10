import React from 'react';
import { AppCategories, AppButton } from './styled';

const ShoeCategories = ({ nightTheme, handleFilterClick, filter, categories }) => {
    return (
        <AppCategories
            nightTheme={nightTheme}
        >
            {categories.map((item, index) => (
                <AppButton
                    key={index}
                    onClick={() => handleFilterClick(item)}
                    focus={filter === item}
                    nightTheme={nightTheme}
                >
                    {item}
                </AppButton>
            ))}
        </AppCategories>
    )
}

export default ShoeCategories