import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './components/Dialog';
import Button from './components/ThemeProvider/Button';

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


function App() {
  return (
    <>
     <ThemeProvider
       theme={{
         palette: {
           blue: '#228be6',
           gray: '#485057',
           pink: '#f06595'
         }
       }} 
     >
       <AppBlock>
         <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
         </ButtonGroup>
         <ButtonGroup>
          <Button color="gray" size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="small">BUTTON</Button>
         </ButtonGroup>
         <ButtonGroup>
          <Button color="pink" size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button color="pink" size="small">BUTTON</Button>
         </ButtonGroup>
         <ButtonGroup>
          <Button size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button color="pink" size="small" outline>BUTTON</Button>
         </ButtonGroup>
         <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
       </AppBlock>
       <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
       >
         데이터를 정말로 삭제하시겠습니까?
       </Dialog>
     </ThemeProvider>
    </>
  )
}

export default App;