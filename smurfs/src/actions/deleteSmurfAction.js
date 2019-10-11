import axios from 'axios';

export const START_DELETING_SMURF = 'START_DELETING_SMURF';
export const DELETE_SMURF_SUCCESSFUL = 'DELETE_SMURF_SUCCESSFUL';
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED';

export const deleteSmurf = (data) => dispatch => {
  dispatch({type: START_DELETING_SMURF});

  axios.delete(`http://localhost:3333/smurfs/${data}`)
    .then(response => {
      console.log(response);
      // dispatch({type: DELETE_SMURF_SUCCESSFUL, payload: response.data});
    })
    .catch(error => {
      console.log(error);
      dispatch({type: DELETE_SMURF_FAILED, payload: error.response });
    })
}