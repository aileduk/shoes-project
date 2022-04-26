import React from 'react';
import { AppCategories, AppButton } from './styled';

const ShoeCategories = (props) => {
    return (
        <AppCategories
            nightTheme={props.nightTheme}
        >
            {props.categories.map((item, index) => (
                <AppButton
                    key={index}
                    onClick={() => props.handleFilterClick(item)}
                    focus={props.filter === item}
                    nightTheme={props.nightTheme}
                >
                    {item}
                </AppButton>
            ))}
        </AppCategories>
    )
}

export default ShoeCategories