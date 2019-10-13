import { 
  START_FETCHING_SMURFS, 
  FETCH_SMURFS_SUCCESSFUL, 
  FETCH_SMURFS_FAILED,
  POST_SMURF, 
  DELETE_SMURF
} from '../actions';

const initialState = {
  error: '',
  isFetching: false,
  smurfs: [],
};

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_SMURFS : {
      return {
        ...state, 
        isFetching: true,
      }
    }
    case FETCH_SMURFS_SUCCESSFUL : {
      return {
        ...state, 
        isFetching: false,
        smurfs: action.payload
      }
    }
    case FETCH_SMURFS_FAILED : {
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      }
    }
    case POST_SMURF : {
      const error = action.payload.error;
      const smurf = action.payload.smurf;
      const isPosting = action.payload.isPosting;
      if (smurf !== null) {
        return {
          ...state, 
          smurfs: smurf
        } 
      } else if (error !== null ){
        return {
          ...state, 
          error : error 
        }  
      } else {
        return {
          ...state
        }  
      }
    }
    case DELETE_SMURF : {
      const error = action.payload.error;
      const smurf = action.payload.smurf;
      if (smurf !== null) {
        return {
          ...state, 
          smurfs: smurf
        }
      } else if (error !== null) {
        return {
          ...state,
          error: error
        }
      } else {
        return {
          ...state
        }
      }
    }
    default: {
      return state;
    }
  }
}