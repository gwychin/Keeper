import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div onClick={() => {
      props.onDelete(props.id);
    }} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button><DeleteIcon/></button>
    </div>
  );
}

export default Note;
