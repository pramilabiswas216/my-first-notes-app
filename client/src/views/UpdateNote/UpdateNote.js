import React, { useEffect, useState } from 'react'
import "./UpdateNote.css";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function NewNote() {
  const [tittle, setTittle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const loadNote = async (id) =>{
    if(!id) return

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes/${id}`)

    setTittle(response.data.data.tittle)
    setCategory(response.data.data.category)
    setContent(response.data.data.content)
  }

  const UpdateNote = async()=>{
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/notes/${id}`,{
      tittle:tittle,
      category:category,
      content:content
    })

    toast.success(response.data.message)

    window.location.href= '/'
  }

  const {id} = useParams()

  useEffect(()=>{
       loadNote(id);
  },[id])

  return (
    <div>
      <h1 className='app-header'>UpdateNote</h1>

       
      <form className='form-new-note'>

        <input type='text' value={id} disabled
        className='input-id'
        />

        <input type='text' 
        placeholder='Tittle'
        value={tittle}
        onChange={(e)=>{
          setTittle(e.target.value)
        }}
        className='input-tittle'
        />

        <select value={category}
         onChange={(e)=>{
         setCategory(e.target.value)
         }}
         className='input-category'
         >
          <option  value="">Select a category</option>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="learning">Learning</option>
          <option value="other">Other</option>
        </select>

        <input type='text' 
        placeholder='Content'
        value={content}
        onChange={(e)=>{
        setContent(e.target.value)
        }}
        className='input-content'
        />

        <button type='button'
         onClick={UpdateNote} 
         className='save-btn'
         >Update</button>
      
      </form>
    </div>
  )
}

export default NewNote
