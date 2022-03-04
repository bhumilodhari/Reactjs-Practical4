import { useState } from 'react';
import styled from 'styled-components';

const TodoListStyle = styled.li`
    list-style-type: none;
    font-size: 0.9em;
    color: #54575f;
`;

const TodoListItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

const IsChecked = styled.div`
    align-items: center;
`;

const TodoCheckBox = styled.input`
    width: 1.8em;
    height: 1.8em;
    background-color: white;
    align-items: center;
    border-radius: 50%;
    vertical-align: middle;
    border: 2.5px solid gray;
    color: black;
    appearance: none; 
    outline: none;
    cursor: pointer;
;`

function TodoList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  }
  return (
    <TodoListStyle>
      <TodoListItems>
        <IsChecked style={isChecked ? { color: '#c2c2c2' } : { color: '#54575f' }}>{props.data}</IsChecked>
        <TodoCheckBox style={isChecked ? { border: '2.5px solid #3adfa2' } : { backgroundColor: 'white' }} type="checkbox" id={props.id} onChange={checkHandler}></TodoCheckBox>
      </TodoListItems>
    </TodoListStyle>
  )
}

export default TodoList;