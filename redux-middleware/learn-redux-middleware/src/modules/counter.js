/** @format */
import { delay, put, takeEvery } from 'redux-saga/effects';
// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';
// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => () => {
    //setTimeout(() => dispatch(increase()), 1000);
    return { type: INCREASE_ASYNC };
};
export const decreaseAsync = () => () => {
    //setTimeout(() => dispatch(decrease()), 1000);
    return { type: DECREASE_ASYNC };
};

function* increaseSaga() {
    yield delay(1000); //1초 기다림
    yield put(increase()); //put은 특정 액션을 디스패치 해줌
}

function* decreaseSaga() {
    yield delay(1000); //1초 기다림
    yield put(decrease()); //put은 특정 액션을 디스패치 해줌
}
export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); //모든 INCREASE_ASNC 액션 처리
    yield takeEvery(DECREASE_ASYNC, decreaseSaga); //가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만 처리
}
// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
