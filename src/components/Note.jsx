import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function note(props){

    return (
        <div className="note">
           <h1 className="title">{props.title}</h1>
           <p className="content">{props.content}</p>
           <button onClick={() =>{props.deleteNote(props.id);}}> <DeleteIcon/> </button>
        </div>
    )
}
export default note;