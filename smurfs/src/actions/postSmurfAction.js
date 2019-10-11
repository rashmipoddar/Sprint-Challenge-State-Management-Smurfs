import axios from 'axios';

export const START_POSTING_SMURF = 'START_POSTING_SMURF';
export const POST_SMURF_SUCCESSFUL = 'POST_SMURF_SUCCESSFUL';
export const POST_SMURF_FAILED = 'POST_SMURF_FAILED';

export const postSmurf = (data) => dispatch => {
  dispatch({type: START_POSTING_SMURF});

  axios.post('http://localhost:3333/smurfs', data)
    .then(response => {
      console.log(response);
      // dispatch({type: POST_SMURF_SUCCESSFUL, payload: response.data});
    })
    .catch(error => {
      console.log(error);
      dispatch({type: POST_SMURF_FAILED, payload: error.response });
    })
}