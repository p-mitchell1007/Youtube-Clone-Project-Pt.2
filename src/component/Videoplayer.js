

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
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setVideo(data.items[0]);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [id, process.env.REACT_APP_API_KEY]);

  return (
    <div>
      <YouTube videoId={id} opts={opts} />
      {/* <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p> */}
    </div>
  );
};

export default VideoPlayer;