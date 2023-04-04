import React from 'react';
import {Error,Loader,ArtistCard} from '../components'
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

const TopArtists = () => {
    const {data,isFetching,error} = useGetTopChartsQuery();
    
    if(isFetching) return <Loader/>
    if(error) return <Error/>

return (
<div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center overflow-x-auto scrollbar-thin 
      scrollbar-thumb-[#110f0f] gap-8">
        {data?.map((track) => (
          <ArtistCard
            key={track.key}
            track={track}
            
          />
        ))}
      </div>
    </div>
)
}
export default TopArtists;
