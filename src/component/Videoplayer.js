
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import './Videoplayer.css';

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const API_KEY = 'YOUR_YOUTUBE_API_KEY';

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
  }, [id, API_KEY]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="container">
      {video ? (
        <>
          <div className="video-player">
            <YouTube videoId={id} className="youtube-player" opts={opts} />
          </div>
          <div className="video-details">
            <h2 className="video-title">{video.snippet.title}</h2>
            <div className="description-section">
              <button className="toggle-button" onClick={toggleDescription}>
                {showDescription ? 'Hide Description' : 'Show Description'}
              </button>
              {showDescription && <p className="video-description">{video.snippet.description}</p>}
            </div>
          </div>
        </>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayer;

