/** @format */

import { IRemovable, RemoveState } from './models/Removable';
// TODO 객체를 추상화한 Todo 클래스
class Todo implements IRemovable {
    private removeState: RemoveState;
    private readonly message: string;
    constructor(message: string) {
        this.removeState = RemoveState.IDLE;
        this.message = message;
        this.remove = this.remove.bind(this);
    }
    getMessage() {
        return this.message;
    }
    getRemoveState() {
        return this.removeState;
    }
    remove() {
        if (this.removeState !== RemoveState.REMOVE) {
            this.removeState = RemoveState.REMOVE;
        }
    }
}
export default Todo;
