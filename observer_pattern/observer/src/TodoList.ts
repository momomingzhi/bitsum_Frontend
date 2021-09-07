/** @format */

import { IRemovable, RemoveState } from './models/Removable';
import { IObserver } from './Observer';
import Todo from './Todo';
// import {RemoveState,IRemovable} from './models/Removable'
// import {IObserver} from './Observer'
// TodoList는 Subject에서 제공한 함수를 동작시키기 위해 observer interface 구현한다
// 그래서 이 TodoList를 받아 Observer collection에서 동작시킨다.
class TodoList implements IRemovable, IObserver {
    private readonly todos: Todo[];
    private removeState: RemoveState;
    constructor() {
        this.todos = [new Todo('테스트')];
        this.removeState = RemoveState.IDLE;
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.notifyAddTodo = this.notifyAddTodo.bind(this);
        this.notifyRemoveTodo = this.notifyRemoveTodo.bind(this);
    }

    getTodos() {
        return this.todos.filter(
            (todo) => todo.getRemoveState() !== RemoveState.REMOVE
        );
    }
    add(message: string) {
        this.todos.push(new Todo(message));
    }
    remove() {
        if (this.removeState !== RemoveState.REMOVE) {
            this.removeState = RemoveState.REMOVE;
        }
    }
    getRemoveState() {
        return this.removeState;
    }
    notifyAddTodo(message: string) {
        this.add(message);
    }
    notifyRemoveTodo() {
        this.todos.forEach((todo) => {
            todo.remove();
        });
    }
}
export default TodoList;
