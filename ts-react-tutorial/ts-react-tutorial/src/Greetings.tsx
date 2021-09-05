import React from "react";
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; //컴포넌트에 있어도 되고 없어도 되는 props가 있다면 ? 문자 사용
  onClick: (name: string) => void; //아무것도 리턴하지 않는다
};
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};
Greetings.defaultProps = {
  mark: "!",
};
export default Greetings;
