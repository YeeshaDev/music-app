import {Error,Loader,SongCard} from '../components';
import {genres} from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useDispatch,useSelector } from "react-redux";
import { useGetSongByGenreQuery } from '../redux/services/ShazamCore';

const Discover = () => {
    const dispatch = useDispatch();
    const {genreListId} = useSelector((state) => state.player)
    const {activeSong,isPlaying} = useSelector((state) => state.player)
    const {data,isFetching,error} = useGetSongByGenreQuery(genreListId || 'POP')
    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;


    if (isFetching) {
        return <Loader/>
    }
    if (error) {
        return <Error/>
    }

    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center
            sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='text-bold text-white text-3xl text-left sm:text-center'>Discover {genreTitle || 'Pop'}</h2>


            </div>
            <div className='mx-auto max-w-sm p-3 
        sm:max-w-[38rem]  md:max-w-xl lg:max-w-[40rem] ml-[-1rem]'>
      <div
      className='flex flex-row gap-4 mt-[-2rem] mb-1
      mx-auto p-3 overflow-x-auto scrollbar-thin 
      scrollbar-thumb-[#110f0f]'
      >
        {genres.map((genre) => {

         const{title,value} = genre;

     return (
        
     <label key={value}
     htmlFor='genre'
      className='whitespace-nowrap px-4 py-2 bg-[#22c55e]
      text-white rounded-full hover:bg-white hover:text-[#22c55e] cursor-pointer 
      hover:scale-95 transition-all'
      onClick={() => dispatch(selectGenreListId(value))}
      value={genreListId || 'pop'}
      >
        {title}
        </label>
         
    
            )
        })}
      </div>
        </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data.map((song,i) => {
                return (
                    <SongCard
                    key={song.key}
                    song={song}
                    index={i}
                    data={data}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                
                   />
                )
            })}
            </div>
            </div>
    )
}


export default Discover;
