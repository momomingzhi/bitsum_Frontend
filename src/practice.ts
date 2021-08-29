// let count = 0;
// count += 1;

// const done:boolean = false;

// const number: number[] = [1,2,3];
// const messages: string[] = ['hello','word'];

// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;

// let color : 'red' | 'orange' = 'red';
// color = 'orange';

function sum(x: number, y: any): number {
  return x + y;
  //:number라고 정해줘서 반환하는 값의 타입도 정해줄 수 있어
}
const res = sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void | string | number {
  return 4;
}
