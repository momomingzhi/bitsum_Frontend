import React from "react";
interface IProps {
  message: string;
}
const Todo: React.FC<IProps> = ({ message }) => {
  return <div>{message}</div>;
};
export default Todo;
