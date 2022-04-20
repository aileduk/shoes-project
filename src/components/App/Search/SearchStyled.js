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
    fill: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
}
`

export const AppTheme = styled.button`
width: 40px;
height: 40px;
position: absolute;
top: 40%;
right: 5px;
transform: translateY(-50%);
& > svg {
    top: 50%;
    width: 20px;
    height: 20px;
    fill: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
}
`

export const AppInput = styled.input`
width: 100%;
background: ${props => !props.nightTheme ? '#fff' : '#434751'};
border-radius: 8px;
padding: 15px 45px 15px 45px;
margin-bottom: 14px;
transition: all .3s ease;
&::placeholder {
    color: ${props => !props.nightTheme ? '#bdbdbd' : '#E0E0E0'};
    font-size: 16px;
}
` 