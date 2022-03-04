import React from 'react'
import styled from 'styled-components';

const TodoDateStyle = styled.div`
    display: flex;
    width: 82%;
    height: 25%;
    justify-content: space-between;
    margin: -202px auto 10px; 
    color: #6c6c6c;
    font-family: 'Prompt', sans-serif;
`;

const InnerTodoDateStyle = styled.div`
    width: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
`;

const DateStyle = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 1.9em;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
`;

const MonthYearStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2px;
    justify-content: center;
    align-items: center;
    font-size: 0.4em;
`;

const Month = styled.p`
    margin: 0;
    font-weight: 500;
    text-transform: uppercase;
`;

const Year = styled.p`
    margin: 0;
`;

const Day = styled.div`
    display: flex;
    width: 80%;
    text-transform: uppercase;
    justify-content: flex-end;
    align-items: center;
    font-size: -0.5em;
    font-weight: 500;
    padding: 5px;
    right: 0;
`;

function TodoDate() {

    const date = ("0" + new Date().getDate()).slice(-2);
    const month = new Date().toLocaleDateString('en-US', {month: 'short'});
    const year = new Date().toLocaleDateString('en-US', {year: 'numeric'});
    const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});

    return (
        <TodoDateStyle>
            <InnerTodoDateStyle>
                <DateStyle>{date}
                    <MonthYearStyle>
                        <Month>{month}</Month>
                        <Year>{year}</Year>
                    </MonthYearStyle>
                </DateStyle>
            </InnerTodoDateStyle>
            <Day>{day}</Day>
        </TodoDateStyle>
    )
}

export default TodoDate;