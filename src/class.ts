interface User{
    name:string;
}
interface Product{
    id:string;
    price:number;
}
class Cart{
    protected user:User;
    private store:Object; //private 하면 내부에서만 접근할 수 있어
    constructor(user:User){
        this.user = user;
        this.store = {};
    }
    put(id:string,product:Product){
        this.store[id] = product;
    }
    get(id:string){
        return this.store[id];
    }
}
class PromotionCart extends Cart{
    addPromotion(){
        this.user; //protected면 접근 가능
    }
}
const cart2 = new PromotionCart({name:'john'});
cart2.
//private protected는 인스턴스에서 접근할 수 없어 carJon.XX 이렇게
const carJon = new Cart({name:"john"})

class Cart2{
    constructor(protected user:User,private store: object={}){
        this.user = user; //매개변수에 protected 써주면 매개변수 + 접근제한자 쓰면 속성이 정의됨과 동시에 cart 속성에 할당까지 해줌
        this.store = store;
    }

}