import React from 'react'

function Searchbar() {
  return (
    <div>Searchbar</div>
  )
}

export default Searchbar

// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchBar = ({ onVideoSelect }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [videos, setVideos] = useState([]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           part: 'snippet',
//           maxResults: 5,
//           q: searchTerm,
//           key: 'YOUR_YOUTUBE_API_KEY',
//         },
//       });

//       setVideos(response.data.items);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={searchTerm} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {videos.map((video) => (
//           <li key={video.id.videoId}>
//             <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
//             <p>{video.snippet.title}</p>
//             <button onClick={() => onVideoSelect(video)}>Watch</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;