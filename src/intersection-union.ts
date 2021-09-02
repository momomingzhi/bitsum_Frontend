/** @format */

interface User {
    name: string;
}
interface Action {
    do(): void;
}
function createUserAction(u: User, a: Action): User & Action {
    //두 타입 합쳐서 return 한걸 User & Action으로 표현
    return { ...u, ...a };
}
const u = createUserAction({ name: 'hay' }, { do() {} });
function compare(x: string | number, y: string | number) {
    // | 쓴게 union 타입 문자열과 number 둘 다 에서 쓸 수 있는 함수만 나와
    //u.valueOf or toString
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v = compare(1, 2);
const s = compare('1', '2');
console.log([3, 2, 1].sort(compare)); //넘버
console.log(['3', '2', '1'].sort(compare)); //string

//action의 타입 체크하는 함수
function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined;
}
function process(v: User | Action) {
    /*if((<Action>v).do){
        //v.do : v는 union 타입이라 공통된 멤버만 접근할 수 있어 
        //v가 action이라는 타입으로 어셜선? 되어서 
        //(<Action>v).do = 이런식으로 써야해
    }*/
    if (isAction(v)) {
        v.do();
    } else {
        console.log(v.name);
    }
}
