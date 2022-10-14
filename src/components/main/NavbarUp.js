import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Add from '../../images/add-button-svgrepo-com 1.svg'
import Logout from '../../images/logout-svgrepo-com.svg'

import { setPage } from '../../features/heroPage'

// COMPONENTS
import Burger from './Burger'

const NavbarUp = () => {
  Axios.defaults.withCredentials = true
  const [onLogout, setonLogout] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const variants = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    shown: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const items = {
    hidden: {
      y: 100,
      transition: {
        duration: 0.5
      }
    },
    shown: {
      y: 0,
      transition: {
        duration: 0.5
      }
    }

  }

  const handleLogout = () => {
    Axios.post(`${process.env.REACT_APP_BASEURL}/logout`).then((response) => {
      navigate("/", { replace: true })
    })
  }

  const handleNewTask = () => {
    dispatch(setPage({value: "newtask"}))
  }

  return (
    <div className='flex items-center justify-between w-[85%] lg:w-[90%] xl:w-[95%]'>
        <Burger/>

        <div className='newtask-button verify-login relative bg-black justify-center items-center text-white font-space w-32 h-10 cursor-pointer select-none flex lg:h-12 lg:w-40' onClick={handleNewTask}>
            <img src={Add} alt="Add" className='w-4 lg:w-6 z-10 relative'></img>
            <p className='font-space ml-3 text-sm font-semibold z-10 relative'>NEW TASK</p>
        </div>

        <div className='bg-[#252531] text-white font-space h-12 w-40 justify-center items-center cursor-pointer select-none hidden lg:flex transition-all ease-in-out relative overflow-hidden' onClick={handleLogout}>

            <motion.div variants={variants} initial="hidden" animate={onLogout ? "shown" : "hidden"} exit="hidden" className='group absolute w-[110%] h-full flex justify-center items-center mx-auto overflow-hidden'
            onMouseEnter={() => setonLogout(true)} 
            onMouseLeave={() => setonLogout(false)}>
              <motion.div variants={items} className='bg-[#D05261] w-[50%] h-[140%] rounded-full'></motion.div>
              <motion.div variants={items} className='bg-[#D05261] w-[50%] h-[140%] rounded-full ml-[-1.5rem]'></motion.div>
              <motion.div variants={items} className='bg-[#D05261] w-[50%] h-[140%] rounded-full ml-[-1.5rem]'></motion.div>
            </motion.div>


            <img src={Logout} alt='Logout' className='z-10 relative select-none pointer-events-none'></img>
            <p className='ml-3 font-bold z-10 relative select-none pointer-events-none'>LOG OUT</p>
        </div>
    </div>  
  )
}

export default NavbarUp