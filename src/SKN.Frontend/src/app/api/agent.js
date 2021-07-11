import React from "react";
import { axios } from "axios";

axios.defaults.baseURL = `${process.env.API}/api`;

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const User = {
  login: (loginAccount) => requests.post(`/user/login/`, loginAccount),
};

export const agent = {
  User
};
