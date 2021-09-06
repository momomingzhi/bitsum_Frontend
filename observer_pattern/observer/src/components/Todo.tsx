/** @format */

import React from 'react';
interface Iprops {
    message: string;
}
const Todo: React.FC<Iprops> = ({ message }) => {
    return <div>{message}</div>;
};
export default Todo;
