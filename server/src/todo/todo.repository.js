import prisma from "../db/index.js";

export const addNewTodo = async (todoData) => {
  const todo = await prisma.todos.create({
    data: {
      text: todoData.text,
      deadline: new Date(todoData.deadline),
      authorId: todoData.authorId,
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return todo;
};

export const findAllIncompletes = async (userId) => {
  const todos = await prisma.todos.findMany({
    where: {
      authorId: userId,
      isComplete: false,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return todos;
};

export const findAllCompletes = async (userId) => {
  const completed = await prisma.todos.findMany({
    where: {
      authorId: userId,
      isComplete: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return completed;
};

export const changeTodo = async (id, todoData) => {
  const updated = await prisma.todos.update({
    where: {
      id: parseInt(id),
    },
    data: {
      isComplete: todoData.isComplete,
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return updated;
};

export const dropTodo = async (id) => {
  const deleted = await prisma.todos.delete({
    where: {
      id: parseInt(id),
    },
  });

  return deleted;
};
