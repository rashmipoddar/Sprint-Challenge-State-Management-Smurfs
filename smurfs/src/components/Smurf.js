import React from 'react';

const Smurf = props => {
  return (
    <>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
      <button>Delete</button>
    </>
  )
}

export default Smurf;