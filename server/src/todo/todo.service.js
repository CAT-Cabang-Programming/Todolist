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

export const getAllIncompletes = async (userId) => {
  const incompleted = await findAllIncompletes(userId);

  return incompleted;
};

export const getAllCompletes = async (userId) => {
  const completed = await findAllCompletes(userId);

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
