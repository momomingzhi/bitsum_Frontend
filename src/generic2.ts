interface DB<T> {
  add(v: T): void;
  get(): T;
}
class D<T> implements DB<T> {
  //class랑 implements 둘다 T 정의해줘야함
  add(v: T): void {
    throw new Error("");
  }
  get(): T {
    throw new Error("");
  }
}
interface JSONSerialier {
  serialize(): string;
}
class LocalDB<T extends JSONSerialier> implements DB<T> {
  constructor(private localStrogeKey: string) {}
  add(v: T) {
    v.serialize();
    localStorage.setItem(this.localStrogeKey, JSON.stringify(v));
  }
  get(): T {
    const v = localStorage.getItem(this.localStrogeKey);
    return v ? JSON.parse(v) : null;
  }
}
interface User {
  name: string;
}
/*
const userDb = new LocalDB<User>("user");
userDb.add({ name: "jay" });
const userA = userDb.get();*/

//조건부 타입
interface Vegitable {
  v: string;
}
interface Meat {
  m: string;
}
interface Cart2<T> {
  //범위 지정하고 싶을때 T extends interface이름
  getItem(): T extends Vegitable ? Vegitable : Meat;
}
const cart1: Cart2<Vegitable> = {
  getItem() {
    return {
      v: "",
    };
  },
};
cart1.getItem(); //이건 Vegitable이됨
