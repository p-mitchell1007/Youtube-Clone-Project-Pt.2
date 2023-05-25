import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/search/${input}`)
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setInput(e.target.value)} value={input}></input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Searchbar