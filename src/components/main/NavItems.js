import React from 'react'
import { useDispatch } from 'react-redux'

// STYLE
import '../../scss/hero.scss'

import { setPage } from '../../features/heroPage'


const NavItems = (props) => {
  const dispatch = useDispatch()

  const handleNav = (e) => {
    const id = e.currentTarget.id

    if (id === "Dashboard") {
      dispatch(setPage({value: "dashboard"}))
    }
    
  }


  return (
        <li className="nav-li cursor-pointer hover:bg-blackBg py-4 flex mb-3 items-center transition-all ease-in-out" id={props.text} onClick={handleNav}>
            <img className='w-8 ml-20 select-none' src={props.src}></img>
            <p className='ml-5 select-none'>{props.text}</p>
        </li>
  )
}

export default NavItems
