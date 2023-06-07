import ModalWindow from './ModalWindow.js'
import SearchError from './SearchError';
import Listing from './Listing';

import './Home.css'

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [videos, setVideos] = useState([])
  const [modalWindow, setModalWindow] = useState(false)
  const [error, setError] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search and update searchResults state
    // ...

    // Clear search input
    // ...
  };

  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CContentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=21&key=${process.env.REACT_APP_API_KEY}`)
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
  }, [modalWindow])


  return (
    <section className="">
      <h1>Popular Videos</h1>
      <div className="videos row">
        <div className="errorMessage">
          {error && <SearchError />}
        </div>
      { modalWindow ? 
        (<ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow}/>) :
          videos.map((video) =>{
            return <Listing video={video} key={video.id} />
          })
        }
      
      </div>
    </section>
  );
};

export default Home;