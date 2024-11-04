import React,{useState,useEffect, useRef} from 'react'
import { Link,NavLink } from 'react-router-dom'
import { RiMenuFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";


const navLinks = [
  {
    to:"/category",
    display:'Shop'
  },
  {
    to:"/sale",
    display:"On Sale"
  },
  {
    to:"/new",
    display:"New arrivals"
  },
  {
    to:"/brands",
    display:"Brands"
  }

]

const Header = () => {

  // responsive menu
  const [showMenu,setShowmenu] = useState(false)

  const menuhandler = () => {
    setShowmenu(!showMenu)
  }


  // search bar 
  const [showSearchBar, setSearch] = useState(false)

  const searchHandler = () => {
    setSearch(!showSearchBar)
  }

  // fixed navbar

  const navBar = useRef(null)

  useEffect(()=>{
    window.addEventListener("scroll",(e)=>{
      if(window.scrollY > 100){
        navBar.current.classList.add("fixed_navbar")
      }else{
        navBar.current.classList.remove("fixed_navbar")
      }
    })
  },[])

  return (
    <header className='w-full h-[100px] shadow-headerShadow bg-white' ref={navBar}>
      {/* HEADING TOP SECTION START */}
      <div className='w-full h-[30px] py-1 bg-black'>
        <p className='text-center text-[14px] text-gray-200'>Sign up and get 20% off to your first order. <Link to="/signup"><span className='text-[15px] border-b-[1px] text-white'>Sign Up Now</span></Link></p>
      </div>
      {/* HEADING TOP SECTION END */}

      {/* HEADING SECTION START */}
      <div className='h-[70px]'>
        <div className="container h-full flex items-center justify-between">
          {/* Logo */}
          <div className='flex gap-4 items-center'>
            <RiMenuFill className='hamMenu cursor-pointer' size="22px" onClick={menuhandler}/>
            <h1 className='uppercase font-[900] text-[40px]'>Shop.co</h1>
          </div>

          {/* navigation links */}
          <div className={`navigation ${showMenu ? "block":"hidden"} lg:block`}>
            <RiCloseLine size="25px" className='crossIcon' onClick={menuhandler}></RiCloseLine>
            <ul className='flex gap-4 text-[16px] font-[400] menu'>
              {
                navLinks.map((link,index) => {
                  return <li key={index}><NavLink to={link.to} className={({isActive}) => isActive?"text-red-400":"hover:text-red-400"}>{link.display}</NavLink></li>
                })
              }
            </ul>
          </div>

          {/* search bar */}
          <div className={`search_div ${showSearchBar ? "block":"hidden"} md:block pointer-events-none`}>
            <div className='h-[45px] py-[3px] px-5 bg-gray-300 flex rounded-[50px] search_bar'>
              <RiSearchLine size="22px" className='h-full'/>
              <input type="search" className='h-full px-2 bg-gray-300 outline-none focus:outline-none w-[350px] placeholder:text-[14px]' placeholder='Search the product' />
            </div>
          </div>

          {/* right links */}
          <div className='flex gap-4'>
            <RiSearchLine size="22px" className='searchIconStyle cursor-pointer' onClick={searchHandler}/>
            <RiUser3Line size="22px" className='cursor-pointer'></RiUser3Line>
            <RiShoppingCart2Line size="22px" className='cursor-pointer'></RiShoppingCart2Line>
          </div>
        </div>
      </div>
      {/* HEDAING SECTION END */}
    </header>
  )
}

export default Header