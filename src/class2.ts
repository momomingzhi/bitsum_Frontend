interface Person {
  name: string;
  say(): void;
}
interface Programmer {
  writeCode(requirment: string): string;
}
class KoreanProgrammers implements Person, Programmer {
  constructor(public name: string) {}
  say(): void {
    console.log("hi");
  }
  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + "....";
  }
  loveKimchi() {
    console.log("love kimchi");
  }
}
const jay = new KoreanProgrammers("jay");

abstract class Korean implements Person {
  public abstract jumin: number;
  constructor(public name: string) {}
  say() {
    console.log("ㅇㅇㅇ");
  }
  abstract loveKimchi(): void;
}
class KoreanProgrammer extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    super(name);
  }
  say(): void {
    console.log("hi");
  }
  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + "....";
  }
  loveKimchi() {
    console.log("love kimchi");
  }
}
const jays = new KoreanProgrammer("jay", 222);
//const jay3 = new Korean('jay2') 추상클래스는 인스턴스 만들 수 없음
