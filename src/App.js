import React from 'react';
import Button from './components/SButton';
import styled, { ThemeProvider } from 'styled-components';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <Button>Button</Button>
        <Button color="gray">Button</Button>
        <Button color="pink">Button</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
