/** @format */

import { useState } from 'react';
import { Subject } from '../Observer';
import Todo from '../Todo';
import TodoList from '../TodoList';

// subject를 받아 hooks 밖에 생성
// 밖에 생성하는 이유: 컴포넌트가 렌더링 될때마다 새로 custom hooks 호출하기 때문에
// hooks안에 넣으면 계속 동적 할당하여 초기화함
const subject = new Subject();
const useTodo = () => {
    const [todoListCollection, setTodoListCollection] = useState<TodoList[]>(
        []
    );
    const reRender = (other: TodoList[] = []) => {
        setTodoListCollection([...todoListCollection, ...other]);
    };
    // TodoList 모델을 생성하면서 registration으로 subject에 등록
    const addTodoList = () => {
        const todoList = new TodoList();
        reRender([todoList]);
        subject.registration(todoList);
    };
    const addTodo = (TodoLists: TodoList, message: string) => {
        TodoLists.add(message);
        reRender();
    };
    const allAddTodo = (message: string) => {
        subject.notifyAddTodo(message);
        reRender();
    };
    const allRemoveTodo = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            subject.notifyRemoveTodo();
            reRender();
        }
    };
    return {
        allAddTodo,
        allRemoveTodo,
        addTodo,
        addTodoList,
        todoListCollection,
    };
};
export default useTodo;
