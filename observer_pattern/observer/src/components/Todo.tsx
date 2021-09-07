/** @format */

import React from 'react';
interface Iprops {
    message: string;
}
// mesg만 props로 받아서 렌더링
const Todo: React.FC<Iprops> = ({ message }) => {
    return <div>{message}</div>;
};
export default Todo;
