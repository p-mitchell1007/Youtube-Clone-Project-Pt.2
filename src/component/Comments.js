import React, { useEffect, useState } from 'react'
import './Comment.css'

function Comments({id}) {

    const [comments, setComments] = useState(
        JSON.parse(window.localStorage.getItem(id))|| []
    )

    const [form, setForm] = useState({
        name: '',
        comment: ''
    })

    function handleTextChange(e){
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        if ((e.target.name.value && e.target.comment.value)){
            resetForm()
            setComments((text) =>{
                return [...text,
                {
                    name: e.target.name.value,
                    comment: e.target.comment.value
                }]
            })
        }
    }

    function resetForm(){
        setForm({
            name: '',
            comment: ''
        })
    }

    useEffect(() =>{
        localStorage.setItem(id, JSON.stringify(comments));
    }, [id, comments])

  return (
    <div className="comments">
        {/* <h2 className='heading'>Comments</h2> */}
        <form onSubmit={handleSubmit}>
            <div className="input">
                <div className='nameInput'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Name..' onChange={handleTextChange} value={form.name}></input>
                </div>

                <div className='commentInput'>
                    <label htmlFor='comment'>Comment</label>
                    <input type='text' id='comment' placeholder='...' onChange={handleTextChange} value={form.comment}></input>
                </div>
                
                <div className='submit'>  
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>

        </form>

        <hr />

        <div className='listOfComments'>
            {comments && comments.map((note)=>{
                const key = Math.floor(Math.random()* 10000)
                return <li key={key} className='postedComment'>
                    <span>
                        {note.name}
                    </span>
                    <p>
                        {note.comment}
                    </p>
                </li>
            })}
        </div>
    </div>
  )
}

export default Comments