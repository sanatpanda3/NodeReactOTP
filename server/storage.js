import { isArray } from 'util';
import { generateTOTP } from './otp';

const fs = require('fs');

const storagePath = './storage';
const usersPath = `${storagePath}/users.json`;

const initialUsers = {
  sanat: {
    username: 'sanat',
    password: 'sanat',
  },
  user1: {
    username: 'user1',
    password: 'user1',
  },
  user2: {
    username: 'user2',
    password: 'user2',
  },
  user3: {
    username: 'user3',
    password: 'user3',
  },
  user4: {
    username: 'user4',
    password: 'user4',
  },
  user5: {
    username: 'user5',
    password: 'user5',
  },
};

export function initStorage() {
  if (!fs.existsSync(storagePath)) fs.mkdirSync(storagePath);
  if (!fs.existsSync(usersPath)) setUsers(initialUsers);
}

export function getUser(username) {
  return getUsers()[username];
}

export function setUser(user) {
  const users = getUsers();
  users[user.test] = 'this is a test';
  users[user.username] = user;
  setUsers(users);
}

function getUsers() {
  let users;
  if (fs.existsSync(usersPath)) {
    users = JSON.parse(fs.readFileSync(usersPath).toString());
  }
  return users || {};
}

function setUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}
