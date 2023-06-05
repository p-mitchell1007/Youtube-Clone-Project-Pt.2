import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Searchbar.css'

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
      <form onSubmit={handleSubmit} className='searchBar'>
        <input name={'search'} placeholder='Search...' onChange={e => setInput(e.target.value)} value={input}></input>
        <button className='buttn btn'>Search</button>
      </form>
    </div>
  )
}

export default Searchbar