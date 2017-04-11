import * as types from '../actions/types';

export const addToTour = ( item ) => {
  return {
    type: types.ADD_TO_TOUR,
    item: item,
  }
}
