import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
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
            <Smurf key={smurf.id} smurf={smurf} />
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.getSmurfsReducer.isFetching,
    error: state.getSmurfsReducer.error,
    smurfs: state.getSmurfsReducer.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);