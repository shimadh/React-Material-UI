import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "./actionTypes";


export const authSetToken = (token, user) => {
  return {
    type: AUTH_SET_TOKEN,
    token: token,
    user: user
  };
};


export const removeToken = (token, user) => {
  return {
    type: AUTH_SET_TOKEN,
    token: token,
    user: user
  };
};