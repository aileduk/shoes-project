import styled, { css } from 'styled-components'

export const ModalWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4 ease;
    z-index: 100;
    ${props => props.active && css`
        opacity: 1;
        pointer-events: all;
    `}
`

export const ModalContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    width: 500px;
`