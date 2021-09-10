/** @format */
//루트 리듀서 만들기
//현재 두가지의 리덕스 모듈 만들었다 === 리듀서 두개
//한 프로젝트에 여러개의 리듀서가 있을 때 이를 한 리듀서로 합쳐서 사용
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
