import React from 'react'
import { Link } from 'react-router-dom'

function Listing({video}) {
    console.log(video)

  return (
    <div>
        <Link to={`/video/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.high.url} alt={`${video.id.videoId}`}/>
        </Link>
        <div>
            <h4>{video.snippet.title}</h4>
        </div>
    </div>
  )
}

export default Listing