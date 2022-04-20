import styled from 'styled-components';

export const AppCard = styled.div`
padding: 16px;
background: ${props => !props.nightTheme ? '#fff' : '#434751'};
border-radius: 8px;
position: relative;
transition: all .3s ease;
& + & {
    margin-top: 23px;
}
`
export const CardArticle = styled.div`
font-weight: 500;
font-size: 28px;
line-height: 34px;
color: #000;
`

export const CardCategories = styled.div`
font-weight: 400;
color: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
margin-bottom: 18px;
`
export const CardImageWrapper = styled.div`
background: ${props => !props.nightTheme ? '#f1f1f1' : 'grey'};
border-radius: 8px;
`
export const CardImage = styled.img`
border-radius: 8px;
`

export const CardNoImage = styled.div`
height: 420px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p {
    color: ${props => !props.nightTheme ? '#bdbdbd' : 'lightgrey'};
}
& > svg {
    fill: ${props => !props.nightTheme ? '#bdbdbd' : 'lightgrey'}
}
`
export const CardSize = styled.div`
display: flex;
overflow: auto;
margin-bottom: 18px;
margin-top: 18px;
.focus {
    background: ${props => !props.nightTheme ? '#5bd6a4' : '#2C9F6F'};
    color: #fff;
}
`
export const CardSizeNot = styled.div`
font-size: 16px;
line-height: 19px;
color: crimson;
`
export const CardSizeButton = styled.button`
background: transparent;
border: 1px solid ${props => !props.nightTheme ? '#e8e8e8' : '#E0E0E0'};
border-radius: 8px;
padding: 16px;
color: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
font-weight: 500;
transition: all 0.3s ease;
& + & {
    margin-left: 8px;
}
`

export const CardDescription = styled.div`
font-weight: 400;
text-align: center;
color: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
margin-bottom: 18px;
`

export const CardFooter = styled.div`
display: flex;
`
export const CardItem = styled.div`
width: 33.333%;
`
export const CardStock = styled(CardItem)`
text-align: center;
`
export const CardReserv = styled(CardItem)`
text-align: right;
`
export const CardText = styled.div`
font-weight: 400;
color: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
`
export const CardInfo = styled.div`
font-weight: 500;
font-size: 28px;
line-height: 34px;
color: #000;
`
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