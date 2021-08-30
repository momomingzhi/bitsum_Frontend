function merge(a: any, b: any) {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 2 });
/*
function merge(a:object,b:object){
    return{
        ...a,
        ...b
    };
}
해도 되지만 generics라는거 쓰면 돼
*/
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 2, footbar: 3 });

//param의 타입이 정해져있지 않을때
function wrap<T>(param: T) {
  return {
    param,
  };
}
//param으로 어떤 값도 쓸 수 있어
const wrapped = wrap("aaa");
wrapped.param; //string으로 타입 나와
const wrapped = wrap(1);

interface Items<T> {
  list: T[];
}

const items: Items<stirng> = {
  list: ["a", "b", "c"],
};
const items: Items<number> = {
  list: ["a", "b", "c"],
};
interface Items<T, V> {
  list: T[];
  value: V;
}
const items: Items<number> = {
  list: ["a", "b", "c"],
  value: "aaa",
};
//class에서 generic 사용하는 법
class Queue<T> {
  list: T[] = []; //list의 타입은 T로 이루어진 배열이다
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
while (queue.length > 0) {
  console.log(queue.dequeue());
}
