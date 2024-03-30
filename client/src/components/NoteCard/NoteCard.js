import React from 'react'
import "./NoteCard.css";
import DeleteIcon from "./delete-icon.png";
import axios from 'axios';
import toast from 'react-hot-toast';

function NoteCard({_id, tittle,content,category, loadNotes}) {

    const deleteNote = async()=>{
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${_id}`)
        toast.success(response.data.message)
        loadNotes();
    }

  return (
    
           <div className='note-card'>
              <h3 className='note-card-tittle'>{tittle}</h3>
              <p className='note-card-content'>{content}</p>
              <span className='note-card-category'>{category}</span>
              <img src={DeleteIcon} 
              alt='delete-icon'
              className='delete-icon'
              onClick={deleteNote}/>
            </div>
    
  )
}

export default NoteCard