import styled from 'styled-components';

export const AppCategories = styled.div`
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
export const AppButton = styled.button`
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