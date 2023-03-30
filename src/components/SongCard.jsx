import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import {playPause,setActiveSong} from '../redux/features/playerSlice'


const SongCard = ({song,index,data,isPlaying,activeSong}) => {
const dispatch = useDispatch();

const handlePauseBtn = () => {
dispatch(playPause(false))
}

const handlePlayBtn = () => {
dispatch(setActiveSong({song,index,data}));
dispatch(playPause(true))
}
  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 
  animate-slideup backdrop-blur-sm
  rounded-lg cursor-pointer hover:bg-[#2b2a2a] hover:scale-[1.05] transition-all">
  <div className="relative w-full h-56 group">
    <div className={`absolute right-[0] bottom-[0] bg-opacity-50 group-hover:flex ${activeSong?.title ===song.title ? 'flex bg-opacity-70' : 'hidden'}`}>
 <PlayPause
 song={song}
 handlePause={handlePauseBtn}
 handlePlay={handlePlayBtn}
 isPlaying={isPlaying}
activeSong={activeSong}
 />
    </div>
<img src={song?.images?.coverart}
alt='song covers'
/>
  </div>
  <div className="mt-4 flex flex-col">
    <p className="font-bold text-lg truncate">
      <Link to={`/songs/${song?.key}`}>
      {song.title}
      </Link>
    </p>
    <p className=" text-sm text-gray-300 truncate">
      <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
      {song.subtitle}
      </Link>
    </p>

  </div>
    </div>
  )
  };

export default SongCard;
