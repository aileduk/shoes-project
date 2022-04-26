import styled from 'styled-components';
import { css } from 'styled-components';

export const AppCategories = styled.div`
margin-left: 12px;
display: flex;
overflow: auto;
white-space: nowrap;
margin-bottom: 20px;
`
export const AppButton = styled.button`
background: ${props => !props.nightTheme ? 'var(--dayBackground)' : 'var(--nightBackground)'};
border-radius: 8px;
padding: 16px;
color: ${props => !props.nightTheme ? 'var(--dayColor)' : 'var(--nightColor)'};
font-weight: 500;
transition: all 0.3s ease;
& + & {
    margin-left: 12px;
}
${props => props.focus && css`
    background: #5bd6a4;
    color: #fff;
`}
`