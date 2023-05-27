
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

// import React, { useEffect, useState } from 'react';

// const VideoPlayer = ({ match }) => {
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${match.params.id}&key=AIzaSyDn7i8YP_2GuXeYYFqj-fKUDfR4DLfSwr8`
//         );

//         const data = await response.json();

//         if (data.items.length > 0) {
//           setVideo(data.items[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchVideo();
//   }, [match.params.id]);

//   return (
//     <div>
//       {video ? (
//         <div>
//           <h2>{video.snippet.title}</h2>
//           <p>{video.snippet.description}</p>
//           <iframe
//             title="video player"
//             width="560"
//             height="315"
//             src={`https://www.youtube.com/embed/${match.params.id}`}
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default VideoPlayer;
