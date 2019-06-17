import { ADD_PLAYER, UPDATE_PLAYER, DELETE_PLAYER, } from '../actions/playerActions';

const initalData = [
  { id: 0, name: 'Rusell WestBrook', number: 0, },
  { id: 1, name: 'LeBron James', number: 23, },
  { id: 2, name: 'Kawhi Leonard', number: 2, },
];

export default function (state = initalData, action) {
  switch (action.type) {
    case ADD_PLAYER: {
      return [
        ...state,
        action.payload
      ]
    }

    default:
      return state;
  }

}
