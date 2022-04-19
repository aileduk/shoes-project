import styled from 'styled-components';

export const AppCard = styled.div`
padding: 16px;
background-color: #ffffff;
border-radius: 8px;
position: relative;
& + & {
    margin-top: 23px;
}
`
export const CardArticle = styled.div`
font-weight: 500;
font-size: 28px;
line-height: 34px;
`

export const CardCategories = styled.div`
font-weight: 400;
color: #bdbdbd;
margin-bottom: 18px;
`
export const CardImageWrapper = styled.div`
background: #f9f9f9;
border-radius: 8px;
border: 1px solid #e8e8e8;
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
    color: #bdbdbd;
}
`
export const CardSize = styled.div`
display: flex;
overflow: auto;
margin-bottom: 18px;
margin-top: 18px;
.focus {
    background: #5bd6a4;
    color: #ffffff;
}
`
export const CardSizeNot = styled.div`
font-size: 16px;
line-height: 19px;
color: crimson;
`
export const CardSizeButton = styled.button`
background: #ffffff;
border: 1px solid #e8e8e8;
border-radius: 8px;
padding: 16px;
color: #bdbdbd;
font-weight: 500;
transition: all 0.2s ease;
& + & {
    margin-left: 8px;
}
`

export const CardDescription = styled.div`
font-weight: 400;
text-align: center;
color: #bdbdbd;
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
color: #bdbdbd;
`
export const CardInfo = styled.div`
font-weight: 500;
font-size: 28px;
line-height: 34px;
color: #3d3d3d;
`
export const CardBuyerWrapper = styled.div`
margin-top: 60px;
`
export const CardBuyer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
border-radius: 0px 0px 8px 8px;
position: absolute;
left: 0;
bottom: 0;
width: 100%;
background: linear-gradient(92.46deg, #4abb8d -6.41%, #32b17e 107.19%);
color: #fff;
min-height: 70px;
`