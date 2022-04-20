import styled from 'styled-components';

export const AppCategories = styled.div`
margin-left: 12px;
display: flex;
overflow: auto;
white-space: nowrap;
margin-bottom: 20px;
.focus {
    background: #5bd6a4;
    color: #fff;
}
`
export const AppButton = styled.button`
background: ${props => !props.nightTheme ? '#fff' : '#434751'};
border-radius: 8px;
padding: 16px;
color: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
font-weight: 500;
transition: all 0.3s ease;
& + & {
    margin-left: 12px;
}
`