import * as types from '../actions/types';

const initialState = {
  tourItems: [],
  isTourActive: false
}

const activeTour = ( state = initialState, action = {} ) => {
  switch ( action.type ) {
    case types.ADD_TO_TOUR:
      let addedItems = state.tourItems ?
        [ ...state.tourItems, action.item ] :
        [ action.item ];
      return { ...state, tourItems: addedItems };

    case types.REMOVE_FROM_TOUR:
      let filteredItems = state.tourItems.filter( value => { return value !== action.item } );
      return { ...state, tourItems: filteredItems };

    case types.SET_TOUR_ACTIVE:
      return { ...state, isTourActive: action.isTourActive }

    default:
      return state;
  }
}

export default activeTour;
