import React, { useState } from "react";
import Head from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([])

  function createNote(inputText){
    setNote(prev => [...prev,inputText])
}

function deleteNote(id){
  setNote((prev)=>{
   return prev.filter((ele,index)=> index !== id)
  })
  console.log(note+ "from delete function");
}


  return (
    <div>
      <Head />
      <CreateArea addNote={createNote}/>
      {note.map((element,index) => 
      <Note 
       key={index} 
       id={index}
       title={element.title} 
       content={element.content} 
       deleteNote={deleteNote}
       />)}
      
      <Footer />
    </div>
  );
}

export default App;