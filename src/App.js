import React from "react";
import Todo from "./Components/Todo/Todo";
import styled from 'styled-components';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  margin: 128px auto;
  padding-bottom: 32px;
  background-color: white;
  min-height: 515px;
  box-shadow: 0px 0px 50px -23px rgba(0,0,0,0.1);
`

function App() {
  return (
    <AppStyle>
      <Todo />
    </AppStyle>
  );
}

export default App;
