import { START_POSTING_SMURF, POST_SMURF_SUCCESSFUL, POST_SMURF_FAILED } from '../actions';

const initialState = {
  error: '',
  isPosting: false,
};

export const postSmurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_POSTING_SMURF :
      return {
        ...state, 
        isPosting: true,
      }
    case POST_SMURF_SUCCESSFUL : 
      return {
        ...state, 
        isPosting: false,
        error: ''
      }
    case POST_SMURF_FAILED : 
      return {
        ...state, 
        isPosting: false,
        error: action.payload
      }
    default: 
      return state;
  }
}