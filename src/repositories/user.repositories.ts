import { User } from '../models/user.models';
import db from '../database';

export const getUsers = async (): Promise<User[]> => {
  const query = 'SELECT * FROM users';
  const result = await db.query(query);
  return result.rows;
}

export const getUserById = async (id: number): Promise<User> => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const result = await db.query(query, [id]);
  return result.rows[0];
}

export const getUserByEmail = async (email: string): Promise<User> => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
}

export const createUser = async (user: User): Promise<User> => {
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const result = await db.query(query, [user.name, user.email, user.password]);
  return result.rows[0];
}

export const updateUser = async (user: User): Promise<User> => {
  const query = 'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *';
  const result = await db.query(query, [user.name, user.email, user.password, user.id]);
  return result.rows[0];
}

export const deleteUser = async (id: number): Promise<User> => {
  const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
  const result = await db.query(query, [id]);
  return result.rows[0];
}