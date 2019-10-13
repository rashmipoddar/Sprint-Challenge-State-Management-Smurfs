import React from 'react';

const Smurf = props => {

  const handleClick = () => {
    props.deleteSmurf(props.smurf.id)
  };

  console.log(props);
  return (
    <>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
      <button onClick={handleClick}>Delete</button>
    </>
  )
}

export default Smurf;