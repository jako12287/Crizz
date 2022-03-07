import { createGlobalStyle } from "styled-components"


export const DarkTheme = {
    text: '#ffffff',
    bgColorL : '#2b3743',
    bgColor : '#202c37'
}


export const LightTheme = {
    text: '#000000',
    bgColorL : '#ffffff',
    bgColor : '#F5EEDC'
}

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${props => props.theme.bgColor}; 
        color: ${props => props.theme.text};
    }
`

