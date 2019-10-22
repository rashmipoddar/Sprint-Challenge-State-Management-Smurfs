import React, { useState } from 'react';

const Smurf = props => {

  const [ edit, setEdit ] = useState(false);
  let smurf = props.smurf

  const handleDelete = () => {
    props.deleteSmurf(props.smurf.id)
  };

  const handleEdit = () => {
    // props.editSmurf(props.smurf.id);
    setEdit(!edit)
  }

  console.log(props);
  return (
    <>
      {!edit ? <h1>{props.smurf.name}</h1> : <input type='text'  value={smurf.name}/>}
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Smurf;