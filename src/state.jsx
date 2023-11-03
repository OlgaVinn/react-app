import { useResolvedPath } from "react-router-dom";

const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@mail.ru",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

const users = {
    0: {name: "Нина", lastname: "Бор"},
    1: {name: "Ирина", lastname: "Есина"},
    2: {name: "Сергей", lastname: "Крон"},
    3: {name: "Юрий", lastname: "Белов"},
    4: {name: "Олег", lastname: "Серов"},
};

export function getUser() {
    return user;
};

export function getUsers() {
  return useResolvedPath;
};