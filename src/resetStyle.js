import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*,
*::before,
*::after {
    padding: 0px;
    margin: 0px;
    border: none;
    box-sizing: border-box;
}

a, a:visited {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: inherit;
    text-decoration: none;
}

a:focus,
a:active {
    outline: none;
}

aside, nav, footer, header, section, main {
    display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
}

p+p {
    margin-top: 1em;
}

ul {
    list-style: none;
}

img, svg {
    vertical-align: top;
    max-width: 100%;
    height: auto;
}

input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
}

input::-ms-clear {
    display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

label {
    cursor: pointer;
}

legend {
    display: block;
}

body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 19.5px;
    background: #f1f5fb;
}
`