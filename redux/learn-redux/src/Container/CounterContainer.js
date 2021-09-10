/** @format */

import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

//컨테이너 컴포넌트 만들기
//컨테이너 컴포넌트란 리덕스 스토어의 상태를 조회하거나 액션을 디스패치 할 수 있는 컴포넌트 의미
function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook
    //state값은 store.getstate()함수를 호출했을때 나타나는 결과물과 동의
    // useSelector 통해 매번 렌더링 될 때마다 새로운 객체 만들어서
    //상태 바뀌었는지 안바뀌었는지 확인 할 수 없어서 낭비 렌더링 이루어짐
    /*
        const number = useSelector(state => state.counter.number);
        const diff = useSelector(state => state.counter.diff);
        값 하나 바뀌었을때만 컴포넌트가 렌더링됨
    
    */
    const { number, diff } = useSelector(
        (state) => ({
            number: state.counter.number,
            diff: state.counter.diff,
        }),
        shallowEqual
    );
    //shallowEqual : 이전 값 비교해서 true 나오면 리렌더링하지 않고 false나오면 렌더링
    //react-redux 내장함수로 객체 안의 가장 겉에 있는 값들을 모두 비교해줌
    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 hook
    /*
        const object = {
            a: {
                x: 3,
                y: 2,
                z: 1
            },
            b: 1,
            c: [{ id: 1 }]
        }
        가장 겉에 있는 값은 object.a, object.b, object.c 입니다. shallowEqual 에서는 해당 값들만 비교하고 object.a.x 또는 object.c[0] 값은 비교하지 않는다
        
    */
    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = () => dispatch(setDiff(diff));

    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}
export default CounterContainer;
