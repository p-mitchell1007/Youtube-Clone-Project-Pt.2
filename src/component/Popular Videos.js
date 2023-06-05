import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchVideos } from '../api/fetch';
import Listing from './Listing';

import './PopularVideo.css'

function PopularVideo() {
    const [videos, setVideos] = useState([])
    const {searchTerm} = useParams();
  
    useEffect(()=>{
      searchVideos(searchTerm)
      .then((response) => {
        setVideos(response.items);
      })
      .catch((error)=>{
        setVideos([])
      })
    }, [searchTerm])
  
    return (
      <section className="">
        <div className="videos row">
          {videos.map((video) =>{
            return <Listing video={video} key={video.id.videoId} />
          })}
        </div>
  
      </section>
    )
  }
  
  export default PopularVideo