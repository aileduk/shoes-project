import styled from "styled-components"

export const CardBuyerWrapper = styled.div`
margin-top: 10px;
`
export const CardBuyer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
border-radius: 0px 0px 8px 8px;
max-width: 404px;
color: #fff;
margin-left: -16px;
margin-right: -16px;
margin-bottom: -16px;
padding: 10px 0px;
background: ${props => !props.nightTheme ? '#5bd6a4' : '#2C9F6F'};
`