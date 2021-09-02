/** @format */

interface Props {
    name: string;
    [key: string]: string;
    //boolean은 쓸 수 없다
    //key가 인덱스 타입..
}
const p: Props = {
    name: 'egeg', //name 꼭 넣어줘야해 interface에 선언되어있으면
    a: 'd',
    b: 'e',
    //c:3 숫자 3 주면 에러남
    c: '3',
    0: 'd',
    1: 'b',
};
p['a'];
p[0]; //둘 다 가능

let keys: keyof Props;
interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}
let keyOfUser: keyof User;
keyOfUser = 'age';
let helloMethod: User['hello'];
//hello 타입의 메서드에만 뭔가 선언할 수 있어
//helloMethod = "d"
