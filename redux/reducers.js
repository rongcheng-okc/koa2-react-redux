import { combineReducers } from 'redux'

let initialState0 = 'RC0';
let initialState1 = 'RC1';

function initData(state = initialState0, action) {
  return state;
}

function changeName(state = initialState1, action) {
  if (action.type === 'CHANGE_NAME') {
    return Object.assign({}, state, { age: action.payload.btnName })
  } else {
    console.log(state);
    return state
  }
}

export default combineReducers({
  btnName: initData,
  btnName1: changeName
})
