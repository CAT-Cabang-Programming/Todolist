import { addUser, findUserByUsername } from "./user.repository.js";

export const createUser = async (userData) => {
  const newUser = await addUser(userData);

  return newUser;
};

export const getUserByName = async (userName) => {
  const foundUser = await findUserByUsername(userName);

  return foundUser;
};
