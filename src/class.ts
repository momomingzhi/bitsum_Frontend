interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}
class Cart {
  protected user: User;
  private store: Object; //private 하면 내부에서만 접근할 수 있어
  constructor(user: User) {
    this.user = user;
    this.store = {};
  }
  put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}
class PromotionCart extends Cart {
  addPromotion() {
    this.user; //protected면 접근 가능
  }
}
const cart2 = new PromotionCart({ name: "john" });
//private protected는 인스턴스에서 접근할 수 없어 carJon.XX 이렇게
const carJon = new Cart({ name: "john" });

class Cart2 {
  constructor(protected user: User, private store: object = {}) {
    this.user = user; //매개변수에 protected 써주면 매개변수 + 접근제한자 쓰면 속성이 정의됨과 동시에 cart 속성에 할당까지 해줌
    this.store = store;
  }
}
class Stack {
  private data: any[] = [];
  constructor() {}
  push(item: any): void {
    this.data.push(item);
  }
  pop(): any {
    return this.data.pop();
  }
}
//any를 이용하면 저장하고 있는 자료의 타입이 모두 같지 않다는 문제점이 생김
const stack = new Stack();
stack.push(1);
stack.push("1");
stack.pop().substring(0); // 'a'
stack.pop().substring(0); // Throw TypeError
//이런 경우 자료 추출할때 항상 타입 검사해줘야해
//number 타입의 변수만 받을 수 있게 하면 범용성 떨어짐
class Stacks<T> {
  //제너릭 타입을 사용하겠다는 의미
  private data: T[] = [];
  constructor() {}
  push(item: T): void {
    this.data.push(item);
  }
  pop(): T {
    return this.data.pop();
  }
}
const numberStack = new Stacks<number>();
const stringStack = new Stacks<string>();
numberStack.push(1);
stringStack.push("a");

//함수일때
function first(arr: any[]): any {
  return arr[0];
}
function firsts<T>(arr: T[]): T {
  return arr[0];
}
firsts<number>([1, 2, 3]);
