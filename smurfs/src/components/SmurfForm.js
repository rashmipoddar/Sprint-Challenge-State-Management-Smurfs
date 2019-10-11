import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions';

const SmurfForm = (props) => {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState();
  const [ height, setHeight ] = useState();

  const handleName = event => {
    setName(event.target.value);
  }

  const handleAge = event => {
    setAge(event.target.value);
  }

  const handleHeight = event => {
    setHeight(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(name, age, height);
    props.postSmurf({name, age, height});
    setName('');
    setAge('');
    setHeight('');
  }

  return (
    <form>
      <input 
        name='name'
        type='name'
        placeholder='Name'
        value={name}
        onChange={handleName}
      />
      <input 
        name='age'
        type='age'
        placeholder='Age'
        value={age}
        onChange={handleAge}
      />
      <input 
        name='height'
        type='height'
        placeholder='Height'
        value={height}
        onChange={handleHeight}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    isPosting: state.postSmurfReducer.isPosting,
    error: state.postSmurfReducer.error
  }
}

export default connect(mapStateToProps, {postSmurf})(SmurfForm); 