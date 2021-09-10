/** @format */
import {createStore} fro 'redux'

//createstore는 스토어 만들어주는 함수
// 리액트에서 단 하나의 스토어를 만듭다

const intialState = {
    counter:0,
    text:'',
    list:[]
}
/*액션 타입 정의 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST';
/*액션 생성 함수 정의 */
function increase(){
    return{
        type:INCREASE // 액션 객체에는 type 값이 필수
    }
}
const decrease = () =>{
    type:DECREASE
}
const changeText = text => ({
    type: CHANGE_TEXT,
    text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
  });
  
  const addToList = item => ({
    type: ADD_TO_LIST,
    item
  });
  /* 리듀서 만들기 */
  //위 액션 생성 함수들 통해 만들어진 객체들 참조하여
  //새로운 상태 만드는 함수를 만들자!
  // 리듀서에서는 불변성 지켜줘야함
  function reducer(state = initialState, action) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1
        };
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        };
      default:
        return state;
    }
  }
  const store = createStore(reducer);

  console.log(store.getState());

  //스토어안에 들어있는 상태가 바뀔 때마다 호출되는 listner 함수
  const listener = () =>{
      const state = store.getState();
        console.log(state)
  }
  //구독 해제하고 싶을 때 unsubscribe 호출하면 된다
  const unsubscribe = store.subscribe(listener);

  store.dispatch(increase())
  store.dispatch(decrease())
  store.dispatch(changeText('안녕하세요'))
  store.dispatch(addToList({id:1,text:'hi'}))

