import { combineReducers } from 'redux'

let initialState0 = {name: 'RC0'};
let initialState1 = {name: 'RC1'};
let initialState2 = {name: 'old value in async'};

function changeName0(state = initialState0, action) {
  if (action.type === 'CHANGE_NAME0') {
    let obj = Object.assign({}, state, { name: action.payload });
    return obj;
  } else {
    return state
  }
}

function changeName1(state = initialState1, action) {
  if (action.type === 'CHANGE_NAME1') {
    let obj = Object.assign({}, state, { name: action.payload });
    return obj;
  } else {
    return state
  }
}

function asyncChangeValue(state = initialState2, action) {
  if (action.type === 'ASYNC_CHANGE_VALUE') {
    let obj = Object.assign({}, state, { name: action.payload });
    return obj;
  } else {
    return state
  }
}

export default combineReducers({
  btnName0: changeName0,
  btnName1: changeName1,
  asyncValue: asyncChangeValue
});
