import React from 'react';
import { useParams } from 'react-router-dom';

import YouTube from 'react-youtube';

const VideoPlayer = ({ video }) => {
  const {id} = useParams();
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={id} opts={opts} />
      {/* <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p> */}
    </div>
  );
};

export default VideoPlayer;