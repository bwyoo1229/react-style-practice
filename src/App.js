import React, { useState } from 'react';
import Button from './components/SButton';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './components/Dialog';

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
  // 앱 컴포넌트 안에 상태 만들기
  const [dialog, setDialog] = useState(false);
  const onClick = () => setDialog(true);
  const onConfirm = () => setDialog(false);
  const onCancel = () => setDialog(false);

  return (
    // ThemeProvider 내부에선 하나의 컴포넌트만 있어야 한다.
    // 대체 방법 fragment 만들기
    <ThemeProvider theme={{ palette, sizes }}>
      <>
        <AppBlock>
          <Button color="pink" size="large" onClick={onClick}>
            삭제
          </Button>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
