import {
  addNewTodo,
  changeTodo,
  findAllIncompletes,
  findAllCompletes,
  dropTodo,
} from "./todo.repository.js";

export const addTodo = async (todoData) => {
  const addedTodo = await addNewTodo(todoData);

  return addedTodo;
};

export const getAllIncompletes = async () => {
  const incompleted = await findAllIncompletes();

  return incompleted;
};

export const getAllCompletes = async () => {
  const completed = await findAllCompletes();

  return completed;
};

export const updateTodo = async (todoId, todoData) => {
  const updated = await changeTodo(todoId, todoData);

  return updated;
};

export const deleteTodo = async (todoId) => {
  const deleted = await dropTodo(todoId);

  return deleted;
};
