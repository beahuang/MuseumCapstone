import * as types from '../actions/types';

export const addToTour = item => {
  return {
    type: types.ADD_TO_TOUR,
    item: item,
  }
}

export const removeFromTour = item => {
  return {
    type: types.REMOVE_FROM_TOUR,
    item: item,
  }
}

export const setTourActive = bool => {
  return {
    type: types.SET_TOUR_ACTIVE,
    isTourActive: bool
  }
}

export const createTour = tour => {
  return {
    type: types.CREATE_TOUR,
    tour: tour
  }
}
