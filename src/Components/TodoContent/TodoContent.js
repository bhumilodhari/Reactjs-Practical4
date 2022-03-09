import TodoList from "../TodoList/TodoList";
import TodoContainer from "../../styled/todoContent";

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