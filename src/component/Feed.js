import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchVideos } from '../api/fetch';
import Listing from './Listing';
import './Feed.css'
import ModalWindow from './ModalWindow.js'
import NoPage from './NoPage';


function Feed() {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();
  const [modalWindow, setModalWindow] = useState(false)

  const [error, setError] = useState(false);

  useEffect(()=>{
    searchVideos(searchTerm)
    .then((response) => {
      setVideos(response.items);
    })
    .catch((error)=>{
      setVideos([])
      setModalWindow(true)
      setError(true)
    })
  }, [searchTerm,modalWindow])


  useEffect(()=>{
    if (videos === undefined){
      setModalWindow(true)
    }

  })


  return (

    <section className="">
      <div className="videos row">
        {modalWindow ? 
        (<ModalWindow setModalWindow={setModalWindow}/>)
        : videos.map((video) =>{
          return <Listing video={video} key={video.id.videoId} />
        })}
      </div>

    </section>
  )
}

export default Feed