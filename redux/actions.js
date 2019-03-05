import { CHANGE_NAME, INIT_DATA } from "./actionTypes";

export const initData = content => ({
  type: INIT_DATA,
  payload: {}
});

export const changeName = content => ({
  type: CHANGE_NAME,
  payload: {
    btnName: content
  }
});
