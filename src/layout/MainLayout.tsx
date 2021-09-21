import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
}

body {
    margin: 0
}

html {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}
`;

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <React.Fragment>
        <GlobalStyle/>
             {children}
        </React.Fragment>
    )
}
