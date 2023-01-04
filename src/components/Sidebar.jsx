import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { FaMusic } from "react-icons/fa";


const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];


const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((list) => (
      <NavLink
        key={list.name}
        to={list.to}
        onClick={() => handleClick && handleClick()}
        className="flex flex-row justify-start items-center my-8 
        text-lg font-medium hover:text-green-400 "
    
      >
        <list.icon className="w-7 h-6 mr-2"/>
        {list.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
       <div className="md:flex hidden flex-col w-[240px]
       py-10 px-4 bg-[#201f1f] ">
        <div className="hidden md:flex flex-row items-center mt-9">
        <FaMusic size={30} 
        className='text-[#22c55e]'/>
       <h2 className="ml-3 font-bold text-3xl text-white">Musik</h2>
        </div>
       <NavLinks/>
    </div>
    <div className="absolute md:hidden block top-6 right-3"> 
      {!menuOpen ? (
        <HiOutlineMenu className="w-6 h-6 mr-1 cursor-pointer"
        onClick={() => setMenuOpen(true)}/>
        
      ) : (
        <RiCloseLine className="w-6 h-6 mr-1 cursor-pointer"
        onClick={() => setMenuOpen(false)}/>
      )}
    </div>
    <div className={`absolute top-0 h-screen w-[40%] bg-gradient-to-tl from-white/10 to-[#333] backdrop-blur-lg z-10 p-6 
    md:hidden smooth-transition ${menuOpen ? 'left-0' : '-left-full'}`}>
       <div className="flex flex-row items-center mt-9">
        <FaMusic size={30} 
        className='text-[#22c55e]'/>
       <h2 className="ml-3 font-bold text-3xl text-white">Musik</h2>
        </div>
       <NavLinks handleClick={() => setMenuOpen(false)}/>
    </div>
   </>
  )
  
};

export default Sidebar;
