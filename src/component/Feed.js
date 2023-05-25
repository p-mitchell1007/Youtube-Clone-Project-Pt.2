import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Feed() {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  return (
    <div>

    </div>
  )
}

export default Feed