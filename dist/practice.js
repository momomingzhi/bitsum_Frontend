"use strict";
// let count = 0;
// count += 1;
// const done:boolean = false;
// const number: number[] = [1,2,3];
// const messages: string[] = ['hello','word'];
// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;
// let color : 'red' | 'orange' = 'red';
// color = 'orange';
function sum(x, y) {
    return x + y;
    //:number라고 정해줘서 반환하는 값의 타입도 정해줄 수 있어
}
var res = sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    return 4;
}
