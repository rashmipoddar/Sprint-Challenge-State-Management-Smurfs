import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import { deleteSmurf } from '../actions';
import Smurf from './Smurf';

const Smurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, [])

  return (
    <>
      {props.isFetching && <p>Loading......</p>}
      <h1>Smurfs</h1>
      <div>
        {props.smurfs.map(smurf => {
          return (
            <Smurf key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf} />
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.smurfsReducer.isFetching,
    error: state.smurfsReducer.error,
    smurfs: state.smurfsReducer.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs, deleteSmurf})(Smurfs);