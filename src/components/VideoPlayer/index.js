import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/nxnP9KvSE_M?si=JdSzIgVoX1brrRJO" />
    </div>
  </div>
)

export default VideoPlayer
