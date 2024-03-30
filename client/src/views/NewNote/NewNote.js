import React, { useState } from 'react'
import "./NewNote.css"
import axios from 'axios';
import toast from 'react-hot-toast';

function NewNote() {

  const [tittle, setTittle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const addNote = async ()=>{
       const response = await axios.post(`${process.env.REACT_APP_API_URL}/notes`,
       {
           tittle:tittle,
           category:category,
           content:content
       })

       toast.success(response.data.message)
       setTittle('')
       setCategory('')
       setContent('')
  }

  return (
    <div>
      <h1 className='app-header'>NewNote</h1>

      <form className='form-new-note'>
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
         onClick={addNote} 
         className='save-btn'
         >Save</button>
      
      </form>
    </div>
  )
}

export default NewNote
