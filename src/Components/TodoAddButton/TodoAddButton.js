import React from 'react';
import styled from 'styled-components';

const TodoAddButtonStyle = styled.button`
    border: none;
    background-color: #3adfa2;
    color: #8c8c8c;
    height: 88px;
    width: 88px;
    border-radius: 55%;
    align-items: center;
    position: absolute;
    font-size: 35px;
    top: 275px;
    left: 36.5%;
    margin-bottom: -100px;
`;

function TodoAddButton() {
    return (
        <TodoAddButtonStyle>+</TodoAddButtonStyle>
    )
}

export default TodoAddButton;