/** @format */
// 상태에 대한 enum값
export enum RemoveState {
    IDLE = 0,
    REMOVE,
}
// 삭제 가능한 객체인지 알려주는 interface
export interface IRemovable {
    getRemoveState(): RemoveState;
    remove(): void;
}
