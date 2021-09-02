/** @format */

interface User {
    name: string;
}
interface Action {
    do(): void;
}
type UserAction = User & Action; //intersection 타입으로 정의
function createUserAction(): UserAction {
    return {
        do() {},
        name: '',
    };
}
type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;
type User2 = {
    name: string;
    login(): boolean;
};
class UserImpl implements User2 {
    login(): boolean {
        throw new Error('');
    }
    name: string;
}
type UserState = 'Pending' | 'Approved' | 'Rejected';
function checkUser(user: User2): UserState {
    if (user.login()) {
        return 'Approved';
    } else {
        return 'Rejected';
    }
}
