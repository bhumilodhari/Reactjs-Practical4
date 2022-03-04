import TodoList from "../TodoList/TodoList";
import styled from 'styled-components';

const TodoContainer = styled.ul`
    padding-inline-start: 0;
    margin: auto;
    height: 218px;
    width: 86%;
    text-align:left;
    padding: auto;
`;

function TodoContent(props) {
    return (
        <TodoContainer>
            {props.data.map((dummy) => (
                <TodoList key={dummy.id} id={dummy.id} data={dummy.data} />
            ))}
        </TodoContainer>
    )
}

export default TodoContent;