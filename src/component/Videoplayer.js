

import "./Videoplayer.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const API_KEY = 'AIzaSyDn7i8YP_2GuXeYYFqj-fKUDfR4DLfSwr8'; // Replace with your YouTube Data API key

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`
        );
        const data = await response.json();
        setVideo(data.items[0]);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [id, API_KEY]);

  return (
    <div className="container">
      {video ? (
        <>
        <div className="video-player">
          <YouTube videoId={id} opts={opts} />
        </div>
        <div className="video-details">
          <h2 className='video-title'>{video.snippet.title}</h2>
          <p className='video-description'>{video.snippet.description}</p>
        </div>
        </>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
