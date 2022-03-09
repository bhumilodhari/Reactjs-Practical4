import { useState } from 'react';
import { FaRegDotCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';
import TodoListStyle from '../../styled/TodoList/todoListStyle';
import TodoListItems from '../../styled/TodoList/todoListItems';
import IsChecked from '../../styled/TodoList/isChecked';
import TodoCheckBox from '../../styled/TodoList/todoCheckBox';

function TodoList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  }
  return (
    <IconContext.Provider value={{ className: isChecked ? "completed" : "checks" }}>
      <TodoListStyle>
        <TodoListItems>
          <IsChecked isChecked={isChecked}>{props.data}</IsChecked>
          <TodoCheckBox  type="checkbox" id={props.id} onClick={checkHandler}> <FaRegDotCircle /></TodoCheckBox>
        </TodoListItems>
      </TodoListStyle>
    </IconContext.Provider>
  )
}



export default TodoList;