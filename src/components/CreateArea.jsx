import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded,setState] = useState(false);
  const [note, setContent] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const { name, value } = event.target;

    setContent(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function expandArea(){
    setState(true);
  }


  return (
    <div>
      <form className="create-note">
        {isExpanded? 
          <input 
          onChange={handleChange}
          value={note.title}  
          name="title" 
          placeholder="Title" />
          :
          null
          }
        <textarea
          onClick={expandArea}
          onChange={handleChange}
          value={note.content}  
          name="content" 
          placeholder="Take a note..." rows={isExpanded? "3" : "1" } />
        
        <Zoom in={isExpanded}>
        <Fab onClick={(e) => {
          props.onAdd(note);
          setContent({
            title: "",
            content: ""
          });
          e.preventDefault();
        }} ><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
