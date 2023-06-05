import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { searchVideos } from '../api/fetch';
import Listing from './Listing';
import './Feed.css'
import ModalWindow from './ModalWindow.js'
import SearchError from './SearchError';


function Feed() {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();
  const [modalWindow, setModalWindow] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=25&key=${process.env.REACT_APP_API_KEY}`)
    .then((response) =>{
      if (response.ok) {
        return response.json()
      } else if (response.status !== 200){
        setModalWindow(true)
      }
      console.log(response.status)
  })
    .then((response) => {
      setVideos(response.items);
      if (response.items.length === 0){
        setError(true)
        console.log(response.items.length)
      } else {
        setError(false)
      }
    })
    .catch((error)=>{
      setVideos([])
      setModalWindow(true)
      setError(true)
    })
  }, [searchTerm,modalWindow])

// useEffect(()=>{
//   if (videos.length === 0){
//     setError(true)
//   }
// },[])
  // if (videos.length === 0){
  //  setError(true) 
  // }

  return (
    <section className="">
      <div className="videos row">
        <div className="errorMessage">

        {error && <SearchError />}
        </div>

      { modalWindow ? 
        (<ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow}/>) :
          videos.map((video) =>{
            return <Listing video={video} key={video.id.videoId} />
          })
        }
      
      </div>
    </section>
  )
}

export default Feed





{/* <section className="">
<div className="videos row">
{ error ? 
  (<SearchError />) :
  ( true ? 
  (<ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow}/>)
  : videos.map((video) =>{
    return <Listing video={video} key={video.id.videoId} />
  }))
}
</div>

</section> */}