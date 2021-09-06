/** @format */

import { useState } from "react";
import { Subject } from "../Observer";
import Todo from "../Todo";
import TodoList from "../TodoList";

const subject = new Subject();
const useTodo = () => {
  const [todoListCollection, setTodoListCollection] = useState<TodoList[]>([]);
  const reRender = (other: TodoList[] = []) => {
    setTodoListCollection([...todoListCollection, ...other]);
  };
  const addTodoList = () => {
    const todoList = new TodoList();
    reRender([todoList]);
    subject.registration(todoList);
  };
  const addTodo = (TodoLists: TodoList, message: string) => {
    TodoLists.add(message);
    reRender();
  };
  const allAddTodo = (message: string) => {
    subject.notifyAddTodo(message);
  };
  const allRemoveTodo = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      subject.notifyRemoveTodo();
      reRender();
    }
  };
  return {
    allAddTodo,
    allRemoveTodo,
    addTodo,
    addTodoList,
    todoListCollection,
  };
};
export default useTodo;
