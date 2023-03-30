import { Link } from "react-router-dom";

const DetailsHeader = ({artistId,songData,artistData}) =>{ 

  const artistPath =  artistData?.artists[artistId]?.attributes
console.log(artistData)
  return (
  <div className="relative w-full flex flex-col">
  <div className="w-full bg-gradient-to-l from-transparent
   to-[#252424] sm:h-48 h-28 p-10 "/>
   <div className="absolute inset-0 flex items-center">
<img 
src={artistId ? artistData?.attributes?.artwork?.url.replace('{w}','500').replace('{h}', '500') : songData?.images?.coverart}
alt='artist'
className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover
border-2 shadow-xl shadow-[#161616]" 
/>
<div className="ml-3">
<h2 className="font-bold sm:text-3xl text-xl">{artistId ? artistData?.attributes?.name : songData?.title}</h2>
{!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}

        {/*Adding the music genre of the particular music that was clicked*/}
        <p className="text-base text-gray-400 mt-2">{artistId ? artistData?.attributes?.genreNames[0] 
        : songData?.genres?.primary}</p>
</div>
   </div>
   
  </div>
)
}

export default DetailsHeader;
