/** @format */

import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useTodo from './hooks/useTodo';
import Todos from './components/Todos';

function App() {
    const {
        todoListCollection,
        addTodoList,
        addTodo,
        allAddTodo,
        allRemoveTodo,
    } = useTodo();
    useEffect(() => {
        addTodoList();
    }, []);
    const handleClickAdd = (event: React.MouseEvent<HTMLElement>) => {
        allAddTodo('전체 추가');
    };
    const handleClickRemove = (event: React.MouseEvent<HTMLElement>) => {
        allRemoveTodo();
    };
    return (
        <div id='app' className='app'>
            <div className='collection'>
                {todoListCollection.map((todoList, index) => (
                    <Todos
                        todos={todoList}
                        index={index + 1}
                        addTodo={addTodo}
                        key={index}
                    />
                ))}
                <div>
                    <button className='button' onClick={addTodoList}>
                        콜렉션 추가
                    </button>
                    <button className='button' onClick={handleClickAdd}>
                        전체 추가
                    </button>
                    <button className='button' onClick={handleClickRemove}>
                        전체 삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
