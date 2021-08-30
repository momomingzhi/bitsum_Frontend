interface Person{
    name: string;
    age?: number; //? age가 있을수도 있고 없을 수도 있다는 의미
}
interface Developer{
    name: string;
    age?: number;
    skills:string[]
}
const person: Person = {
    name:'아아',
    age:5,
    skills:['java'] //인터페이스에 없는 프로퍼티인데 들어왔다고 에러남
}
const expert : Developer = {
    name:'김개발',
    skills:['java']
}
//위의 경우 person과 developer 의 프로퍼티가 겹치니까
interface Developer extends Person{
    skills:string[]
}
//이렇게 해주면됨

//타입 alias
type Person{
    name:string;
    age?:number;
}
type Developer = Person & {
    skills:string[]
}
type People = Person[];
const people: People = [ person,expert]