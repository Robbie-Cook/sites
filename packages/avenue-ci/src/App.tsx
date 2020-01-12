import React from "react";
import NavBar from 'Components/navigation/NavBar';
import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import typeDefs from 'Apollo/schema';

const myTypeDefs = <PresetConfig> typeDefs

const client = new ApolloClient({
  typeDefs: (<PresetConfig> ),
});


import { createGlobalStyle } from 'styled-components';

import Lato from 'Assets/fonts/Lato/Lato.woff2';
import Page from 'Components/page/Page';

// Fonts

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
  }

  /* Fonts */

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Lato Regular'), local('Lato-Regular'), url(${Lato}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

const App: React.FC = () => {
  return (
    <>
      {/* // <ApolloProvider client={client}> */}
      <GlobalStyle />
      <Page />
      {/* // </ApolloProvider> */}
    </>
  );
};

export default App;
