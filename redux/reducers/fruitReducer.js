import { ADD_FRUIT, } from '../actions/fruitActions';

const initalData = [
  'apple',
];

export default function(state = initalData, action) {
  switch (action.type) {
    case ADD_FRUIT: {
      return {
        ...state,
        fruits: [...state.fruits, action.payload]
      }
    }

    default:
      return state;
  }  
}
