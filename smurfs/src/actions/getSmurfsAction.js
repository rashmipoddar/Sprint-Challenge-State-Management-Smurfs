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