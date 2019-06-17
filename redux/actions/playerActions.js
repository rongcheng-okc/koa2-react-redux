export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';

export const addPlayer = content => {
  return {
    type: ADD_PLAYER,
    payload: content
  }
};

export const updatePlayer = content => {
  return {
    type: UPDATE_PLAYER,
    payload: content
  }
};

export const deletePlayer = content => {
  return {
    type: DELETE_PLAYER,
    payload: content
  }
};
