/** @format */

//promise에 기반한 thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    //이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성
    //만약 여러 종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 된다
};
