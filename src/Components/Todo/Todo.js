import TodoDate from '../TodoDate/TodoDate';
import TodoContent from '../TodoContent/TodoContent';
import TodoAddButton from '../TodoAddButton/TodoAddButton';
import TodoStyle from '../../styled/todo';

const contentData = [
    { id: 1, data: "Buy new sweatshirt" },
    { id: 2, data: "Begin promotional phase" },
    { id: 3, data: "Read an article" },
    { id: 4, data: "Try not to fall asleep" },
    { id: 5, data: "Watch 'Sherlock'" },
    { id: 6, data: "Begin a QA for the product" },
    { id: 7, data: "Go for a walk" },
];

function Todo() {
    return (
        <TodoStyle>
            <TodoDate />
            <TodoContent data={contentData}/>
            <TodoAddButton />
        </TodoStyle>
    )
}

export default Todo;