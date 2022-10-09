import React from 'react'

// STYLE
import '../../scss/hero.scss'


const NavItems = (props) => {
  return (
        <li className="nav-li cursor-pointer hover:bg-blackBg py-4 flex mb-3 items-center transition-all ease-in-out  ">
            <img className='w-8 ml-20 select-none' src={props.src}></img>
            <p className='ml-5 select-none'>{props.text}</p>
        </li>
  )
}

export default NavItems
