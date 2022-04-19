import styled from "styled-components";

export const AppInputWrapper = styled.div`
width: 100%;
position: relative;
`

export const SearchIconWrapper = styled.div`
width: 20px;
height: 20px;
position: absolute;
top: 40%;
left: 15px;
transform: translateY(-50%);
& > svg {
    top: 50%;   
    width: 20px;
    height: 20px;
    fill: ${props => !props.nightTheme ? '#bdbdbd' : '#fff'};
}
`

export const AppTheme = styled.button`
width: 20px;
height: 20px;
position: absolute;
top: 40%;
right: 15px;
transform: translateY(-50%);
& > svg {
    top: 50%;
    width: 20px;
    height: 20px;
    fill: ${props => !props.nightTheme ? '#bdbdbd' : '#fff'};
}
`

export const AppInput = styled.input`
width: 100%;
background: ${props => !props.nightTheme ? '#fff' : 'grey'};
border-radius: 8px;
padding: 15px 45px 15px 45px;
margin-bottom: 14px;
transition: all .3s ease;
&::placeholder {
    color: ${props => !props.nightTheme ? '#bdbdbd' : '#fff'};
    font-size: 16px;
}
` 