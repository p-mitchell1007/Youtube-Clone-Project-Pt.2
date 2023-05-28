import React from 'react'
import { Link } from 'react-router-dom'
import './Listing.css'

function Listing({video}) {

  return (
    <div className='videoCard col'>
        <Link to={`/video/${video.id.videoId}`}>
                <img className='thumbnail' src={video.snippet.thumbnails.high.url} alt={`${video.id.videoId}`}/>
        </Link>
        <div className='videoInfo'>
            <h4>{video.snippet.title}</h4>
        </div>
    </div>
  )
}

export default Listing