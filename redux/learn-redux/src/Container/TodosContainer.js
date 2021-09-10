/** @format */

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';
function TodosContainer() {
    // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
    // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
    // useSelector 사용해서 리덕스 스토어의 상태 조회할 때 상태 바뀌지 않으면 리렌더링 안함
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}
export default TodosContainer;
