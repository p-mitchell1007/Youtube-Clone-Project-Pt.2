import React from 'react'
import { Link } from 'react-router-dom'
import './Listing.css'

function Listing({video}) {

  function formatViews(views){
    if (views.length >=4 && views.length <7){
      views = views.slice(0,-3) + "," + views.slice(-3)
    }
    else if(views.length >= 7){
      if (views[1] !== "0"){
        views = views[0] + "." + views[1] + "M";
      }else{ views = views[0] + "M"}
    }
    return views
  }

  return (
    <>
    {video.statistics ?
    <div className='videoCard col'>
      <div className=''>
        <Link to={`/video/${video.id}`}>
                <img className='thumbnail' src={video.snippet.thumbnails.high.url} alt={`${video.id}`}/>
        </Link>
        </div>
        <div className='videoInfo'>
            <h4>{video.snippet.title}</h4>
            <div className='details'>
              <span className='channelTitle'>{video.snippet.channelTitle}</span>
              <p className='viewCount'>{formatViews(video.statistics.viewCount)} views</p>
            </div>
        </div>
    </div>
    :
    <div className='videoCard col'>
      <div>
        <Link to={`/video/${video.id.videoId}`}>
                <img className='thumbnail' src={video.snippet.thumbnails.high.url} alt={`${video.id.videoId}`}/>
        </Link>
      </div>
        <div className='videoInfo'>
            <h4>{video.snippet.title}</h4>
        </div>
    </div>

    }
    </>

  )
}

export default Listing