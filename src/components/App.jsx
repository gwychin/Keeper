import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listOfNotes, setNotes] = useState([]);

  function addNotes(note){
    setNotes(prevItems => {
      return [...prevItems, note]
    });

    
  }

  function deleteNotes(id){
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {listOfNotes.map((notes, index) => (
        <Note 
          key={index}
          id={index} 
          title={notes.title}
          content={notes.content}
          onDelete={deleteNotes}
        />   
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
