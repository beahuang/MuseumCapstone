import * as types from '../actions/types';

const activeTour = ( state = {}, action = {} ) => {
  switch ( action.type ) {
    case types.ADD_TO_TOUR:
      let addedItems = state.tourItems ?
        [ ...state.tourItems, action.item ] :
        [ action.item ];
      return { ...state, tourItems: addedItems };

    case types.REMOVE_FROM_TOUR:
      let filteredItems = state.tourItems.filter( value => { return value !== action.item } );
      return { ...state, tourItems: filteredItems };

    default:
      state.tourItems = [];
      return state.tourItems = [];;
  }
}

export default activeTour;
