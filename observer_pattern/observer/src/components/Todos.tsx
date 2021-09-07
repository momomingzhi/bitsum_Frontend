/** @format */

import React from 'react';
import Todo from '../hooks/Todo';
import TodoList from '../TodoList';

interface IProps {
    todos: TodoList;
    index: number;
    addTodo(TodoList: TodoList, message: string): void;
}
// TodoList에서 모델 받아서 렌더링 해줌
const Todos: React.FC<IProps> = ({ todos, index, addTodo }) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        addTodo(todos, `${todos.getTodos().length}번째 테스트`);
    };
    return (
        <div className='todos'>
            <div>
                {todos.getTodos().map((todo, idx) => (
                    <Todo message={todo.getMessage()} key={idx} />
                ))}
            </div>
            <button className='button button-absolute' onClick={handleClick}>
                +
            </button>
        </div>
    );
};
export default Todos;
