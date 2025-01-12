import axios from 'axios';

export const START_FETCHING_SMURFS = 'START_FETCHING_SMURFS';
export const FETCH_SMURFS_SUCCESSFUL = 'FETCH_SMURFS_SUCCESSFUL';
export const FETCH_SMURFS_FAILED = 'FETCH_SMURFS_FAILED';

export const fetchSmurfs = () => dispatch => {
  dispatch({type: START_FETCHING_SMURFS});

  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      dispatch({type: FETCH_SMURFS_SUCCESSFUL, payload: response.data});
    })
    .catch(error => {
      console.log(error);
      dispatch({type: FETCH_SMURFS_FAILED, payload: error });
    })
}

export const POST_SMURF = 'POST_SMURF';

export const postSmurf = (smurfData) => dispatch => {
  dispatch({type: POST_SMURF, payload: {
    smurf: null,
    error: null,
    isPosting: true
  }})

  axios.post('http://localhost:3333/smurfs', smurfData)
    .then(response => {
      console.log('The post response is ', response);
      dispatch({type: POST_SMURF, payload: {
        smurf: response.data,
        error: null,
        isPosting: false
      }})
    })
    .catch(error => {
      console.log(error);
      dispatch({type: POST_SMURF, payload: {
        smurf: null,
        error: error,
        isPosting: false
      }})
    })
}

export const DELETE_SMURF = 'DELETE_SMURF';

export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETE_SMURF, payload: {
    error: null,
    smurf: null
  }})

  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => {
    console.log('The delete response is ', response);
    dispatch({type: DELETE_SMURF, payload: {
      error: null,
      smurf: response.data
    }})
  })
  .catch(error => {
    console.log(error);
    dispatch({type: DELETE_SMURF, payload: {
      error: error,
      smurf: null
    }})
  })
}


export const EDIT_SMURF = 'EDIT_SMURF';

export const editSmurf = id => dispatch => {
  dispatch({type: EDIT_SMURF, payload: {
    error: null,
    smurf: null
  }})
  axios.put(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}
