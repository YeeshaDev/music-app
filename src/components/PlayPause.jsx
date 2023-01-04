import {FaPlayCircle,FaPauseCircle} from 'react-icons/fa'
const PlayPause = ({isPlaying,activeSong,handlePause,
handlePlay,song}) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
  size={45}
  className='text-green-500'
  onClick={handlePause}
  />
) : (
  <FaPlayCircle
  size={45}
  className='text-green-500'
  onClick={handlePlay}
  />
)
  
);

export default PlayPause;
