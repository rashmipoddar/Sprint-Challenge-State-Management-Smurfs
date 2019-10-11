import { START_FETCHING_SMURFS, FETCH_SMURFS_SUCCESSFUL, FETCH_SMURFS_FAILED } from '../actions';

const initialState = {
  error: '',
  isFetching: false,
  smurfs: []
};

export const getSmurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_SMURFS :
      return {
        ...state, 
        isFetching: true,
      }
    case FETCH_SMURFS_SUCCESSFUL : 
      return {
        ...state, 
        isFetching: false,
        smurfs: action.payload
      }
    case FETCH_SMURFS_FAILED : 
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
}