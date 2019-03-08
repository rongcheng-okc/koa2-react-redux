import { combineReducers } from 'redux'

let initialState0 = {name: 'RC0'};
let initialState1 = {name: 'RC1'};

function changeName0(state = initialState0, action) {
  if (action.type === 'CHANGE_NAME0') {
    let obj = Object.assign({}, state, { name: action.payload });
    return obj;
  } else {
    return state
  }
}

function changeName1(state = initialState1, action) {
  console.log(action);
  if (action.type === 'CHANGE_NAME1') {
    console.log(state);
    let obj = Object.assign({}, state, { name: action.payload });
    return obj;
  } else {
    console.log(state);
    return state
  }
}

export default combineReducers({
  btnName0: changeName0,
  btnName1: changeName1
})
