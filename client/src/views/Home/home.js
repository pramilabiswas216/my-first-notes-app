import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./home.css";

function Home() {

  const [notes, setNotes] = useState([]);

  const loadNotes = async() => {
    const response = await axios.get('http://localhost:5000/notes');

    console.log(response.data.data);

    setNotes(response.data.data);
  }
  useEffect(()=>{
    loadNotes();
  },[])

  return (
    <div>
      <h1>home</h1>

      {
        notes.map((note, index)=>{
          return(
            <div>
              <h3>{note.tittle}</h3>
              <p>{note.content}</p>
              <span>{note.category
              }</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
