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

export const findAllIncompletes = async () => {
  const todos = await prisma.todos.findMany({
    where: {
      isComplete: false,
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

export const findAllCompletes = async () => {
  const completed = await prisma.todos.findMany({
    where: {
      isComplete: true,
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
      id,
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
      id,
    },
  });

  return deleted;
};
