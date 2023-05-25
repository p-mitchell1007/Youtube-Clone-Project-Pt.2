
export function searchVideos(searchTerm){
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`).then((response) => response.json())
}