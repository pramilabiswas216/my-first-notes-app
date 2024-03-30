import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./home.css";
import NoteCard from '../../components/NoteCard/NoteCard';

function Home() {

  const [notes, setNotes] = useState([]);

  const loadNotes = async() => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);

    console.log(response.data.data);

    setNotes(response.data.data);
  }
  useEffect(()=>{
    loadNotes();
  },[])

  return (
    <div>
      <h1 className='aap-header'>All Notes</h1>

      {
        notes.map((note)=>{

          const {_id, tittle, content, category}= note;
          return(
            <NoteCard key= {_id} _id={_id} tittle={tittle} content={content} category={category} loadNotes={loadNotes}/>)
        })
      }
    </div>
  )
}

export default Home
