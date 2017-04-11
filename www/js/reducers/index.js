import * as types from '../actions/types';

const activeTour = ( state = {}, action = {} ) => {
  switch ( action.type ) {
    case types.ADD_TO_TOUR:
      state.tourItems = state.tourItems ?
        [ ...state.tourItems, action.item ] :
        [ action.item ];
      return state;

    default:
      return state;
  }
}

export default activeTour;
