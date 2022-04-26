import styled from "styled-components";

export const AppWrapper = styled.div`
max-width: 428px;
margin: 0 auto;
background: ${props => !props.nightTheme ? 'var(--dayThemeBackground)' : 'var(--nightThemeBackground)'};
`
export const AppContainer = styled.div`
max-width: 428px;
width: 100%;
margin: 0 auto;
padding: 0px 12px;
`
export const AppHeader = styled.div`
position: fixed;
background: ${props => !props.nightTheme ? 'var(--dayThemeBackground)' : 'var(--nightThemeBackground)'};
padding-top: 18px;
max-width: 428px;
width: 100%;
z-index: 10;
`
export const AppCards = styled.div`
padding-top: 170px;
`
export const AppPreloader = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
`