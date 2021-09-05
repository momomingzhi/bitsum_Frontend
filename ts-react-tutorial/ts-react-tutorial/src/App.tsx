import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "MyForm";
import ReducerSample from "ReducerSampe";
const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  // return <MyForm onSubmit={onSubmit} />;
  return <ReducerSample />;
};

export default App;
