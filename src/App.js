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

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const sizes = {
  large: {
    width: '6rem',
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    width: '6rem',
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    width: '6rem',
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider theme={{ palette, sizes }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">Button</Button>
          <Button color="gray">Button</Button>
          <Button color="pink" size="small">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            Button
          </Button>
          <Button color="gray" outline>
            Button
          </Button>
          <Button color="pink" size="small" outline>
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            Button
          </Button>
          <Button color="gray" size="large" fullWidth>
            Button
          </Button>
          <Button color="pink" size="large" fullWidth>
            Button
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
