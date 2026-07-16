import './VideoPlayer.css'

const VideoPlayer = ({ src, poster, title = 'Video' }) => (
  <div className="sf-video">
    <video className="sf-video__player" src={src} poster={poster} controls preload="none" title={title}>
      Your browser does not support embedded videos.
    </video>
  </div>
)

export default VideoPlayer
