import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    
    const [inputText, setInputText] = useState({title : "", content:""});
    const [inputClicked, setIsClicked] = useState(false);
    

    function handleChange(event){
        const {name,value} = event.target;
        setInputText(prev=>({...prev,[name]: value}))
    }

    function isClicked(){
      setIsClicked(true)
    }
   
  return (
    <div>
      <form  className="create-note">

      {inputClicked && <input name="title" 
        placeholder="Add Title" 
        value={inputText.title}
        onChange={handleChange}
        />}
        

        <textarea 
        name="content" 
        placeholder="Add Content" 
        rows={inputClicked ? 3 : 1} 
        value={inputText.content}
        onChange={handleChange}
        onClick={isClicked}
        />

        <Zoom in={inputClicked}>
        <Fab type="submit" onClick={(event)=> {
            props.addNote(inputText);
            setInputText({title : "", content:""});
            event.preventDefault();
        }}>
        <AddIcon fontSize="small"/></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
