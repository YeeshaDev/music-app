import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard =({song,index,isPlaying,handlePause,handlePlay,activeSong}) => {
  return (
  <div className="w-full flex flex-row items-center text-white hover:bg-[#272626]
  py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h1 className="mr-3">{index + 1}</h1>
    <div className="flex-1 flex flex-row justify-between items-center">
<img src={song?.images?.coverart}
alt={song?.title}
className='w-20 h-20 rounded-lg'
/>
<div className="flex-1 flex flex-col justify-center mx-3">
  <Link to={`/songs/${song.key}`}>
    <p className="font-bold text-xl">{song.title}</p>
  </Link>
  <Link to={`/artists/${song?.artists[0].adamid}`}>
    <p className="text-base text-gray-300 mt-1">{song.subtitle}</p>
  </Link>
</div>
    </div>
      <PlayPause
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePause={handlePause}
      handlePlay={() => handlePlay(song,index)}
      />
  </div>
  )
}
const TopPlay = () => {

  const dispatch = useDispatch();
  const {isPlaying,activeSong} = useSelector((state) => state.player)
  const{data} = useGetTopChartsQuery();

  const topRef = useRef(null);

  //This enables the page to scroll smoothly to the top when it refreshes
  useEffect(() => {
topRef.current.scrollIntoView({ behavior:'smooth'})
  })
  //This shows only the first top five songs
  const topSongs = data?.slice(0,5)

  const handlePauseBtn = () => {
    dispatch(playPause(false))
    }
    
    const handlePlayBtn = (song,index) => {
    dispatch(setActiveSong({song,index,data}));
    dispatch(playPause(true))
    }
  return (
    <div 
    ref={topRef}
    className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1
    xl:max-w-[500px] max-w-full flex flex-col'
    >
    <div className="w-full flex flex-col mt-10">
      <div className="flex flex-row justify-between items-center">
<h1 className="font-bold text-2xl">Top Charts</h1>
<Link to='/top-charts'>
  <p className="text-gray-400 text-base cursor-pointer mr-6">See more</p>
</Link>
      </div>
      <div className="mt-4 flex flex-col gap-1">
{topSongs?.map((song,index) => {
  return (
    <TopChartCard
    key={song?.key}
    song={song}
    index={index}
    isPlaying={isPlaying}
    activeSong={activeSong}
    handlePause={handlePauseBtn}
    handlePlay={() => handlePlayBtn(song,index)}
    />
  )
})}
      </div>
      </div> 
      <div className="w-full flex flex-col mt-8">
      <div className="flex flex-row justify-between items-center">
<h1 className="font-bold text-2xl">Top Artists</h1>
<Link to='/top-artists'>
  <p className="text-gray-400 text-base cursor-pointer mr-6">See more</p>
</Link>
      </div>
      <div
      className="flex flex-row gap-4 mt-[1rem] mb-1
      mx-auto p-3 overflow-x-auto scrollbar-thin 
      scrollbar-thumb-[#110f0f]"
        >
          {topSongs?.slice(0, 7).map((artist) => (
            <div
              key={artist?.key}
              className="shadow-lg rounded-full animate-slideright pb-[3rem]"
            >
              <Link to={`/artists/${artist?.artists[0]?.adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-[100%] object-cover" />
              </Link>
            </div>
          ))}
        </div>
        </div> 
  </div>
  )
};

export default TopPlay;
