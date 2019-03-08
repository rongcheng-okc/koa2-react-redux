export const initData = content => ({
  type: 'INIT_DATA',
  payload: {}
});

export const changeName0 = content => {
  return {
    type: 'CHANGE_NAME0',
    payload: content
  }
};

export const changeName1 = content => {
  return {
    type: 'CHANGE_NAME1',
    payload: content
  }
};
