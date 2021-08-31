/** @format */

function add(x: number, y: number): number {
    return x + y;
}
//add(1,"2") 라고 하면 두번째 인자 에러 발생
const result = add(1, 2);

function buildUserInfo(name: string = '-', email: string = '-') {
    //name="-",email="-"
    return {
        name,
        email,
    };
}
const user = buildUserInfo(); //기본값없으면 인수 없다고 에러남

const add2 = (a: number, b: number): number => a + b;

interface Storage {
    a: string;
}
interface ColdStorage {
    b: string;
}
//overload 시그니처
// function store(type: '통조림'): Storage {}
// function store1(type: '아이스크림'): ColdStorage {}

function store2(type: '통조림' | '아이스크림') {
    if (type === '통조림') {
        return { a: '통조림' };
    } else if (type === '아이스크림') {
        return { b: '아이스크림' };
    } else {
        throw new Error('unsopported type');
    }
}
